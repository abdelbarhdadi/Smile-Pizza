import React from 'react';
import { Category } from '../types';

interface CategoryNavProps {
  categories: Category[];
  activeCategory: Category;
  onSelectCategory: (category: Category) => void;
}

const CategoryNav: React.FC<CategoryNavProps> = ({ categories, activeCategory, onSelectCategory }) => {
  return (
    <nav className="sticky top-0 bg-white shadow-md z-10">
      <div className="flex space-x-2 sm:space-x-4 px-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`py-3 px-3 sm:px-5 font-semibold text-sm sm:text-base transition-colors duration-300 border-b-4
              ${activeCategory === category 
                ? 'border-yellow-400 text-black' 
                : 'border-transparent text-gray-500 hover:text-black hover:border-yellow-200'
              }`}
          >
            {category}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default CategoryNav;
