import Button from "../ui/button";
import Input from "../ui/input";
import { ReactComponent as Instagram } from '../../assets/images/instagram.svg';
import { ReactComponent as Linkedin } from '../../assets/images/linkedin.svg';
import { ReactComponent as Send } from '../../assets/images/send.svg';
import { ReactComponent as WhatsApp } from '../../assets/images/whatsApp.svg';

export default function Footer() {
  return (
    <footer className=" text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">The Samurai Coin®</h2>
            <div className="flex space-x-4">
              {/* Use SVG components directly instead of <img> */}
              <a href="#" aria-label="Instagram"><Instagram className="w-6 h-6" /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin className="w-6 h-6" /></a>
              <a href="#" aria-label="Send"><Send className="w-6 h-6" /></a>
              <a href="#" aria-label="WhatsApp"><WhatsApp className="w-6 h-6" /></a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">Services</a></li>
              <li><a href="#" className="hover:text-gray-300">About Us</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>310-362-1252</li>
              <li>info@crownarrowcapital.com</li>
              <li>www.crownarrowcapital.com</li>
              <li>2618 San Miguel Drive,<br />Newport Beach, CA 92660</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe to our Newsletter</h3>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button title="SubScribe"/>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}