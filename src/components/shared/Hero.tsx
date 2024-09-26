import { Image as LucideImage } from "lucide-react"; // Importing the Image icon from lucide-react
import Hero from "../../assets/images/Hero.png"; // Ensure this image is in your public folder

export default function HeroPage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-4">
      <div className=" w-full">
        <h2 className="text-2xl md:text-3xl text-center mb-2">Welcome to</h2>
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">The Samurai Coin®</h1>
        <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
          Step into the world of the Samurai with our exclusive cryptocurrency, The Samurai Coin. Crafted and bred by Japan's legendary warriors, this one-of-a-kind digital asset blends rich cultural heritage with cutting-edge technology backed by real assets.
        </p>
        <div className="relative aspect-[4/3] w-full mx-auto">
          <img
            src={Hero} // Use Hero.src if imported as a module
            alt="Samurai Coin - A stylized image of a samurai warrior in red armor"
            // width={800} // Specify width
            // height={600} // Specify height
            className="rounded-lg object-contain w-full" // Use object-contain for proper scaling
          />
        </div>
        <p className="text-center text-sm mt-4">
          THE SAMURAI COIN®: A UNIQUE DIGITAL TRIBUTE TO JAPAN'S LEGENDARY WARRIORS
        </p>
        <p className="text-center text-sm">
          OWN A PIECE OF HISTORY WITH THE OFFICIAL SAMURAI COIN
        </p>
      </div>
    </div>
  );
}