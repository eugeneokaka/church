import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 lg:gap-24">
        <div className="md:col-span-2">
          <div className="text-3xl font-extrabold tracking-tighter mb-4 uppercase">AGC Keringet</div>
          <p className="text-white leading-relaxed text-lg max-w-sm">
            African Gospel Church Keringet, Nakuru. <br />
            Helping people find their way back to God and walking with them on their spiritual journey.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-8 uppercase tracking-widest text-sm text-white">Navigation</h4>
          <ul className="space-y-4 text-white font-light">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/ministries" className="hover:text-white transition-colors">Ministries</Link></li>
            <li><Link href="/#gallery" className="hover:text-white transition-colors">Gallery</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-8 uppercase tracking-widest text-sm text-white">Connect</h4>
          <ul className="space-y-4 text-white font-light">
            <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
            <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Podcast</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-zinc-800 text-sm text-white flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} African Gospel Church Keringet. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
