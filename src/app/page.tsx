import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image src="/three.jpeg" alt="Church Interior" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 text-center text-white p-6 max-w-5xl mx-auto flex flex-col items-center mt-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-4 drop-shadow-lg">
            Helping You Grow Your Faith
          </h1>
          <p className="text-sm md:text-lg font-light mb-10 text-gray-200 tracking-wide">
            AGC Keringet | Sundays @ 8:30am & 10:30am
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#services" className="bg-white/20 border-2 border-white px-8 py-3 font-semibold text-sm tracking-wide uppercase text-white hover:bg-white hover:text-black transition-all">
              NEW HERE?
            </a>
          </div>
        </div>
      </section>

      {/* Two Column Info Section */}
      <section className="flex flex-col md:flex-row w-full">
        {/* Sunday Services */}
        <div className="md:w-1/2 bg-white flex justify-center py-20 px-8 md:px-16 text-center">
          <div className="max-w-md">
            <h2 className="text-3xl font-light text-gray-800 mb-6">Sunday Services</h2>
            <p className="text-gray-500 font-light leading-relaxed">
              Join us every Sunday for a time of uplifting worship, grounded biblical teaching, and genuine community. We offer an English service at 8:30 AM and a Swahili service at 10:30 AM. Come just as you are and grow with us.
            </p>
          </div>
        </div>
        {/* About Us */}
        <div className="md:w-1/2 bg-[#89adc0] flex justify-center py-20 px-8 md:px-16 text-center text-white">
          <div className="max-w-md">
            <h2 className="text-3xl font-light mb-6">About Us</h2>
            <p className="text-white/90 font-light leading-relaxed">
              We are African Gospel Church Keringet, a family of believers located in Nakuru, Kenya. Our mission is to spread the love of Christ and serve our community. We are passionate about growing deeper in faith and walking together through all seasons of life.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Grid */}
      <section className="py-24 px-6 bg-zinc-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 text-center md:text-left">
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-zinc-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mb-6 shadow-md md:mx-0 mx-auto">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-black leading-relaxed font-light">
                To preach the gospel of Jesus Christ, make disciples of all nations, and cultivate a community that lives out biblical principles in Keringet and beyond.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-zinc-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mb-6 shadow-md md:mx-0 mx-auto">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-black leading-relaxed font-light">
                To be a vibrant, Christ-centered church that transforms families, empowers leaders, and positively impacts society for the glory of God.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-zinc-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mb-6 shadow-md md:mx-0 mx-auto">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Core Values</h3>
              <ul className="text-black space-y-2 font-light text-left pl-4 list-disc marker:text-black">
                <li>Biblical Integrity</li>
                <li>Fervent Prayer</li>
                <li>Authentic Worship</li>
                <li>Compassionate Love</li>
                <li>Excellence in Ministry</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pastor's Welcome */}
      <section className="py-24 px-6 md:px-12 bg-white text-black border-b border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-5/12 relative h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl">
            <Image src="/two.jpeg" alt="Pastor of AGC Keringet" fill className="object-cover" />
          </div>
          <div className="md:w-7/12">
            <span className="uppercase tracking-widest text-sm text-black font-bold mb-4 block">A Word From Leadership</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight text-black">Welcome to Our Family</h2>
            <div className="space-y-6 text-lg text-black leading-relaxed font-light">
              <p>
                "It is a joy to welcome you to African Gospel Church Keringet. Whether you are just seeking answers about God, or you are a committed Christian looking to sink deep roots into a local church, there is a place for you here."
              </p>
              <p>
                "Our desire is that from the moment you walk through our doors or interact with us online, you would experience the grace, love, and truth of Jesus Christ. We are a family of flawed individuals discovering the profound joy of being saved by a perfect Savior. We invite you to join us on this journey."
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="font-bold text-xl text-black">Rev. [Pastor's Name]</p>
              <p className="text-black text-sm tracking-wide uppercase mt-1">Senior Pastor, AGC Keringet</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Times & Location */}
      <section id="services" className="py-24 px-6 bg-zinc-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Join Us This Sunday</h2>
          <p className="text-black text-xl font-light mb-16">Experience worship, community, and the Word in Nakuru.</p>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-12 rounded-3xl border border-zinc-100 shadow-xl">
              <h3 className="text-3xl font-bold mb-8 border-b pb-4">Service Schedule</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-black font-medium">First Service (English)</span>
                  <strong className="text-lg">8:30 AM</strong>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-black font-medium">Second Service (Swahili)</span>
                  <strong className="text-lg">10:30 AM</strong>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-black font-medium">Sunday School</span>
                  <strong className="text-lg">8:30 AM & 10:30 AM</strong>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-black font-medium">Youth Fellowship</span>
                  <strong className="text-lg">2:00 PM</strong>
                </div>
              </div>
            </div>
            <div className="bg-white p-12 rounded-3xl border border-zinc-100 shadow-xl">
               <h3 className="text-3xl font-bold mb-8 border-b pb-4">Our Location</h3>
               <p className="text-black text-lg mb-6 leading-relaxed">
                 <strong>African Gospel Church Keringet</strong><br/>
                 Keringet Area<br/>
                 Nakuru, Kenya
               </p>
               <a href="#" className="inline-block mt-4 bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-zinc-800 transition-colors">
                  Get Directions
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Outline */}
      <section id="gallery" className="py-24 bg-black px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight text-white">Church Life Overview</h2>
          <p className="text-black font-light text-xl">Fellowship in action at AGC Keringet.</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          <div className="relative rounded-2xl overflow-hidden lg:col-span-2 lg:row-span-2 shadow-2xl group">
            <Image src="/three.jpeg" alt="Community 1" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            <Image src="/four.jpeg" alt="Community 2" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            <Image src="/five.jpeg" alt="Community 3" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            <Image src="/six.jpeg" alt="Community 4" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
             <Image src="/seven.jpeg" alt="Community 5" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
             <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
