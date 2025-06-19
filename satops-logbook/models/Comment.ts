import mongoose, { Schema, Document } from 'mongoose';

export interface IComment extends Document {
  log: mongoose.Types.ObjectId;
  user: mongoose.Types.ObjectId;
  text: string;
  timestamp: Date;
}

const CommentSchema: Schema = new Schema({
  log: { type: Schema.Types.ObjectId, ref: 'Log', required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  text: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.models.Comment || mongoose.model<IComment>('Comment', CommentSchema);