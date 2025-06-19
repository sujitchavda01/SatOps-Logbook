import { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import Comment from '../../../models/Comment';
import { getSession } from 'next-auth/react';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });
  if (!session) return res.status(401).json({ error: 'Unauthorized' });

  await mongoose.connect(process.env.MONGODB_URI as string);

  if (req.method === 'POST') {
    const { logId, text } = req.body;
    const comment = new Comment({ log: logId, user: session.user.id, text });
    await comment.save();
    return res.status(201).json(comment);
  }
}