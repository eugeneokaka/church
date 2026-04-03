import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export default async function NewEventPage() {
  const user = await currentUser();
  if (!user) redirect("/sign-in");

  const dbUser = await prisma.user.findUnique({
    where: { clerkId: user.id },
    include: { role: true },
  });

  if (!dbUser || (dbUser.role.name !== "admin" && dbUser.role.name !== "secretary")) {
    // Redirect non-admins and non-secretaries back to the homepage
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-zinc-50 pt-32 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-gray-100">
        <div className="mb-8 border-b border-gray-100 pb-6">
          <h1 className="text-3xl font-extrabold text-black tracking-tight">Create New Event</h1>
          <p className="mt-2 text-gray-500 text-sm">Fill in the details below to add an event to the church schedule.</p>
        </div>

        <form action="/api/events" method="POST" className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-semibold text-black mb-2">Event Title</label>
            <input type="text" name="title" id="title" required className="block w-full rounded-xl border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm px-4 py-3 border bg-zinc-50" placeholder="e.g. Youth Kesha" />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-semibold text-black mb-2">Description</label>
            <textarea name="description" id="description" rows={4} className="block w-full rounded-xl border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm px-4 py-3 border bg-zinc-50" placeholder="Details about the event..." />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="date" className="block text-sm font-semibold text-black mb-2">Date & Time</label>
              <input type="datetime-local" name="date" id="date" required className="block w-full rounded-xl border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm px-4 py-3 border bg-zinc-50" />
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-semibold text-black mb-2">Location</label>
              <input type="text" name="location" id="location" className="block w-full rounded-xl border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm px-4 py-3 border bg-zinc-50" placeholder="e.g. Main Sanctuary" defaultValue="AGC Keringet" />
            </div>
          </div>

          <div className="flex items-center pt-2">
            <input id="isFeatured" name="isFeatured" type="checkbox" value="true" className="h-5 w-5 rounded border-gray-300 text-black focus:ring-black" />
            <label htmlFor="isFeatured" className="ml-3 block text-sm font-medium text-black cursor-pointer">
              Feature this event on the homepage
            </label>
          </div>

          <div className="pt-6 border-t border-gray-100 mt-8">
            <button type="submit" className="w-full flex justify-center py-4 px-4 border border-transparent rounded-full shadow-sm text-sm font-bold text-white bg-black hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors">
              Create Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
