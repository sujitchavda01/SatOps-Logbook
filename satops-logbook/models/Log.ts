import mongoose, { Schema, Document } from 'mongoose';

export interface ILog extends Document {
  category: 'Shift Notes' | 'Anomaly' | 'Status';
  description: string;
  user: mongoose.Types.ObjectId;
  timestamp: Date;
}

const LogSchema: Schema = new Schema({
  category: { type: String, enum: ['Shift Notes', 'Anomaly', 'Status'], required: true },
  description: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.models.Log || mongoose.model<ILog>('Log', LogSchema);