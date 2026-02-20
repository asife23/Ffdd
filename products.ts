export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Classic Leather Watch',
    price: 1250,
    imageUrl: 'https://picsum.photos/seed/watch/400/400',
    category: 'Accessories',
  },
  {
    id: 2,
    name: 'Modern Bluetooth Speaker',
    price: 2500,
    imageUrl: 'https://picsum.photos/seed/speaker/400/400',
    category: 'Electronics',
  },
  {
    id: 3,
    name: 'Ergonomic Office Chair',
    price: 8500,
    imageUrl: 'https://picsum.photos/seed/chair/400/400',
    category: 'Furniture',
  },
  {
    id: 4,
    name: 'Gourmet Coffee Blend',
    price: 550,
    imageUrl: 'https://picsum.photos/seed/coffee/400/400',
    category: 'Groceries',
  },
  {
    id: 5,
    name: 'Stylish Sunglasses',
    price: 950,
    imageUrl: 'https://picsum.photos/seed/sunglasses/400/400',
    category: 'Accessories',
  },
  {
    id: 6,
    name: 'Compact Travel Backpack',
    price: 3200,
    imageUrl: 'https://picsum.photos/seed/backpack/400/400',
    category: 'Bags',
  },
];
