import React, { useState, useMemo } from 'react';
import { MenuItem, Size } from '../types';
import { ChevronDownIcon } from './icons';

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  const [selectedSize, setSelectedSize] = useState<Size>(item.prices[0]);

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSize = item.prices.find(p => p.name === e.target.value);
    if (newSize) {
      setSelectedSize(newSize);
    }
  };
  
  const displayPrice = useMemo(() => {
    return selectedSize.price.toFixed(2).replace('.', ',');
  }, [selectedSize]);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transform hover:scale-105 transition-transform duration-200">
      <img src={item.imageUrl} alt={item.name} className="w-full h-24 sm:h-32 object-cover" />
      
      <div className="p-3 flex flex-col flex-grow">
        <h3 className="font-bold text-sm sm:text-lg text-gray-800 capitalize">{item.name.toLowerCase()}</h3>
        {item.description && <p className="text-gray-500 text-xs sm:text-sm mt-1 flex-grow">{item.description}</p>}

        <div className="mt-4 space-y-3">
          {item.prices.length > 1 && (
            <div>
              <label htmlFor={`size-select-${item.id}`} className="sr-only">Sélectionnez la taille</label>
              <div className="relative">
                <select
                  id={`size-select-${item.id}`}
                  value={selectedSize.name}
                  onChange={handleSizeChange}
                  className="w-full appearance-none bg-gray-100 border border-gray-300 rounded-md py-2 px-3 text-sm sm:text-base text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  {item.prices.map(price => (
                    <option key={price.name} value={price.name}>
                      {price.name}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDownIcon className="w-4 h-4" />
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between items-center">
            <span className="font-bold text-base sm:text-xl text-black">{displayPrice} dh</span>
            <button className="bg-yellow-400 text-black font-bold py-2 px-3 sm:px-5 rounded-md text-xs sm:text-base hover:bg-yellow-500 transition-colors">
              Ajouter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
