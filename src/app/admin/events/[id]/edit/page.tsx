import { currentUser } from "@clerk/nextjs/server";
import { redirect, notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function EditEventPage({ params }: { params: Promise<{ id: string }> }) {
  const user = await currentUser();
  if (!user) redirect("/sign-in");

  const dbUser = await prisma.user.findUnique({
    where: { clerkId: user.id },
    include: { role: true },
  });

  if (!dbUser || (dbUser.role.name !== "admin" && dbUser.role.name !== "secretary")) {
    redirect("/");
  }

  const { id } = await params;
  const event = await prisma.event.findUnique({
    where: { id },
  });

  if (!event) {
    notFound();
  }

  // Format date for datetime-local input
  const formatDateForInput = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  return (
    <div className="min-h-screen bg-zinc-50 pt-32 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-gray-100">
        {/* Header */}
        <div className="mb-8 border-b border-gray-100 pb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-extrabold text-black tracking-tight">Edit Event</h1>
              <p className="mt-2 text-gray-500 text-sm">Update the event details below</p>
            </div>
            <Link 
              href="/events"
              className="text-gray-500 hover:text-black text-sm font-medium"
            >
              ← Back to Events
            </Link>
          </div>
        </div>

        <form action={`/api/events/${event.id}/edit`} method="POST" className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-semibold text-black mb-2">Event Title</label>
            <input 
              type="text" 
              name="title" 
              id="title" 
              required 
              defaultValue={event.title}
              className="block w-full rounded-xl border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm px-4 py-3 border bg-zinc-50" 
              placeholder="e.g. Youth Kesha" 
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-semibold text-black mb-2">Description</label>
            <textarea 
              name="description" 
              id="description" 
              rows={4} 
              defaultValue={event.description || ''}
              className="block w-full rounded-xl border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm px-4 py-3 border bg-zinc-50" 
              placeholder="Details about the event..." 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="date" className="block text-sm font-semibold text-black mb-2">Date & Time</label>
              <input 
                type="datetime-local" 
                name="date" 
                id="date" 
                required 
                defaultValue={formatDateForInput(event.date)}
                className="block w-full rounded-xl border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm px-4 py-3 border bg-zinc-50" 
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-semibold text-black mb-2">Location</label>
              <input 
                type="text" 
                name="location" 
                id="location" 
                defaultValue={event.location || ''}
                className="block w-full rounded-xl border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm px-4 py-3 border bg-zinc-50" 
                placeholder="e.g. Main Sanctuary" 
              />
            </div>
          </div>

          <div className="flex items-center pt-2">
            <input 
              id="isFeatured" 
              name="isFeatured" 
              type="checkbox" 
              value="true" 
              defaultChecked={event.isFeatured}
              className="h-5 w-5 rounded border-gray-300 text-black focus:ring-black" 
            />
            <label htmlFor="isFeatured" className="ml-3 block text-sm font-medium text-black cursor-pointer">
              Feature this event on the homepage
            </label>
          </div>

          <div className="flex gap-4 pt-6 border-t border-gray-100 mt-8">
            <button 
              type="submit" 
              className="flex-1 flex justify-center py-4 px-4 border border-transparent rounded-full shadow-sm text-sm font-bold text-white bg-black hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors"
            >
              Update Event
            </button>
            <Link 
              href="/events"
              className="flex-1 flex justify-center py-4 px-4 border border-gray-300 rounded-full shadow-sm text-sm font-bold text-black bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors text-center"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
