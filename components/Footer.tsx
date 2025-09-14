export function Footer() {
  return (
    <footer className="bg-brand-900 text-neutral-100 py-12 mt-12 border-t border-brand-700">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-mint-500 font-bold text-lg mb-2">Keystone Group</h3>
          <p>Driving Ethiopia’s Future</p>
          <p className="mt-2 text-sm">© {new Date().getFullYear()} Keystone Group Investment</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-mint-500 font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            {["Home", "About", "Subsidiaries", "Strategy", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href={`/${link.toLowerCase()}`}
                  className="hover:text-mint-500 transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-mint-500 font-semibold mb-2">Contact Us</h4>
          <p>Address: AddisAbeba, kirkos, Woreda 01</p>
          <p>Phone: Insert Phone Number</p>
          <p>Email: info@keytsonegroupinvestment.com</p>
          <div className="mt-4 flex space-x-4">
            {/* Social SVGs */}
            <a href="#" className="hover:text-mint-500 transition">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.34-1.6.57-2.46.67a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04 4.28 4.28 0 00-7.3 3.9A12.15 12.15 0 013 4.79a4.28 4.28 0 001.32 5.7 4.27 4.27 0 01-1.94-.54v.05a4.28 4.28 0 003.43 4.19 4.3 4.3 0 01-1.93.07 4.28 4.28 0 003.99 2.97A8.58 8.58 0 012 19.54a12.09 12.09 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19-.01-.38-.02-.57A8.7 8.7 0 0024 5.54a8.54 8.54 0 01-2.54.7z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-mint-500 transition">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.99 3.66 9.12 8.44 9.88v-6.99h-2.54v-2.89h2.54v-2.2c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.55v1.89h2.74l-.44 2.89h-2.3v6.99c4.78-.76 8.44-4.89 8.44-9.88 0-5.52-4.48-10-10-10z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
