import { useSession, signIn } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();
  if (session) return <p>Redirecting to dashboard...</p>; // Add redirect logic
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl">SatOps Logbook</h1>
      <button onClick={() => signIn()} className="bg-blue-500 text-white p-2 rounded mt-4">Login</button>
    </div>
  );
}