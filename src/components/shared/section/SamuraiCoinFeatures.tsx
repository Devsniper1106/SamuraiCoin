import { Star, Gift, Coins, Network, Book, Zap, Wallet, Shield } from "lucide-react";

const features = [
  {
    icon: <Star className="w-8 h-8" />,
    title: "Exclusive Samurai Heritage Design",
    subtitle: "Intricate Artwork",
    description: "Each coin features stunning designs inspired by historical Samurai figures and symbols.",
  },
  {
    icon: <Gift className="w-8 h-8" />,
    title: "Limited Edition Release",
    subtitle: "Capped Supply",
    description: "Only a limited number of Samurai Coins will ever be issued, ensuring rarity and exclusivity. Lead by Head Samurai.",
  },
  {
    icon: <Coins className="w-8 h-8" />,
    title: "Backed by Real-Samurai Historical Arts",
    subtitle: "Historical Narrative",
    description: "Each coin is linked to notable Samurai, adding depth and story to your the coin's significance.",
  },
  {
    icon: <Network className="w-8 h-8" />,
    title: "Blockchain Transparency",
    subtitle: "Solana Blockchain",
    description: "Built on the Solana blockchain for secure, transparent, and efficient transactions.",
  },
  {
    icon: <Book className="w-8 h-8" />,
    title: "Cultural Immersion",
    subtitle: "Exclusive Content",
    description: "Gain access to digital content exploring Samurai culture and history.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Enhanced Utility",
    subtitle: "Versatile Use",
    description: "Use the coin for transactions, investments, and access to exclusive products and community perks by THE SAMURAI.",
  },
  {
    icon: <Wallet className="w-8 h-8" />,
    title: "Staking Rewards",
    subtitle: "Earn Rewards",
    description: "Stake your coin to receive additional coins or unique cultural NFTs.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "High Security Standards",
    subtitle: "Advanced Protection",
    description: "Utilize state-of-the-art cryptographic methods for transaction and asset security.",
  },
];

export default function SamuraiCoinFeatures() {
  return (
    <div className=" text-white p-20">
      <h1 className="text-4xl font-bold text-center mb-12">Why The Samurai Coin</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index} // Use index as key; consider using a unique id if available
            icon={feature.icon}
            title={feature.title}
            subtitle={feature.subtitle}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, subtitle, description }: { icon: React.ReactNode; title: string; subtitle: string; description: string }) {
  return (
    <div className="border bg-[#1F1B1B] border-red-500 rounded-lg p-6 flex flex-col items-center text-center">
      <div className="bg-red-900 rounded-full p-4 mb-4">
        {icon}
       s
      </div>
      <h2 className="text-[22px] w-2/3 font-semibold mb-2">{title}</h2>
      <h3 className="text-red-500 text-[18px] mb-4">{subtitle}</h3>
      <p className="text-white text-[16px]">{description}</p>
    </div>
  );
}