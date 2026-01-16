export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-serif mb-4">Stayava</h3>
              <p className="text-gray-400 mb-4 max-w-md">
                Votre destination pour des séjours d'exception dans les plus beaux hôtels du monde.
              </p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-yellow-400 transition">Facebook</a>
                <a href="#" className="hover:text-yellow-400 transition">Instagram</a>
                <a href="#" className="hover:text-yellow-400 transition">Twitter</a>
              </div>
            </div>
  
            {/* Navigation */}
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition">Accueil</a></li>
                <li><a href="#rooms" className="hover:text-white transition">Chambres</a></li>
                <li><a href="#about" className="hover:text-white transition">À propos</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
  
            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+01 782 7886 12</li>
                <li>contact@stayava.com</li>
                <li>123 Luxury Avenue<br/>Paradise City</li>
              </ul>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Stayava. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    )
  }