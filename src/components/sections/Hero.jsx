
import { useEffect, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Search,
  Sparkles,
  Users,
} from "lucide-react";
import Button from "../common/Button";

const slides = [
  {
    id: 1,
    title: "Kashmir",
    subtitle: "Paradise in the Himalayas",
    description:
      "Snow-covered mountains, peaceful lakes and breathtaking valley views.",
    image:
      "https://images.unsplash.com/photo-1595815771614-ade9d2a0c9bd?auto=format&fit=crop&w=2200&q=90",
  },
  {
    id: 2,
    title: "Bali",
    subtitle: "Island of unforgettable moments",
    description:
      "Discover tropical beaches, ancient temples and beautiful island experiences.",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=2200&q=90",
  },
  {
    id: 3,
    title: "Dubai",
    subtitle: "Luxury meets adventure",
    description:
      "Experience iconic skylines, desert adventures and world-class attractions.",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2200&q=90",
  },
  {
    id: 4,
    title: "Maldives",
    subtitle: "Escape to paradise",
    description:
      "Crystal-clear waters, white sandy beaches and unforgettable island stays.",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=2200&q=90",
  },
  {
    id: 5,
    title: "Switzerland",
    subtitle: "Where nature meets perfection",
    description:
      "Snowy peaks, scenic rail journeys and picture-perfect alpine villages.",
    image:
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=2200&q=90",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const totalSlides = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const goToPrevious = () => {
    setActiveSlide((current) =>
      current === 0 ? totalSlides - 1 : current - 1
    );
  };

  const goToNext = () => {
    setActiveSlide((current) => (current + 1) % totalSlides);
  };

  const currentSlide = slides[activeSlide];

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* =========================================
          HORIZONTAL FULL SCREEN CAROUSEL
      ========================================== */}
      <div className="absolute inset-0">
        <div
          className="flex h-full w-full transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            transform: `translateX(-${activeSlide * 100}%)`,
          }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="relative h-screen min-h-[700px] w-full shrink-0"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Dark cinematic overlay */}
              <div className="absolute inset-0 bg-black/35" />

              {/* Bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />

              {/* Left gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/20 to-transparent" />

              {/* Blue brand glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(37,99,235,0.22),transparent_35%)]" />
            </div>
          ))}
        </div>
      </div>

      {/* =========================================
          MAIN CONTENT
      ========================================== */}
      <div className="relative z-10 min-h-screen">
        <div className="container-page flex min-h-screen flex-col justify-center pb-44 pt-28 lg:pb-52">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-100 shadow-xl backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-blue-300" />
              Your journey starts here
            </div>

            {/* Heading */}
            <h1 className="mt-7 text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
              Explore the world.
              <span className="mt-2 block text-blue-300">
                Create memories.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8 lg:text-xl">
              Discover handpicked destinations, thoughtfully designed holiday
              packages and reliable travel support for every journey.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/packages" variant="light">
                Explore Packages
              </Button>

              <Button to="/contact" variant="secondary">
                Plan My Trip
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Current Destination */}
            <div className="mt-9 flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
                <MapPin className="h-5 w-5 text-blue-300" />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300">
                  Currently exploring
                </p>

                <div className="mt-1 flex flex-wrap items-center gap-2">
                  <span className="text-lg font-extrabold">
                    {currentSlide.title}
                  </span>

                  <span className="text-white/40">•</span>

                  <span className="text-sm text-white/70">
                    {currentSlide.subtitle}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            CAROUSEL CONTROLS
        ========================================== */}
        <div className="absolute bottom-40 left-0 right-0 z-20 sm:bottom-40 lg:bottom-44">
          <div className="container-page">
            <div className="flex items-center justify-between">
              {/* Slide indicators */}
              <div className="flex items-center gap-2">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Go to ${slide.title}`}
                    className="group py-2"
                  >
                    <span
                      className={`block h-1.5 rounded-full transition-all duration-500 ${
                        index === activeSlide
                          ? "w-12 bg-white"
                          : "w-5 bg-white/40 group-hover:bg-white/70"
                      }`}
                    />
                  </button>
                ))}
              </div>

              {/* Previous / Next */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={goToPrevious}
                  aria-label="Previous destination"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition-all duration-200 hover:border-white/40 hover:bg-white hover:text-brand-700"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  onClick={goToNext}
                  aria-label="Next destination"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition-all duration-200 hover:border-white/40 hover:bg-white hover:text-brand-700"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            PREMIUM SEARCH PANEL
        ========================================== */}
        <div className="absolute bottom-4 left-0 right-0 z-30 sm:bottom-5 lg:bottom-6">
          <div className="container-page">
            <div className="rounded-2xl border border-white/20 bg-white/95 p-3 text-slate-900 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-4">
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                {/* Destination */}
                <div className="rounded-xl border border-slate-200 bg-white p-3.5 transition hover:border-brand-200 hover:bg-brand-50/30">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-600">
                      <MapPin className="h-5 w-5" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                        Destination
                      </p>

                      <p className="mt-1 truncate text-sm font-bold text-slate-800">
                        Where do you want to go?
                      </p>
                    </div>
                  </div>
                </div>

                {/* Date */}
                <div className="rounded-xl border border-slate-200 bg-white p-3.5 transition hover:border-brand-200 hover:bg-brand-50/30">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-600">
                      <CalendarDays className="h-5 w-5" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                        Travel Date
                      </p>

                      <p className="mt-1 truncate text-sm font-bold text-slate-800">
                        Choose your dates
                      </p>
                    </div>
                  </div>
                </div>

                {/* Travellers */}
                <div className="rounded-xl border border-slate-200 bg-white p-3.5 transition hover:border-brand-200 hover:bg-brand-50/30">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-600">
                      <Users className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                        Travellers
                      </p>

                      <p className="mt-1 text-sm font-bold text-slate-800">
                        2 Adults
                      </p>
                    </div>
                  </div>
                </div>

                {/* Search */}
                <button
                  type="button"
                  className="group flex min-h-[68px] items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-4 text-sm font-bold text-white shadow-lg shadow-brand-600/25 transition-all duration-200 hover:bg-brand-700 hover:shadow-xl"
                >
                  <Search className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                  Search Trips
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          SLIDE COUNTER
      ========================================== */}
      <div className="absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 lg:block">
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs font-bold text-white/50">
            0{activeSlide + 1}
          </span>

          <div className="h-16 w-px bg-white/20">
            <div
              className="w-full bg-white transition-all duration-500"
              style={{
                height: `${((activeSlide + 1) / totalSlides) * 100}%`,
              }}
            />
          </div>

          <span className="text-xs font-bold text-white/40">
            0{totalSlides}
          </span>
        </div>
      </div>
    </section>
  );
}

