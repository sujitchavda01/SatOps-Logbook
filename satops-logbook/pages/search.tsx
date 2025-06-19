import { useState } from 'react';

export default function Search() {
  const [query, setQuery] = useState({ category: '', date: '', user: '' });
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(`/api/logs?category=${query.category}&date=${query.date}&user=${query.user}`);
    const data = await res.json();
    setResults(data);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Search Logs</h1>
      <form onSubmit={handleSearch} className="mb-4">
        <select
          value={query.category}
          onChange={(e) => setQuery({ ...query, category: e.target.value })}
          className="p-2 border mr-2"
        >
          <option value="">All Categories</option>
          <option value="Shift Notes">Shift Notes</option>
          <option value="Anomaly">Anomaly</option>
          <option value="Status">Status</option>
        </select>
        <input
          type="date"
          value={query.date}
          onChange={(e) => setQuery({ ...query, date: e.target.value })}
          className="p-2 border mr-2"
        />
        <input
          type="text"
          placeholder="User Email"
          value={query.user}
          onChange={(e) => setQuery({ ...query, user: e.target.value })}
          className="p-2 border mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Search</button>
      </form>
      <ul>
        {results.map(log => (
          <li key={log._id} className="p-2 border-b">
            <p><strong>{log.category}</strong> by {log.user.email} at {new Date(log.timestamp).toLocaleString()}</p>
            <p>{log.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}