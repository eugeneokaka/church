"use client";

import { useEffect, useState } from "react";

interface Event {
  id: string;
  title: string;
  description: string | null;
  date: Date;
  location: string | null;
  isFeatured: boolean;
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/events");
        if (response.ok) {
          const data = await response.json();
          setEvents(data.map((event: any) => ({
            ...event,
            date: new Date(event.date)
          })));
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen pt-24 bg-zinc-50">
        <div className="py-24 px-6 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-24 bg-zinc-50">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto mt-12">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-black">
            Upcoming Events
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-light max-w-2xl mx-auto">
            Stay plugged into the life of AGC Keringet. Join us for worship, fellowship, and community impact.
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        {events.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-bold text-black mb-2">No Upcoming Events</h3>
            <p className="text-gray-500">Check back later for new additions to our calendar!</p>
          </div>
        ) : (
          <div className="space-y-8">
            {events.map((event) => (
              <div key={event.id} className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-shadow flex flex-col md:flex-row gap-8 items-start md:items-center">
                
                {/* Date Badge */}
                <div className="flex-shrink-0 bg-black text-white rounded-2xl w-24 h-24 flex flex-col items-center justify-center shadow-md">
                  <span className="text-sm font-semibold uppercase tracking-widest">{event.date.toLocaleDateString('en-US', { month: 'short' })}</span>
                  <span className="text-4xl font-extrabold">{event.date.getDate()}</span>
                </div>
                
                {/* Event Details */}
                <div className="flex-grow">
                  <div className="flex flex-wrap gap-3 items-center mb-3">
                    <h2 className="text-3xl font-bold text-black">{event.title}</h2>
                    {event.isFeatured && (
                      <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  {event.description && (
                    <p className="text-gray-600 font-light leading-relaxed mb-4 text-lg">
                      {event.description}
                    </p>
                  )}
                  
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm font-medium text-gray-500 mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                       <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                       {event.date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
                    </div>
                    {event.location && (
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        {event.location}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
