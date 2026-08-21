import { Schema, models, model } from 'mongoose';

const SettingsSchema = new Schema(
  {
    key: { type: String, default: 'site', unique: true },
    phone: String,
    email: String,
    hours: String,
    instagram: String,
    tiktok: String,
    whatsapp: String,
  },
  { timestamps: true }
);

export default models.Settings || model('Settings', SettingsSchema);
