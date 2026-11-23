import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#111315] text-[#F1F0EC] flex flex-col items-center justify-center p-6 text-center">
      <h1 className="font-serif text-6xl text-[#AFA4FF] mb-4">404</h1>
      <h2 className="text-xl font-medium mb-2">Page Not Found</h2>
      <p className="text-[#929397] text-sm max-w-md mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-2.5 rounded-full text-xs font-medium bg-[#F1F0EC] text-[#111315] hover:bg-white transition-all"
      >
        Return Home
      </Link>
    </div>
  );
}
