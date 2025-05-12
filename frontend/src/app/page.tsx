import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-4xl font-bold mb-6">Vero</h1>
      <p className="mb-8">Track your mood, see trends, get AI-driven recommendations.</p>
      <Link href="/dashboard" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">Go to Dashboard</Link>
    </main>
  );
}