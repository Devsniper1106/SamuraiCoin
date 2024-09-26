import { Calendar, Monitor, Mail, UserPlus } from "lucide-react"

export default function AccountCreation() {
  return (
    <div className="bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-red-500 text-center text-lg mb-2">Signing Up</h2>
        <h1 className="text-4xl font-bold text-center mb-8">Create Your Samurai Coin Account</h1>
        
        <div className="border border-red-500 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Step
              icon={<Calendar className="w-8 h-8" />}
              title="Visit the Samurai Coin Sign-Up Page"
              description="Go to the Samurai Coin website and click on 'Sign Up.'"
            />
            <Step
              icon={<Monitor className="w-8 h-8" />}
              title="Fill Out the Registration Form"
              description="Provide your first name, last name, email address, and create a password"
            />
            <Step
              icon={<Mail className="w-8 h-8" />}
              title="Verify Your Email"
              description="Check your email for a verification link and click on it to verify your account."
            />
            <Step
              icon={<UserPlus className="w-8 h-8" />}
              title="Complete Your Profile"
              description="Fill in any additional information required to complete your profile"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function Step({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-red-900 rounded-full p-4 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  )
}