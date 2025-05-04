const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-lg sm:text-xl font-bold mb-4">LadyWithLens</h3>
              <p className="text-sm sm:text-base text-gray-400">
                Creative studio for modern design and visual storytelling
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/portfolio" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-right">
              <h3 className="text-lg sm:text-xl font-bold mb-4">Connect</h3>
              <div className="flex justify-center md:justify-end gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  📸
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  🐦
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  💼
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-sm sm:text-base text-gray-400">
              © {new Date().getFullYear()} LadyWithLens. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
