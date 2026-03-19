import Image from "next/image";

export default function MinistriesPage() {
  const ministries = [
    {
      title: "Youth Ministry",
      description: "Empowering the next generation to be bold in their faith. We gather for dynamic worship, genuine community, and practical Biblical teaching targeted at teenagers and young adults navigating modern challenges.",
      schedule: "Fridays at 6:00 PM",
      image: "/five.jpeg"
    },
    {
      title: "Women's Fellowship",
      description: "A sisterhood dedicated to spiritual growth, mentorship, and prayer. Our women's ministry focuses on equipping women of all ages to serve God faithfully in their homes, workplaces, and community.",
      schedule: "Wednesdays at 4:00 PM",
      image: "/four.jpeg"
    },
    {
      title: "Men's Fellowship",
      description: "Building strong men who lead with integrity. We emphasize accountability, Biblical manhood, and stepping up to the responsibilities God has entrusted to us as fathers, husbands, and leaders.",
      schedule: "Saturdays at 7:00 AM",
      image: "/seven.jpeg"
    },
    {
      title: "Children's Ministry",
      description: "A fun and safe environment where kids learn about Jesus on their level. Through engaging stories, songs, and activities, we lay a solid spiritual foundation for the youngest members of our church family.",
      schedule: "Sundays at 8:30 AM & 10:30 AM",
      image: "/six.jpeg"
    },
    {
      title: "Worship Team",
      description: "Leading the congregation into the presence of God through music and the arts. This dedicated team of vocalists, musicians, and audio/visual technicians serves every Sunday to facilitate authentic worship.",
      schedule: "Rehearsals on Thursdays at 5:00 PM",
      image: "/one.jpeg"
    },
    {
      title: "Community Outreach",
      description: "Taking the love of Jesus beyond the four walls of the church. We engage in local service projects, hospital visitations, and evangelistic missions to practically demonstrate God's grace to Nakuru.",
      schedule: "Monthly (See Calendar)",
      image: "/two.jpeg"
    }
  ];

  return (
    <main className="min-h-screen pt-24 bg-zinc-50">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto mt-12">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-black">
            Our Ministries
          </h1>
          <p className="text-xl md:text-2xl text-black font-light max-w-2xl mx-auto">
            Find your place to serve, grow, and connect within the AGC Keringet community.
          </p>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ministries.map((ministry, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col">
              <div className="h-64 relative w-full group">
                <Image 
                  src={ministry.image} 
                  alt={ministry.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-4">{ministry.title}</h3>
                <p className="text-black font-light leading-relaxed mb-6 flex-grow">
                  {ministry.description}
                </p>
                <div className="mt-auto pt-6 border-t border-gray-100">
                  <span className="text-sm font-semibold text-black uppercase tracking-widest block mb-1">Schedule</span>
                  <span className="text-black font-medium">{ministry.schedule}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
