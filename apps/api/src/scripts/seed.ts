import { connectDatabase } from '../config/db.js';
import { User } from '../models/User.js';
import { Category } from '../models/Category.js';
import { Vendor } from '../models/Vendor.js';
import { Product } from '../models/Product.js';
await connectDatabase();
await Promise.all([User.deleteMany({}), Category.deleteMany({}), Vendor.deleteMany({}), Product.deleteMany({})]);
const admin = await User.create({ name:'Admin User', email:'admin@example.com', password:'Password123!', role:'admin', isEmailVerified:true });
const buyer = await User.create({ name:'Demo Buyer', email:'buyer@example.com', password:'Password123!', role:'buyer', isEmailVerified:true });
const vendorUser = await User.create({ name:'Demo Vendor', email:'vendor@example.com', password:'Password123!', role:'vendor', isEmailVerified:true });
const category = await Category.create({ name:'Electronics', slug:'electronics' });
const vendor = await Vendor.create({ owner:vendorUser._id, storeName:'Verified Gadget Store', slug:'verified-gadget-store', status:'approved', verificationBadge:true });
await Product.create([
 { vendor:vendor._id, name:'Smart Wireless Headphones', slug:'smart-wireless-headphones', description:'Noise cancelling headphones with long battery life.', category:category._id, price:45000, stock:35, images:['/placeholder-product.png'], status:'active', tags:['audio','headphones'] },
 { vendor:vendor._id, name:'4K Android Smart TV', slug:'4k-android-smart-tv', description:'Crisp 4K display with streaming apps.', category:category._id, price:350000, stock:10, images:['/placeholder-product.png'], status:'active', tags:['tv','electronics'] }
]);
console.log('Seed complete:', { admin:admin.email, buyer:buyer.email, vendor:vendorUser.email, password:'Password123!' });
process.exit(0);
