import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 bg-zinc-50">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto mt-12">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-black">
            About AGC Keringet
          </h1>
          <p className="text-xl md:text-2xl text-black font-light max-w-2xl mx-auto">
            Discover our roots, meet our leadership, and learn about the core beliefs that anchor our community.
          </p>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-8">Our History</h2>
            <div className="space-y-6 text-lg text-black font-light leading-relaxed">
              <p>
                African Gospel Church (AGC) Keringet was established with a vision to bring the transformative power of the Gospel to the heart of Nakuru. What started as a small fellowship of dedicated believers has grown into a vibrant, multi-generational congregation.
              </p>
              <p>
                Over the years, we've witnessed countless lives changed, families restored, and our community impacted through the grace of God. Our physical campus has expanded, but our core mission remains exactly the same as day one: to make disciples of Jesus Christ.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image src="/three.jpeg" alt="Church History" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Our Leadership</h2>
          <p className="text-white font-light text-xl mb-16">Dedicated to serving the church and community.</p>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 relative rounded-full overflow-hidden shadow-2xl mb-6 border-4 border-zinc-800">
                 <Image src="/two.jpeg" alt="Lead Pastor" fill className="object-cover" />
              </div>
              <h3 className="text-2xl font-bold">Rev. [Name]</h3>
              <p className="text-white uppercase tracking-widest text-sm mt-2">Senior Pastor</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 relative rounded-full overflow-hidden shadow-2xl mb-6 border-4 border-zinc-800 bg-zinc-900 flex items-center justify-center">
                 {/* Placeholder for Elder image */}
                 <span className="text-black font-bold">Photo</span>
              </div>
              <h3 className="text-2xl font-bold">Elder [Name]</h3>
              <p className="text-white uppercase tracking-widest text-sm mt-2">Associate Pastor</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 relative rounded-full overflow-hidden shadow-2xl mb-6 border-4 border-zinc-800 bg-zinc-900 flex items-center justify-center">
                 {/* Placeholder for Elder image */}
                 <span className="text-black font-bold">Photo</span>
              </div>
              <h3 className="text-2xl font-bold">[Name]</h3>
              <p className="text-white uppercase tracking-widest text-sm mt-2">Head of Ministries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statement of Faith */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Statement of Faith</h2>
          <p className="text-black font-light text-xl">The doctrinal foundation of AGC Keringet.</p>
        </div>
        
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-3">The Bible</h3>
            <p className="text-black font-light">We believe the Bible is the inspired, infallible, and authoritative Word of God, serving as our ultimate guide for faith and practice.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-3">The Trinity</h3>
            <p className="text-black font-light">We believe in one God, eternally existent in three persons: Father, Son, and Holy Spirit.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-3">Salvation</h3>
            <p className="text-black font-light">We believe that salvation is a free gift of God's grace, received through faith in Jesus Christ alone, who died for our sins and rose again.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-3">The Church</h3>
            <p className="text-black font-light">We believe the Church is the body of Christ, composed of all born-again believers, tasked with worshipping God, edifying its members, and evangelizing the world.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
