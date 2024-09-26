import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const chartData = [
  { name: '1 Feb', value: 4000 },
  { name: '2 Feb', value: 3000 },
  { name: '3 Feb', value: 5000 },
  { name: '4 Feb', value: 2780 },
  { name: '5 Feb', value: 1890 },
  { name: '6 Feb', value: 2390 },
  { name: '7 Feb', value: 3490 },
]

const applications = [
  {
    number: '01',
    title: 'Digital Art',
    description: 'Purchase exclusive Samurai-themed NFTs and digital collectibles.'
  },
  {
    number: '02',
    title: 'Gaming (Coming Soon):',
    description: 'Use Samurai Coin in games for special features, characters, and upgrades.'
  },
  {
    number: '03',
    title: 'Community Engagement',
    description: 'Participate in community events, contests, and exclusive content releases.'
  }
]

export default function HowItWorks() {
  return (
    <section className=" text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">How The Samurai Coin Works</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-4 rounded-lg">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="name" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip contentStyle={{ backgroundColor: '#333', border: 'none' }} />
                <Line type="monotone" dataKey="value" stroke="#ff0000" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Automatic Event Triggering</h3>
            <p className="mb-6">Uses smart contracts and blockchain technology to facilitate seamless transactions.</p>
            <h4 className="text-xl font-semibold mb-4 text-red-600">Applications</h4>
            <ul className="space-y-6">
              {applications.map((app) => (
                <li key={app.number} className="flex items-start">
                  <div className="bg-red-900 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-lg font-bold">{app.number}</span>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">{app.title}</h5>
                    <p className="text-gray-300">{app.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}