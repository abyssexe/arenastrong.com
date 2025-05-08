export default function Footer() {
    return (
      <footer id="contact" className="bg-[var(--dark)] text-white pt-20 pb-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            {/* Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-1 after:bg-[var(--secondary)]">
                Arena Training Center
              </h3>
              <div className="text-sm text-gray-400 space-y-2">
                <p>123 Main Street</p>
                <p>Livermore, CA 94550</p>
                <p>Phone: (925) 555-0123</p>
                <p>Email: info@arenatrainingcenter.com</p>
              </div>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-1 after:bg-[var(--secondary)]">
                Quick Links
              </h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li><a href="#about" className="hover:text-[var(--secondary)] transition">About Us</a></li>
                <li><a href="#services" className="hover:text-[var(--secondary)] transition">Training Programs</a></li>
                <li><a href="#recovery" className="hover:text-[var(--secondary)] transition">Recovery Center</a></li>
                <li><a href="#coaches" className="hover:text-[var(--secondary)] transition">Our Coaches</a></li>
                <li><a href="#partnerships" className="hover:text-[var(--secondary)] transition">Partners</a></li>
              </ul>
            </div>
  
            {/* Training Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-1 after:bg-[var(--secondary)]">
                Training
              </h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li><a href="#" className="hover:text-[var(--secondary)] transition">Olympic Boxing</a></li>
                <li><a href="#" className="hover:text-[var(--secondary)] transition">Performance Bootcamp</a></li>
                <li><a href="#" className="hover:text-[var(--secondary)] transition">Jiu Jitsu</a></li>
                <li><a href="#" className="hover:text-[var(--secondary)] transition">Open Gym & Powerlifting</a></li>
                <li><a href="#" className="hover:text-[var(--secondary)] transition">Class Schedule</a></li>
              </ul>
            </div>
  
            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-1 after:bg-[var(--secondary)]">
                Connect With Us
              </h3>
              <p className="text-sm text-gray-400 mb-4">Follow us on social media for updates, fitness tips, and community events.</p>
              <div className="flex gap-3">
                {['FB', 'IG', 'TW', 'YT'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white text-sm hover:bg-[var(--secondary)] transition"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
  
          <div className="border-t border-white/10 pt-6 text-center text-sm text-gray-500">
            &copy; 2025 Arena Training Center. All Rights Reserved.
          </div>
        </div>
      </footer>
    );
  }
  