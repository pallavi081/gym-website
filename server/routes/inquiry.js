import express from 'express';
import Inquiry from '../models/Inquiry.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, message, plan } = req.body;
    const inquiry = new Inquiry({ name, email, message, plan });
    await inquiry.save();
    res.status(201).json({ message: 'Inquiry sent successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
