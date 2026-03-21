"use client";

import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        
        {/* Contact Info Sidebar */}
        <div className="md:w-5/12 bg-black text-white p-12 lg:p-16 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-light mb-8 pt-4">Get in Touch</h2>
            <p className="text-white/80 font-light text-lg mb-12">
              Have questions or want to learn more about AGC Keringet? We'd love to hear from you. Reach out using the contact information below or fill out the form.
            </p>
            
            <div className="space-y-8 font-light text-white/90">
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 mt-1 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <div>
                  <h4 className="font-semibold text-white">Address</h4>
                  <p>Keringet Area<br/>Nakuru, Kenya</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 mt-1 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <p>info@agckeringet.org</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 mt-1 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <div>
                  <h4 className="font-semibold text-white">Phone</h4>
                  <p>+254 700 000 000</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-7/12 p-12 lg:p-16">
          <h3 className="text-3xl font-light text-black mb-8">Send a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors resize-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            {status === "success" && (
              <div className="p-4 bg-green-50 text-green-700 rounded-lg text-sm border border-green-100">
                Thank you! Your message has been sent successfully. We will get back to you soon.
              </div>
            )}
            
            {status === "error" && (
              <div className="p-4 bg-red-50 text-red-700 rounded-lg text-sm border border-red-100">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full bg-black text-white font-bold py-4 rounded-full hover:bg-zinc-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed mt-4"
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
        
      </div>
    </main>
  );
}
