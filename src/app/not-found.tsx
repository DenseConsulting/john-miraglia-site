import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy-900 flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-8xl md:text-9xl font-heading font-bold text-gold-500 mb-4">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-heading text-white mb-4">
        Page Not Found
      </h2>
      <p className="text-navy-100 max-w-md mb-8 text-lg">
        The page you are looking for does not exist or has been moved. Let us help you find what you need.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-3 bg-gold-500 text-navy-900 font-semibold rounded hover:bg-gold-400 transition-colors"
        >
          Return Home
        </Link>
        <Link
          href="/#contact"
          className="inline-flex items-center justify-center px-8 py-3 border-2 border-gold-500 text-gold-500 font-semibold rounded hover:bg-gold-500 hover:text-navy-900 transition-colors"
        >
          Contact Us
        </Link>
      </div>
      <p className="text-navy-100 mt-12 text-sm">
        John M. Miraglia, Ltd. &mdash; (312) 829-2308
      </p>
    </div>
  );
}
