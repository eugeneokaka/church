import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await currentUser();

  if (!user) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  // Verify Admin or Secretary Role
  const dbUser = await prisma.user.findUnique({
    where: { clerkId: user.id },
    include: { role: true },
  });

  if (!dbUser || (dbUser.role.name !== "admin" && dbUser.role.name !== "secretary")) {
    return NextResponse.redirect(new URL("/", request.url), 303);
  }

  const { id } = await params;
  const formData = await request.formData();
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const dateStr = formData.get("date") as string;
  const location = formData.get("location") as string;
  const isFeatured = formData.get("isFeatured") === "true";

  if (!title || !dateStr) {
    return NextResponse.redirect(new URL(`/admin/events/${id}/edit?error=1`, request.url), 303);
  }

  try {
    await prisma.event.update({
      where: { id },
      data: {
        title,
        description: description || null,
        date: new Date(dateStr),
        location: location || null,
        isFeatured,
      },
    });
  } catch (error) {
    console.error("Error updating event:", error);
    return NextResponse.redirect(new URL(`/admin/events/${id}/edit?error=1`, request.url), 303);
  }

  // Successfully updated event! Redirect back to events page
  return NextResponse.redirect(new URL("/events", request.url), 303);
}
