export enum Category {
  PIZZAS = 'NOS PIZZAS',
  CALZONES = 'NOS CALZONES',
  SALADES = 'NOS SALADES',
  PATES = 'NOS PATES',
  HUMMERS = 'NOS HUMMERS',
}

export interface Size {
  name: string;
  price: number;
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  category: Category;
  prices: Size[];
}
