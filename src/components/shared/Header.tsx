import { Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-black text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Use <a> instead of <link> */}
          <a href="/" className="text-2xl font-bold">
            The Samurai Coin®
          </a>
          <a
            href="mailto:Info@thesamuraicoin.com"
            className="flex items-center space-x-2 bg-gray-800 rounded-full px-4 py-2 hover:bg-gray-700 transition-colors"
          >
            <Mail className="text-red-600" size={20} />
            <span className="hidden sm:inline">Info@thesamuraicoin.com</span>
          </a>
        </div>
      </div>
    </header>
  );
}