import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import MenuGrid from './components/MenuGrid';
import Footer from './components/Footer';
import { CATEGORIES, MENU_DATA } from './constants';
import { Category } from './types';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>(Category.PIZZAS);

  const filteredMenu = useMemo(() => {
    return MENU_DATA.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <CategoryNav 
        categories={CATEGORIES} 
        activeCategory={activeCategory} 
        onSelectCategory={setActiveCategory} 
      />
      <main className="p-2 sm:p-4 flex-grow">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 px-2 sm:px-0">{activeCategory}</h2>
        <MenuGrid items={filteredMenu} />
      </main>
      <Footer />
    </div>
  );
};

export default App;