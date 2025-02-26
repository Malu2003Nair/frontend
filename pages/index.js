import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-100 p-4">
        <nav className="container mx-auto">
          <Link href="/" className="font-bold text-xl">Student App</Link>
          <div className="flex space-x-4 mt-2">
            <Link href="/register" className="text-blue-500 hover:underline">Register</Link>
            <Link href="/login" className="text-blue-500 hover:underline">Login</Link>
          </div>
        </nav>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Student Connect</h1>
          <p className="text-lg mb-8">Connect with students and explore opportunities.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-64">
              <Image src="/images/student1.jpg" alt="Student 1" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <div className="relative h-64">
              <Image src="/images/student2.jpg" alt="Student 2" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
          </div>
          <div className="mt-8">
            <Link href="/register" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get Started
            </Link>
          </div>
        </div>
      </main>
      <footer className="bg-gray-200 p-4 text-center">
        <p>&copy; {new Date().getFullYear()} Student App</p>
      </footer>
    </div>
  );
}
