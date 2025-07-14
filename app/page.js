'use client'

import Link from 'next/link'
import Navbar from './components/Navbar'
import {
  Dumbbell,
  GraduationCap,
  Clock,
  MapPin,
} from 'lucide-react'
import ContactForm from './components/ContactForm'

export default function Home() {
  return (
    <main className="pt-24 flex flex-col items-center justify-center">

      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/AOR2xTw86kM?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=AOR2xTw86kM&modestbranding=1"
          title="Power Alley CrossFit Hero Video"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 bg-black/40">
          <img
            src="/images/pac-logo-black.png"
            alt="Power Alley CrossFit Logo"
            className="h-36 sm:h-44 w-auto mb-4 drop-shadow-lg filter invert"
          />
          <p className="text-xl font-sans">
            A gym for everyone — wherever you are starting.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block px-6 py-3 bg-white text-black font-semibold rounded-lg shadow hover:bg-gray-200 transition font-display tracking-wider uppercase"
          >
            Join a Class Today
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full bg-white py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-display uppercase text-primary mb-6 tracking-wide">
              More Than a Gym
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Power Alley CrossFit is a veteran-owned training space built for real people — no matter where you are starting. Whether you are walking into your first class or chasing elite performance, we have created a safe, high-energy environment where everyone belongs.
            </p>
            <p className="mt-6 text-md text-gray-500">
              Our mission is simple: empower you to move better, get stronger, and feel unstoppable.
            </p>
          </div>

          <div className="w-full h-[300px] sm:h-[400px] md:h-full">
            <img
              src="/images/about-photo.jpg"
              alt="Power Alley athletes training"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="w-full bg-gray-100 py-20 px-6 md:px-12 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display uppercase text-primary mb-12 tracking-wide">
            What We Offer
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* CrossFit */}
            <Link href="#crossfit">
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition group cursor-pointer">
                <Dumbbell className="mx-auto text-primary mb-4 h-8 w-8 group-hover:scale-110 transition" />
                <h3 className="text-xl font-display uppercase text-primary mb-2">CrossFit</h3>
                <p className="text-gray-700 text-sm">
                  Constantly varied functional movements — strength, cardio, and skill combined to get you fit for life.
                </p>
              </div>
            </Link>

            {/* Foundations */}
            <Link href="#foundations">
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition group cursor-pointer">
                <GraduationCap className="mx-auto text-primary mb-4 h-8 w-8 group-hover:scale-110 transition" />
                <h3 className="text-xl font-display uppercase text-primary mb-2">Foundations</h3>
                <p className="text-gray-700 text-sm">
                  New to CrossFit? This is your on-ramp. Learn the movements, build confidence, and meet your coaches.
                </p>
              </div>
            </Link>

            {/* Access+ - Coming Soon */}
            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition group opacity-60 pointer-events-none">
                <Clock className="mx-auto text-primary mb-4 h-8 w-8 group-hover:scale-110 transition" />
                <h3 className="text-xl font-display uppercase text-primary mb-2">Access+</h3>
                <p className="text-gray-700 text-sm">
                  Enjoy extended open-gym access to train on your schedule. Great for experienced athletes & shift workers.
                </p>
              </div>
              <div className="absolute inset-0 bg-black/70 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-display uppercase tracking-wide">
                  Coming Soon
                </span>
              </div>
            </div>

            {/* Drop-Ins */}
            <Link href="#dropins">
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition group cursor-pointer">
                <MapPin className="mx-auto text-primary mb-4 h-8 w-8 group-hover:scale-110 transition" />
                <h3 className="text-xl font-display uppercase text-primary mb-2">Drop-Ins</h3>
                <p className="text-gray-700 text-sm">
                  Visiting town? We love guests. Drop in for a WOD and feel right at home in the Alley.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="w-full bg-white py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="w-full">
            <img
              src="/images/class-schedule.PNG"
              alt="Power Alley Class Schedule"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-display uppercase text-primary mb-6 tracking-wide">
              Class Schedule
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              We have got classes throughout the day to fit your lifestyle. Mornings, afternoons, and evenings — all coached, community-driven, and built to make you better.
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-primary text-black font-semibold rounded-lg shadow hover:brightness-110 transition uppercase tracking-wide font-display"
            >
              Reserve Your Spot
            </a>
          </div>
        </div>
      </section>
      <ContactForm />

    </main>
  )
}
