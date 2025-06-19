import { useRouter } from 'next/router';

export default function Signup() {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = (e.target as any).email.value;
    const password = (e.target as any).password.value;
    const role = (e.target as any).role.value;
    await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, role }),
    });
    router.push('/login');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl mb-4">Signup</h2>
        <input name="email" type="email" placeholder="Email" className="mb-4 p-2 border w-full" required />
        <input name="password" type="password" placeholder="Password" className="mb-4 p-2 border w-full" required />
        <select name="role" className="mb-4 p-2 border w-full">
          <option value="Admin">Admin</option>
          <option value="Operator">Operator</option>
          <option value="Viewer">Viewer</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Signup</button>
      </form>
    </div>
  );
}