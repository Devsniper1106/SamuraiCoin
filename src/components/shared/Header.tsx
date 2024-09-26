import { Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className=" text-white pt-[63px]">
      <div className="container mx-auto px-2">
        <div className="flex justify-between items-center">
          {/* Use <a> instead of <link> */}
          <a href="/" className="text-[32px] font-bold">
            The Samurai Coin®
          </a>
         
          <a
            href="mailto:Info@thesamuraicoin.com"
            className="flex items-center space-x-2 outline rounded-full px-4 py-2 hover:bg-gray-700 transition-colors"
          >
            <Mail className="text-red-600" size={20} />
            <span className="hidden sm:inline text-[18px]">Info@thesamuraicoin.com</span>
          </a>
        </div>
      </div>
    </header>
  );
}