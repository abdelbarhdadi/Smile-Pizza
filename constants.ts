import { Category, MenuItem } from './types';

export const CATEGORIES: Category[] = [
  Category.PIZZAS,
  Category.CALZONES,
  Category.SALADES,
  Category.PATES,
  Category.HUMMERS,
];

export const MENU_DATA: MenuItem[] = [
  // Pizzas
  { id: 1, name: 'MARGHERITA', description: 'Sauce tomate, mozzarella, olives, origan', imageUrl: 'https://i.postimg.cc/8CjkLBdK/MARGARITA.png', category: Category.PIZZAS, prices: [{ name: 'Normale', price: 25 }, { name: 'Grande', price: 45 }] },
  { id: 2, name: 'CHICAGO', description: 'Sauce tomate, mozzarella, viande hachée, poivrons, champignons, olives, origan', imageUrl: 'https://i.postimg.cc/763FzfRz/CHICAGO.png', category: Category.PIZZAS, prices: [{ name: 'Normale', price: 40 }, { name: 'Grande', price: 70 }] },
  { id: 3, name: 'DINDINO', description: 'Sauce tomate, mozzarella,dinde, champignons, olives, origan', imageUrl: 'https://i.postimg.cc/GpcGRNCd/DINDINO.png', category: Category.PIZZAS, prices: [{ name: 'Normale', price: 40 }, { name: 'Grande', price: 70 }] },
  { id: 4, name: 'FRUITS DE MER', description: 'Sauce tomate, mozzarella, crevettes, calamars, origan, olives', imageUrl: 'https://i.postimg.cc/tgCkk77n/FRUITS-DE-MER.png', category: Category.PIZZAS, prices: [{ name: 'Normale', price: 45 }, { name: 'Grande', price: 75 }] },
  { id: 5, name: '4 FROMAGES', description: 'Crème fraîche, mozzarella, gouda, fromage bleu, fromage rouge, olives, origan', imageUrl: 'https://i.postimg.cc/RhfLhHbJ/4-FROMAGES.png', category: Category.PIZZAS, prices: [{ name: 'Normale', price: 40 }, { name: 'Grande', price: 70 }] },
  { id: 6, name: '4 SAISONS', description: 'Crème fraîche, mozzarella, 1/3 thon, 1/3 4fromages, 1/3 pepperoni, origan', imageUrl: 'https://i.postimg.cc/YC2QKZkC/4-SAISONS.png', category: Category.PIZZAS, prices: [{ name: 'Normale', price: 50 }, { name: 'Grande', price: 80 }] },
  { id: 7, name: 'GOURMANDE', description: 'Crème fraîche, mozzarella, dinde fumée, oignons, fromage rouge, origan', imageUrl: 'https://i.postimg.cc/y6FRJs8S/GOURMANDE.png', category: Category.PIZZAS, prices: [{ name: 'Normale', price: 45 }, { name: 'Grande', price: 75 }] },
  { id: 8, name: 'MERCEDES', description: 'Crème fraîche, mozzarella, 1/3 thon, 1/3 4fromages, 1/3 pepperoni, origan', imageUrl: 'https://i.postimg.cc/QCsHgKdN/LA-MERCEDES.png', category: Category.PIZZAS, prices: [{ name: 'Normale', price: 40 }, { name: 'Grande', price: 70 }] },
  { id: 9, name: 'MIXTE', description: 'Crème fraîche, mozzarella, fruits de mer, Kefta, légumes, fromage rouge, olives noires, origan', imageUrl: 'https://i.postimg.cc/hjRjgQxv/MIXTE.png', category: Category.PIZZAS, prices: [{ name: 'Normale', price: 55 }, { name: 'Grande', price: 90 }] },
  { id: 10, name: 'PADOVA', description: 'Sauce tomate, mozzarella, thon, aubergine, poivrons, courgette, oignons, olives, origan', imageUrl: 'https://i.postimg.cc/9FgQ0nZy/PADOVA.png', category: Category.PIZZAS, prices: [{ name: 'Normale', price: 45 }, { name: 'Grande', price: 75 }] },
  { id: 11, name: 'PEPPERONI', description: 'Sauce tomate, mozzarella,pepperoni, olives, origan', imageUrl: 'https://i.postimg.cc/sDx3k4q3/PEPPERONI.png', category: Category.PIZZAS, prices: [{ name: 'Normale', price: 40 }, { name: 'Grande', price: 70 }] },
  { id: 12, name: 'ROMA', description: 'Sauce tomate, mozzarella, dinde fumée, olives, origan', imageUrl: 'https://i.postimg.cc/BQjGYQLw/ROMA.png', category: Category.PIZZAS, prices: [{ name: 'Normale', price: 40 }, { name: 'Grande', price: 70 }] },
  { id: 13, name: 'SMILE', description: 'Sauce tomate, mozzarella, viande hachée, dinde fumée, pepperoni, poivrons, champignons, olives, origan', imageUrl: 'https://i.postimg.cc/Rhq2DXFL/SMILE.png', category: Category.PIZZAS, prices: [{ name: 'Normale', price: 55 }, { name: 'Grande', price: 90 }] },
  { id: 14, name: 'THONINO', description: 'Sauce tomate, mozzarella, thon, poivrons, olives, origan', imageUrl: 'https://i.postimg.cc/76tW00V5/THONINO.png', category: Category.PIZZAS, prices: [{ name: 'Normale', price: 40 }, { name: 'Grande', price: 70 }] },
  { id: 15, name: 'VEGETARIENNE', description: 'Sauce tomate, mozzarella, aubergine, poivrons, courgette, champignons, olives, origan', imageUrl: 'https://i.postimg.cc/0yGXZLnj/VEGETARIENNE.png', category: Category.PIZZAS, prices: [{ name: 'Normale', price: 30 }, { name: 'Grande', price: 55 }] },
  
  // Calzones
  { id: 16, name: 'KEFTA', description: 'Crème fraîche, mozzarella, kefta, aubergine', imageUrl: 'https://i.postimg.cc/3NHng1G1/CALZONE-KEFTA.png', category: Category.CALZONES, prices: [{ name: 'Unique', price: 35 }] },
  { id: 17, name: 'POULET', description: 'Crème fraîche, mozzarella, poulet', imageUrl: 'https://i.postimg.cc/zfbj66SS/CALZONE-POULET.png', category: Category.CALZONES, prices: [{ name: 'Unique', price: 35 }] },
  { id: 18, name: 'ROMA', description: 'Crème fraîche, mozzarella, dinde fumée', imageUrl: 'https://i.postimg.cc/QdPgQSGH/CALZONE-ROMA.png', category: Category.CALZONES, prices: [{ name: 'Unique', price: 35 }] },
  { id: 19, name: 'MIXTE', description: 'Crème fraîche, mozzarella, dinde fumée, kefta, poulet', imageUrl: 'https://i.postimg.cc/c4kfWTJY/CALZONE-MIXTE.png', category: Category.CALZONES, prices: [{ name: 'Unique', price: 45 }] },
  
  // Salades
  { id: 20, name: 'SMILE', description: 'Salade, tomates cerises, riz, pâte, fromage, dinde fumée, thon, olives noires, sauce pesto', imageUrl: 'https://i.postimg.cc/CMZs7yPM/SMILE.png', category: Category.SALADES, prices: [{ name: 'Unique', price: 30 }] },
  { id: 21, name: 'MEXICAINE', description: 'Salade, tomates cerises, riz, maïs, fromage, thon, olives, sauce pesto', imageUrl: 'https://i.postimg.cc/rm4zd9jV/MEXICAINE.png', category: Category.SALADES, prices: [{ name: 'Unique', price: 20 }] },
  { id: 22, name: 'ITALIENNE', description: 'Salade, tomates cerises, pâte, fromage, thon, maïs, olives noires, sauce pesto', imageUrl: 'https://i.postimg.cc/NFYGKvLN/ITALIENNE.png', category: Category.SALADES, prices: [{ name: 'Unique', price: 20 }] },
  
  // Pates
  { id: 23, name: 'NAPOLITAINE', description: 'Sauce tomate, sauce pesto, fromage', imageUrl: 'https://i.postimg.cc/MpCgqG1x/NAPOLITAINE.png', category: Category.PATES, prices: [{ name: 'Unique', price: 25 }] },
  { id: 24, name: 'BOLOGNAISE', description: 'Sauce tomate, viande hachée, sauce pesto, fromage', imageUrl: 'https://i.postimg.cc/qR0Y6ZbH/BOLOGNAISE.png', category: Category.PATES, prices: [{ name: 'Unique', price: 35 }] },
  { id: 25, name: 'POULET', description: 'Crème fraîche, poulet, sauce pesto, fromage', imageUrl: 'https://i.postimg.cc/PJ5R2vnW/POULET.png', category: Category.PATES, prices: [{ name: 'Unique', price: 35 }] },
  { id: 26, name: 'CARBONARA', description: 'Crème fraîche, dinde fumée, sauce pesto, fromage', imageUrl: 'https://i.postimg.cc/3Nfb6rKR/CARBONARA.png', category: Category.PATES, prices: [{ name: 'Unique', price: 35 }] },
  { id: 27, name: 'FRUITS DE MER', description: 'Crème fraîche, crevettes, calamar, sauce pesto, fromage', imageUrl: 'https://i.postimg.cc/8P30mCKZ/FM.png', category: Category.PATES, prices: [{ name: 'Unique', price: 40 }] },
  { id: 28, name: 'SMILE', description: 'Crème fraîche, sauce tomate, kefta, poulet, dinde fumée, sauce pesto, fromage', imageUrl: 'https://i.postimg.cc/ydVQ83dp/SMILE-1.png', category: Category.PATES, prices: [{ name: 'Unique', price: 45 }] },
  { id: 29, name: '4 FROMAGE', description: 'Crème fraîche, gouda, bleu, fromage rouge, sauce pesto, fromage', imageUrl: 'https://i.postimg.cc/QCz0m6bB/4-FROMAGES.png', category: Category.PATES, prices: [{ name: 'Unique', price: 35 }] },
  
  // Hummers
  { id: 30, name: 'LE HUMMER', description: 'Choix entre les viandes Kefta, Poulet ou Dinde fumée', imageUrl: 'https://i.postimg.cc/zv9Wc4RD/Hummer-1V.png', category: Category.HUMMERS, prices: [{ name: 'Unique', price: 32 }] },
  { id: 31, name: 'LE HUMMER MIXTE', description: '', imageUrl: 'https://i.postimg.cc/vZyX86cY/Hummer-MIXTE.png', category: Category.HUMMERS, prices: [{ name: 'Unique', price: 42 }] },
];
