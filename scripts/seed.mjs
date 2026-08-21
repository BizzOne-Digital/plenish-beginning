import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const PRODUCTS = [
  { id: 'all-purpose', name: 'All Purpose Seasoning', price: 7.99, size: '80g', image: '/newp3.png', badge: 'Best Seller', description: 'Versatile, flavorful, and wholesome. Works on everything.', benefits: ['Salt-Free', 'Non-GMO', 'MSG-Free'] },
  { id: 'hot-spicy', name: 'Hot & Spicy Seasoning', price: 7.99, size: '80g', image: '/newp4.png', badge: 'Popular', description: 'Bold heat meets balanced flavor for those who love the fire. Ideal for jerk, BBQ, and all meat types.', benefits: ['Salt-Free', 'Non-GMO', 'MSG-Free'] },
  { id: 'chili-cayenne', name: 'Chili Powder / Cayenne', price: 2.99, size: '30g', image: '/newp1.png', description: 'Warm heat and deep flavor for your boldest dishes.', benefits: ['Gut Health', 'Non-GMO', 'MSG-Free'] },
  { id: 'pimento-powder', name: 'Pimento Powder', price: 2.99, size: '30g', image: '/newp2.png', badge: 'Caribbean', description: 'Rich, earthy, and authentic. The heart of Caribbean cooking.', benefits: ['Authentic', 'Non-GMO', 'Gut Health'] },
  { id: 'master-blend', name: 'Master Blend', price: 7.99, size: '80g', image: '/newp5.png', badge: 'Premium', description: 'Our signature blend — the complete herb experience.', benefits: ['Salt-Free', 'Non-GMO', 'MSG-Free'] },
  { id: 'mikal-jerk', name: 'Mikal Jerk Seasoning', price: 7.99, size: '70g', image: '/newp6.png', badge: 'Caribbean', description: 'Caribbean inspired, bold and savory. Jerk done right.', benefits: ['Authentic', 'Salt-Free', 'MSG-Free'] },
  { id: 'turmeric-cayenne', name: 'Turmeric & Cayenne', price: 2.99, size: '30g', image: '/newp1.png', description: 'Anti-inflammatory powerhouse with a golden kick.', benefits: ['Gut Health', 'Anti-Inflammatory', 'Non-GMO'] },
  { id: 'red-onion-dried', name: 'Red Onion Powder', price: 4.98, size: '70g', image: '/newp7.png', description: 'Pure, clean, dried red onion powder with intense flavor.', benefits: ['Pure', 'Non-GMO', 'Salt-Free'] },
];

const SETTINGS = {
  key: 'site',
  phone: '647-572-8435',
  email: 'plenishb@gmail.com',
  hours: 'Mon–Fri: 8am–8pm\nSat: 9am–5pm\nSun: Closed',
  instagram: '@Plenish_b',
  tiktok: 'plenish.beginning',
  whatsapp: '647-572-8435',
};

async function main() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('MONGODB_URI not set');
  await mongoose.connect(uri);
  console.log('Connected to MongoDB');

  const db = mongoose.connection.db;

  const productsCol = db.collection('products');
  for (const p of PRODUCTS) {
    await productsCol.updateOne({ id: p.id }, { $set: { ...p, active: true, updatedAt: new Date() }, $setOnInsert: { createdAt: new Date() } }, { upsert: true });
  }
  console.log(`Seeded ${PRODUCTS.length} products`);

  const settingsCol = db.collection('settings');
  await settingsCol.updateOne({ key: 'site' }, { $set: { ...SETTINGS, updatedAt: new Date() }, $setOnInsert: { createdAt: new Date() } }, { upsert: true });
  console.log('Seeded settings');

  await mongoose.disconnect();
  console.log('Done');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
