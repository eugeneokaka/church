import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const user = await currentUser();

  if (!user) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  const formData = await request.formData();
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = user.emailAddresses[0]?.emailAddress;

  try {
    let memberRole = await prisma.role.findUnique({
      where: { name: "member" },
    });

    if (!memberRole) {
      memberRole = await prisma.role.create({
        data: { name: "member" },
      });
    }

    await prisma.user.create({
      data: {
        clerkId: user.id,
        firstName,
        lastName,
        email,
        roleId: memberRole.id,
      },
    });
  } catch (error) {
    console.error("Error creating user:", error);
  }

  return NextResponse.redirect(new URL("/", request.url), 303);
}
