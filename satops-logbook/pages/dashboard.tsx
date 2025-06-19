import { useSession, signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import LogCard from '../components/LogCard';

export default function Dashboard() {
  const { data: session } = useSession();
  const [logs, setLogs] = useState<any[]>([]);

  useEffect(() => {
    if (session) {
      fetch('/api/logs')
        .then(res => res.json())
        .then(data => setLogs(data));
    }
  }, [session]);

  if (!session) return <p>Please log in</p>;
  return (
    <div>
      <h1 className="text-3xl p-4">SatOps Logbook</h1>
      <p>Welcome, {session.user.email} ({session.user.role})</p>
      <button onClick={() => signOut()} className="bg-red-500 text-white p-2 rounded">Logout</button>
      {session.user.role !== 'Viewer' && (
        <Link href="/logs/new" className="bg-green-500 text-white p-2 rounded inline-block mt-4">New Log</Link>
      )}
      <div className="mt-4">
        <h2 className="text-xl">Recent Logs</h2>
        <ul>
          {logs.map(log => <LogCard key={log._id} log={log} />)}
        </ul>
      </div>
    </div>
  );
}