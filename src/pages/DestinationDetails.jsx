
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  Phone,
  Star,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

import { destinations, packages } from "../data/travelData";

export default function DestinationDetails() {
  const { id } = useParams();

  const destination = destinations.find(
    (item) => item.id === Number(id)
  );

  if (!destination) {
    return (
      <section className="min-h-screen bg-slate-50 px-6 py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-black text-slate-900">
            Destination not found
          </h1>

          <p className="mt-4 text-slate-600">
            The destination you are looking for does not exist.
          </p>

          <Link
            to="/destinations"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-bold text-white hover:bg-brand-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Destinations
          </Link>
        </div>
      </section>
    );
  }

  const relatedPackages = packages.filter(
    (item) =>
      item.destination
        .toLowerCase()
        .includes(destination.name.toLowerCase()) ||
      item.title
        .toLowerCase()
        .includes(destination.name.toLowerCase())
  );

  return (
    <main className="bg-slate-50">
      {/* Hero Image */}
      <section className="relative h-[70vh] min-h-[560px] overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

        <div className="container-page relative flex h-full items-end pb-12 sm:pb-16">
          <div className="max-w-3xl text-white">
            <Link
              to="/destinations"
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-sm font-semibold backdrop-blur-md transition hover:bg-white hover:text-brand-700"
            >
              <ArrowLeft className="h-4 w-4" />
              All Destinations
            </Link>

            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-brand-700">
                {destination.tag}
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs font-semibold backdrop-blur-md">
                <MapPin className="h-3.5 w-3.5" />
                {destination.country}
              </span>
            </div>

            <h1 className="mt-5 text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              {destination.name}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
              {destination.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container-page py-10 sm:py-14 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          {/* Left */}
          <div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-black text-slate-900">
                Plan your {destination.name} trip
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Explore our holiday packages for {destination.name}. Choose
                an itinerary that works for your travel dates, budget and
                preferences.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-brand-50 p-4">
                  <Clock3 className="h-5 w-5 text-brand-600" />

                  <p className="mt-3 text-xs font-semibold text-slate-400">
                    Duration
                  </p>

                  <p className="mt-1 font-bold text-slate-900">
                    {destination.duration}
                  </p>
                </div>

                <div className="rounded-2xl bg-brand-50 p-4">
                  <Star className="h-5 w-5 text-brand-600" />

                  <p className="mt-3 text-xs font-semibold text-slate-400">
                    Experience
                  </p>

                  <p className="mt-1 font-bold text-slate-900">
                    Premium Travel
                  </p>
                </div>

                <div className="rounded-2xl bg-brand-50 p-4">
                  <CalendarDays className="h-5 w-5 text-brand-600" />

                  <p className="mt-3 text-xs font-semibold text-slate-400">
                    Starting From
                  </p>

                  <p className="mt-1 font-bold text-brand-600">
                    {destination.price}
                  </p>
                </div>
              </div>
            </div>

            {/* Packages */}
            <div className="mt-8">
              <h2 className="text-2xl font-black text-slate-900">
                {destination.name} Packages
              </h2>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                {relatedPackages.length > 0 ? (
                  relatedPackages.map((item) => (
                    <div
                      key={item.id}
                      className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-48 w-full object-cover"
                      />

                      <div className="p-5">
                        <h3 className="font-extrabold text-slate-900">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm text-slate-500">
                          {item.duration}
                        </p>

                        <p className="mt-3 text-xl font-black text-brand-600">
                          {item.price}
                        </p>

                        <div className="mt-4 grid gap-2">
                          {item.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="flex items-center gap-2 text-xs text-slate-600"
                            >
                              <CheckCircle2 className="h-3.5 w-3.5 text-brand-600" />
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
                    Contact our team to create a custom {destination.name}{" "}
                    itinerary for you.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right CTA */}
          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <div className="rounded-3xl bg-gradient-to-br from-brand-900 to-brand-600 p-6 text-white shadow-2xl shadow-brand-900/20 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">
                Plan your journey
              </p>

              <h2 className="mt-3 text-2xl font-black">
                Ready to explore {destination.name}?
              </h2>

              <p className="mt-4 text-sm leading-6 text-blue-100">
                Tell us your preferred dates, budget and travel requirements.
                We will help you build the right itinerary.
              </p>

              <div className="mt-6 grid gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-brand-700 transition hover:bg-blue-50"
                >
                  Plan My Trip
                </Link>

                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
                >
                  <Phone className="h-4 w-4" />
                  +91 7013304406
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

