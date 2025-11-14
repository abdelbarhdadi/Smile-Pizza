import React from 'react';
import { FacebookIcon, InstagramIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-800 py-6 mt-8 border-t">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4 text-lg font-semibold">Rejoignez nous sur :</p>
        <div className="flex justify-center items-center space-x-6">
          <a 
            href="https://www.facebook.com/share/1BeivhiRTX/?mibextid=wwXIfr" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-600 hover:text-blue-600 transition-colors"
            aria-label="Facebook"
          >
            <FacebookIcon className="w-8 h-8" />
          </a>
          <a 
            href="https://www.instagram.com/smile_pizza_agadir?igsh=MTNzOGV1Nnl5bXE1ZQ%3D%3D&utm_source=qr" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-600 hover:text-pink-600 transition-colors"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-8 h-8" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
