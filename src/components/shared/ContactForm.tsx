import Button from "../ui/button";
import Input from "../ui/input";

import Textarea from "../ui/textarea"

import { Phone, Mail, Globe, MapPin } from "lucide-react"

export default function ContactForm() {
  return (
    <div className="bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <form className="lg:col-span-2 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block mb-2">First Name</label>
              <Input id="firstName" placeholder="Enter your First Name" className="bg-transparent border-gray-700 text-white" />
            </div>
            <div>
              <label htmlFor="lastName" className="block mb-2">Last Name</label>
              <Input id="lastName" placeholder="Enter your Last Name" className="bg-transparent border-gray-700 text-white" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <Input id="email" type="email" placeholder="Enter your Email" className="bg-transparent border-gray-700 text-white" />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2">Phone Number</label>
              <Input id="phone" type="tel" placeholder="Enter your Phone Number" className="bg-transparent border-gray-700 text-white" />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block mb-2">Message</label>
            <Textarea id="message" placeholder="Type here" className="bg-transparent border-gray-700 text-white h-32" />
          </div>
          <Button type="submit" title="Submit"/>
        </form>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Contact Informations</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <Phone className="mr-2 text-red-500" />
              <span>310-362-1252</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2 text-red-500" />
              <span>info@tiyjvjiroijkktkokikmnjio.com</span>
            </div>
            <div className="flex items-center">
              <Globe className="mr-2 text-red-500" />
              <span>www.crowgueitblorumcajital.com</span>
            </div>
            <div className="flex items-start">
              <MapPin className="mr-2 text-red-500 mt-1" />
              <span>2618 lourm slimrel Drive,<br />Newport Beach, CA 92660</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}