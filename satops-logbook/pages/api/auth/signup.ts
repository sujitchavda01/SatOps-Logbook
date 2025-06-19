import { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import User from '../../../models/User';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  await mongoose.connect(process.env.MONGODB_URI as string);
  const { email, password, role } = req.body;
  const user = new User({ email, password, role });
  await user.save();
  res.status(201).json({ message: 'User created' });
}