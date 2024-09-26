import { Coins, Gamepad2, Users } from "lucide-react"

export default function SamuraiCoinInfographic() {
  return (
    <div className="bg-gray-900 text-white p-8 rounded-lg">
      <h2 className="text-red-500 text-center text-lg mb-2">How The Samurai Coin Works</h2>
      <h1 className="text-4xl font-bold text-center mb-12">Using Samurai Coin</h1>
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <InfoCard
          icon={<Coins className="w-12 h-12" />}
          title="Purchasing Digital Art"
          description="Select an NFT from the Samurai Coin marketplace. Confirm the purchase through your connected wallet."
        />
        <div className="hidden md:block border-t border-dashed border-red-500 w-16 self-start mt-16"></div>
        <InfoCard
          icon={<Gamepad2 className="w-12 h-12" />}
          title="Engaging In Games"
          description="Link your wallet to supported games. Use Samurai Coin to unlock special product features."
        />
        <div className="hidden md:block border-t border-dashed border-red-500 w-16 self-start mt-16"></div>
        <InfoCard
          icon={<Users className="w-12 h-12" />}
          title="Community Participation"
          description="Join events and interact with the Samurai Coin community through the platform."
        />
      </div>
    </div>
  )
}

function InfoCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="flex flex-col items-center text-center max-w-xs">
      <div className="bg-red-900 rounded-full p-4 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  )
}