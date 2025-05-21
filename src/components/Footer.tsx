import React from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin 
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#101010] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Building2 size={28} className="text-[#FF5A00]" />
              <span className="ml-2 text-xl font-bold">SyndicPro</span>
            </div>
            <p className="text-gray-300 mb-6">
              Notre mission est de transformer la gestion immobilière en la rendant 
              plus transparente, efficace et accessible à tous.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#FF5A00] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FF5A00] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FF5A00] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FF5A00] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Nos Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FF5A00] transition-colors">Gestion immobilière</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FF5A00] transition-colors">Comptabilité</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FF5A00] transition-colors">Gestion des assemblées</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FF5A00] transition-colors">Conseils juridiques</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FF5A00] transition-colors">Suivi des travaux</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Informations</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FF5A00] transition-colors">À propos</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FF5A00] transition-colors">Conditions générales</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FF5A00] transition-colors">Politique de confidentialité</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FF5A00] transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FF5A00] transition-colors">Carrières</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-[#FF5A00] mt-1 flex-shrink-0" />
                <span className="ml-3 text-gray-300">Residence Romana, Appt 25 </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-[#FF5A00] flex-shrink-0" />
                <span className="ml-3 text-gray-300">+212 0 663 014 054</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-[#FF5A00] flex-shrink-0" />
                <span className="ml-3 text-gray-300">contact@syndicpro.ma</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} SyndicPro. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;