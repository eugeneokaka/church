import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET endpoint to fetch events
export async function GET() {
  try {
    const events = await prisma.event.findMany({
      where: {
        date: {
          gte: new Date(), // Only show upcoming events
        },
      },
      orderBy: {
        date: "asc",
      },
      select: {
        id: true,
        title: true,
        description: true,
        date: true,
        location: true,
        isFeatured: true,
      },
    });
    console.log(events);

    return NextResponse.json(events);
  } catch (error) {
    console.error("Error fetching events:", error);
    return NextResponse.json(
      { error: "Failed to fetch events" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const user = await currentUser();

  if (!user) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  // Verify Admin Role
  const dbUser = await prisma.user.findUnique({
    where: { clerkId: user.id },
    include: { role: true },
  });

  if (!dbUser || dbUser.role.name !== "admin") {
    // Return unauthorized redirect
    return NextResponse.redirect(new URL("/", request.url), 303);
  }

  const formData = await request.formData();
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const dateStr = formData.get("date") as string;
  const location = formData.get("location") as string;
  const isFeatured = formData.get("isFeatured") === "true";

  if (!title || !dateStr) {
    return NextResponse.redirect(new URL("/admin/events/new", request.url), 303);
  }

  try {
    await prisma.event.create({
      data: {
        title,
        description: description || null,
        date: new Date(dateStr),
        location: location || null,
        isFeatured,
      },
    });
  } catch (error) {
    console.error("Error creating event:", error);
    return NextResponse.redirect(new URL("/admin/events/new?error=1", request.url), 303);
  }

  // Successfully created event! Redirect back to homepage (or dashboard)
  return NextResponse.redirect(new URL("/", request.url), 303);
}
