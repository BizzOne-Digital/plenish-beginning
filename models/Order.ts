import { Schema, models, model } from 'mongoose';

const OrderItemSchema = new Schema(
  {
    productId: String,
    name: String,
    price: Number,
    quantity: Number,
    image: String,
  },
  { _id: false }
);

const OrderSchema = new Schema(
  {
    checkoutSessionId: { type: String, index: true },
    items: { type: [OrderItemSchema], default: [] },
    subtotal: Number,
    discount: Number,
    total: Number,
    status: { type: String, enum: ['pending', 'paid', 'cancelled'], default: 'pending' },
    customerEmail: String,
    customerName: String,
    shippingAddress: Schema.Types.Mixed,
  },
  { timestamps: true }
);

export default models.Order || model('Order', OrderSchema);
