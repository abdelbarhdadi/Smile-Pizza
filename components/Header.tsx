import React from 'react';
import { LocationMarkerIcon, PhoneIcon } from './icons';

const Header: React.FC = () => {
  return (
    <header className="bg-yellow-400 text-black shadow-lg">
      <div className="container mx-auto px-4 py-3 flex flex-col items-center">
        <img 
          src="https://i.postimg.cc/qR88dCbs/Nouveau-1.png" 
          alt="Smile Pizza Logo" 
          className="w-40 h-auto mb-4"
        />
        <div className="w-full text-center space-y-2">
            <div className="flex items-center justify-center text-sm sm:text-base">
                <LocationMarkerIcon className="w-5 h-5 mr-2" />
                <span>Immeuble Tazerzit, tranche 2, hay mohamadi, Agadir</span>
            </div>
            <div className="flex items-center justify-center text-sm sm:text-base">
                <PhoneIcon className="w-5 h-5 mr-2" />
                <span>05 25 15 50 35</span>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
