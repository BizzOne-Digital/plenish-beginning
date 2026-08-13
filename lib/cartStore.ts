import { create } from 'zustand';

export interface Product {
  id: string;
  name: string;
  price: number;
  size: string;
  image: string;
  badge?: string;
  description: string;
  benefits: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  total: () => number;
  itemCount: () => number;
  discount: () => number;
  finalTotal: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,
  addItem: (product) => {
    const { items } = get();
    const existing = items.find(i => i.id === product.id);
    if (existing) {
      set({ items: items.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i) });
    } else {
      set({ items: [...items, { ...product, quantity: 1 }] });
    }
  },
  removeItem: (id) => set({ items: get().items.filter(i => i.id !== id) }),
  updateQuantity: (id, quantity) => {
    if (quantity <= 0) { get().removeItem(id); return; }
    set({ items: get().items.map(i => i.id === id ? { ...i, quantity } : i) });
  },
  clearCart: () => set({ items: [] }),
  toggleCart: () => set({ isOpen: !get().isOpen }),
  total: () => get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
  itemCount: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
  discount: () => {
    const total = get().total();
    if (total >= 100) return total * 0.10;
    if (total >= 50) return total * 0.05;
    return 0;
  },
  finalTotal: () => get().total() - get().discount(),
}));

export const PRODUCTS: Product[] = [
  {
    id: 'all-purpose',
    name: 'All Purpose Seasoning',
    price: 7.99,
    size: '80g',
    image: '/newp3.png',
    badge: 'Best Seller',
    description: 'Versatile, flavorful, and wholesome. Works on everything.',
    benefits: ['Salt-Free', 'Non-GMO', 'MSG-Free'],
  },
  {
    id: 'hot-spicy',
    name: 'Hot & Spicy Seasoning',
    price: 7.99,
    size: '80g',
    image: '/newp4.png',
    badge: 'Popular',
    description: 'Bold heat meets balanced flavor for those who love the fire. Ideal for jerk, BBQ, and all meat types.',
    benefits: ['Salt-Free', 'Non-GMO', 'MSG-Free'],
  },
  {
    id: 'chili-cayenne',
    name: 'Chili Powder / Cayenne',
    price: 2.99,
    size: '30g',
    image: '/newp1.png',
    description: 'Warm heat and deep flavor for your boldest dishes.',
    benefits: ['Gut Health', 'Non-GMO', 'MSG-Free'],
  },
  {
    id: 'pimento-powder',
    name: 'Pimento Powder',
    price: 2.99,
    size: '30g',
    image: '/newp2.png',
    badge: 'Caribbean',
    description: 'Rich, earthy, and authentic. The heart of Caribbean cooking.',
    benefits: ['Authentic', 'Non-GMO', 'Gut Health'],
  },
  {
    id: 'master-blend',
    name: 'Master Blend',
    price: 7.99,
    size: '80g',
    image: '/newp5.png',
    badge: 'Premium',
    description: 'Our signature blend — the complete herb experience.',
    benefits: ['Salt-Free', 'Non-GMO', 'MSG-Free'],
  },
  {
    id: 'mikal-jerk',
    name: 'Mikal Jerk Seasoning',
    price: 7.99,
    size: '70g',
    image: '/newp6.png',
    badge: 'Caribbean',
    description: 'Caribbean inspired, bold and savory. Jerk done right.',
    benefits: ['Authentic', 'Salt-Free', 'MSG-Free'],
  },
  {
    id: 'turmeric-cayenne',
    name: 'Turmeric & Cayenne',
    price: 2.99,
    size: '30g',
    image: '/newp1.png',
    description: 'Anti-inflammatory powerhouse with a golden kick.',
    benefits: ['Gut Health', 'Anti-Inflammatory', 'Non-GMO'],
  },
  {
    id: 'red-onion-dried',
    name: 'Red Onion Powder',
    price: 4.98,
    size: '70g',
    image: '/newp7.png',
    description: 'Pure, clean, dried red onion powder with intense flavor.',
    benefits: ['Pure', 'Non-GMO', 'Salt-Free'],
  },
];
