import { Hand } from 'lucide-react'

export default function EngagementSteps() {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-red-600 mb-2">Maximizing Your Experience</p>
          <h2 className="text-4xl font-bold">Engaging with The Samurai Coin</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              number: '01',
              title: 'Stay Updated',
              description: 'Follow Samurai Coin on social media and subscribe to the newsletter for the latest updates.'
            },
            {
              number: '02',
              title: 'Participate in the Community',
              description: 'Join discussions, provide feedback, and connect with other users.'
            },
            {
              number: '03',
              title: 'Explore New Features',
              description: 'Regularly check for new features and updates that enhance the Samurai Coin platform.'
            }
          ].map((step, index) => (
            <div key={step.number} className="relative">
              <div className="bg-gray-800 p-6 rounded-lg border border-red-600">
                <div className="absolute -top-4 -left-4 bg-red-600 rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-xl font-bold">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 mt-4">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
              {index < 2 && (
                <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                  <Hand className="text-red-600" size={24} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}