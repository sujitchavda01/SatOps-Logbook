import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

export default function Navbar() {
  const { data: session } = useSession();
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link href="/dashboard">SatOps Logbook</Link>
        {session && (
          <>
            <div>
              <Link href="/logs/new" className="mr-4">New Log</Link>
              <Link href="/search" className="mr-4">Search</Link>
              <button onClick={() => signOut()} className="bg-red-500 p-2 rounded">Logout</button>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}