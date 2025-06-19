import { Log } from '../models/Log';

interface LogCardProps {
  log: Log;
}

export default function LogCard({ log }: LogCardProps) {
  return (
    <div className="p-2 border-b">
      <p><strong>{log.category}</strong> by {log.user.email} at {new Date(log.timestamp).toLocaleString()}</p>
      <p>{log.description}</p>
    </div>
  );
}