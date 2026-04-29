import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  plan: { type: String, default: 'None' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('User', userSchema);
