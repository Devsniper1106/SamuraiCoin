import { Wallet, CreditCard, Lock, Network } from "lucide-react";
import Button from "../../ui/button";
// import { Card, CardContent } from "@/components/ui/card"
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "11 Apr", value: 0.2 },
  { name: "12 Apr", value: 0.5 },
  { name: "13 Apr", value: 0.3 },
  { name: "14 Apr", value: 0.28 },
];

export default function WalletSetup() {
  return (
    <div className=" text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-red-500 text-lg mb-2">Wallet Setup</h2>
        <h1 className="text-4xl font-bold mb-8">
          Setting Up Your Samurai Coin Wallet
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <SetupStep
              icon={<Wallet className="w-6 h-6" />}
              title="Choose a Wallet"
              description="Select a compatible wallet that supports Solana blockchain tokens (e.g., Phantom Wallet)."
            />
            <SetupStep
              icon={<CreditCard className="w-6 h-6" />}
              title="Create a Wallet"
              description="Follow the wallet provider's instructions to create a new wallet."
            />
            <SetupStep
              icon={<Lock className="w-6 h-6" />}
              title="Secure Your Wallet"
              description="Store your wallet's seed phrase in a secure location. Do not share it with anyone."
            />
            <SetupStep
              icon={<Network className="w-6 h-6" />}
              title="Connect to Samurai Coin"
              description="Link your wallet to your Samurai Coin account by following the prompts on the Samurai Coin platform."
            />
          </div>

          <div className="bg-gray-800 border-gray-700">
            <div className="p-6">
              <div className="flex justify-between mb-4">
                <div>
                  <p className="text-gray-400">Market Cap</p>
                  <p className="text-2xl font-bold">$374,707,449,419</p>
                  <p className="text-green-500">+2.10%</p>
                </div>
                <div>
                  <p className="text-gray-400">Volume</p>
                  <p className="text-2xl font-bold">$15,463,504,458</p>
                </div>
              </div>

              <div className="flex gap-2 mb-4">
                {["24h", "7d", "1m", "1y", "All"].map((period) => (
                  <button
                    key={period}
                    //  variant={period === '7d' ? 'secondary' : 'ghost'}
                    className="text-sm "
                  >
                    {period}
                  </button>
                ))}
              </div>

              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#4B5563" />
                    <YAxis stroke="#4B5563" />
                    <Tooltip
                      contentStyle={{ background: "#1F2937", border: "none" }}
                      labelStyle={{ color: "#9CA3AF" }}
                    />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#EF4444"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* <div className="flex justify-between items-center mt-4">
                <p className="text-gray-400">14 Apr</p>
                <p className="text-red-500">-$0.28</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SetupStep({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-red-900 rounded-full p-2 mt-1">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}
