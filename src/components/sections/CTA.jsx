
import {
  ArrowRight,
  MessageCircle,
  PhoneCall,
  Sparkles,
} from "lucide-react";

import Button from "../common/Button";

export default function CTA() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-900 via-brand-700 to-brand-500 px-6 py-10 text-white shadow-2xl shadow-brand-900/20 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          {/* Background decoration */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {/* Large glow */}
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />

            <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-blue-300/10 blur-3xl" />

            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:36px_36px]" />

            {/* Decorative circles */}
            <div className="absolute right-[18%] top-10 h-28 w-28 rounded-full border border-white/10" />
            <div className="absolute right-[12%] top-16 h-40 w-40 rounded-full border border-white/5" />
          </div>

          {/* Content */}
          <div className="relative z-10 lg:flex lg:items-center lg:justify-between lg:gap-12">
            {/* Left side */}
            <div className="max-w-2xl">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-100 backdrop-blur-md sm:text-xs">
                <Sparkles className="h-3.5 w-3.5 text-blue-200" />
                Let’s plan your next adventure
              </div>

              {/* Heading */}
              <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Tell us where
                <span className="block text-blue-200">
                  you want to go.
                </span>
              </h2>

              {/* Description */}
              <p className="mt-5 max-w-xl text-sm leading-7 text-blue-100 sm:text-base sm:leading-8">
                Share your destination, travel dates, budget and preferences.
                Our travel experts will create a practical holiday plan
                tailored around your journey.
              </p>

              {/* Trust indicators */}
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-white/80 sm:text-sm">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-200" />
                  Personalized itineraries
                </span>

                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-200" />
                  Flexible packages
                </span>

                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-200" />
                  Travel assistance
                </span>
              </div>
            </div>

            {/* Right side */}
            <div className="relative mt-9 lg:mt-0 lg:w-[390px] lg:shrink-0">
              {/* Glass card */}
              <div className="rounded-3xl border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-xl sm:p-5">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                  {/* Icon */}
                  <div className="flex items-center gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-brand-700 shadow-lg">
                      <MessageCircle className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-200">
                        Start planning
                      </p>

                      <p className="mt-1 text-lg font-extrabold">
                        Your dream trip
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                    <Button
                      to="/contact"
                      variant="light"
                      className="w-full justify-center"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Plan My Trip
                    </Button>

                    <a
                      href="tel:+919876543210"
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-bold text-white transition-all duration-200 hover:border-white/30 hover:bg-white/15"
                    >
                      <PhoneCall className="h-4 w-4" />
                      Call Our Travel Team
                    </a>
                  </div>

                  {/* Small note */}
                  <p className="mt-4 text-center text-xs leading-5 text-blue-100/75">
                    Talk to our team and start planning your next getaway.
                  </p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -right-3 -top-4 hidden rounded-2xl border border-white/20 bg-white px-4 py-3 text-slate-900 shadow-xl sm:block">
                <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-brand-600">
                  Travel made simple
                </p>

                <p className="mt-1 text-xs font-extrabold">
                  ✦ Plan. Explore. Enjoy.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom highlight line */}
          <div className="relative z-10 mt-10 border-t border-white/10 pt-5 sm:mt-12">
            <div className="flex flex-col gap-2 text-xs text-blue-100 sm:flex-row sm:items-center sm:justify-between">
              <span>From weekend getaways to international adventures.</span>

              <span className="inline-flex items-center gap-2 font-semibold">
                Start your journey
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

