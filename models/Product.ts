import mongoose, { Schema, models, model } from 'mongoose';

const ProductSchema = new Schema(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    size: { type: String, required: true },
    image: { type: String, required: true },
    badge: { type: String },
    description: { type: String, required: true },
    benefits: { type: [String], default: [] },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default models.Product || model('Product', ProductSchema);
