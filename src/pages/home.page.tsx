import FooterComponent from "@/components/footer.component";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/ui/header.component";
import { MapPin, QrCode, Bike, Download, User } from "lucide-react";
import AppIcon from '@/assets/app_icon.png'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-80px)] pt-20 flex items-center justify-center bg-green-50">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="flex flex-col items-center md:items-start w-full md:w-1/2 justify-center">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 text-green-600">
              Ride Easy, Go Green!
            </h1>
            <p className="text-xl mb-8">
              Discover the most convenient and eco-friendly way to explore your
              city.
            </p>
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              Start Riding Now
            </Button>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <img
              src={AppIcon}
              alt="Person riding a GoEase bike"
              width={400}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0">
            <div className="flex flex-col items-center">
              <MapPin size={64} className="text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Locate</h3>
              <p className="text-center">Find a cycle via the app</p>
            </div>
            <div className="flex flex-col items-center">
              <QrCode size={64} className="text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Unlock</h3>
              <p className="text-center">Scan QR code to unlock</p>
            </div>
            <div className="flex flex-col items-center">
              <Bike size={64} className="text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ride</h3>
              <p className="text-center">
                Enjoy your ride and park responsibly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose GoEase?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600">
                Affordable
              </h3>
              <p>
                Rides starting at just $1/hour. Save money on transportation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600">
                Eco-Friendly
              </h3>
              <p>
                Reduce your carbon footprint and contribute to a cleaner
                environment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600">
                Efficient
              </h3>
              <p>
                Explore cities faster and more efficiently, avoiding traffic
                jams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            What Our Riders Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah L."
              text="GoEase has transformed my daily commute. It's affordable, convenient, and I feel great about reducing my carbon footprint!"
            />
            <TestimonialCard
              name="Mike T."
              text="I love exploring the city with GoEase. It's so easy to find and unlock a bike, and I've discovered so many new places!"
            />
            <TestimonialCard
              name="Emma R."
              text="As a student, GoEase is perfect for getting around campus quickly and cheaply. Plus, it's a great way to stay active!"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Join Thousands of Riders Today!
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" variant="secondary" className="flex items-center">
              <Download className="mr-2" />
              Download on App Store
            </Button>
            <Button size="lg" variant="secondary" className="flex items-center">
              <Download className="mr-2" />
              Get it on Google Play
            </Button>
          </div>
        </div>
      </section>

      <FooterComponent />
    </div>
  );
}

function TestimonialCard({ name, text }: any) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <User className="m-1" />
        <h3 className="text-xl font-semibold">{name}</h3>
      </div>
      <p className="italic">&quot;{text}&quot;</p>
    </div>
  );
}
