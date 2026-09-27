import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Minus,
  Plus,
  Search,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import Button from "../common/Button";

const slides = [
  {
    id: 1,
    title: "Tirumala Temple",
    subtitle: "Sacred abode of Lord Venkateswara",
    description:
      "Experience spiritual peace at the iconic golden gopuram in Seshachalam Hills.",
    image:
      "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=2200&q=90",
  },
  {
    id: 2,
    title: "Kapila Theertham",
    subtitle: "Serene waterfalls & ancient Shiva shrine",
    description:
      "Witness pristine natural waterfalls cascading down lush, sacred hill slopes.",
    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=2200&q=90",
  },
  {
    id: 3,
    title: "Seshachalam Hills",
    subtitle: "Vast biosphere & scenic valleys",
    description:
      "Explore winding hill roads, rich flora, and majestic mountain views.",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=2200&q=90",
  },
  {
    id: 4,
    title: "Chandragiri Fort",
    subtitle: "Heritage & royal Vijayanagara architecture",
    description:
      "Step back in time to explore historic palaces, ancient stone walls, and lush grounds.",
    image:
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=2200&q=90",
  },
  {
    id: 5,
    title: "Sri Kalahasti",
    subtitle: "Spiritual marvel near Tirupati",
    description:
      "Marvel at breathtaking temple architecture along the banks of Swarnamukhi River.",
    image:
      "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=2200&q=90",
  },
];

const destinations = [
  "Tirupati",
  "Kashmir",
  "Bali",
  "Dubai",
  "Maldives",
  "Switzerland",
  "Goa",
  "Kerala",
  "Rajasthan",
  "Manali",
  "Andaman",
];

export default function Hero() {
  const navigate = useNavigate();

  const [activeSlide, setActiveSlide] = useState(0);

  const [destination, setDestination] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const [destinationOpen, setDestinationOpen] = useState(false);
  const [travellersOpen, setTravellersOpen] = useState(false);

  const [error, setError] = useState("");

  const totalSlides = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  useEffect(() => {
    const handleClickOutside = () => {
      setDestinationOpen(false);
      setTravellersOpen(false);
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const goToPrevious = () => {
    setActiveSlide((current) =>
      current === 0 ? totalSlides - 1 : current - 1
    );
  };

  const goToNext = () => {
    setActiveSlide((current) => (current + 1) % totalSlides);
  };

  const currentSlide = slides[activeSlide];

  const increaseAdults = () => {
    setAdults((value) => Math.min(value + 1, 20));
  };

  const decreaseAdults = () => {
    setAdults((value) => Math.max(value - 1, 1));
  };

  const increaseChildren = () => {
    setChildren((value) => Math.min(value + 1, 10));
  };

  const decreaseChildren = () => {
    setChildren((value) => Math.max(value - 1, 0));
  };

  const handleSearch = () => {
    setError("");

    if (!destination) {
      setError("Please select a destination.");
      return;
    }

    if (!fromDate) {
      setError("Please select your travel start date.");
      return;
    }

    if (!toDate) {
      setError("Please select your travel end date.");
      return;
    }

    if (new Date(toDate) < new Date(fromDate)) {
      setError("Return date cannot be before the start date.");
      return;
    }

    const searchParams = new URLSearchParams({
      destination,
      from: fromDate,
      to: toDate,
      adults: String(adults),
      children: String(children),
    });

    navigate(`/packages?${searchParams.toString()}`);
  };

  const resetSearch = () => {
    setDestination("");
    setFromDate("");
    setToDate("");
    setAdults(2);
    setChildren(0);
    setError("");
  };

  const travellerText = () => {
    const total = adults + children;

    if (children === 0) {
      return `${adults} ${adults === 1 ? "Adult" : "Adults"}`;
    }

    return `${total} Travellers`;
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* BACKGROUND CAROUSEL */}
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
              className="relative h-full min-h-screen w-full shrink-0"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(37,99,235,0.22),transparent_40%)]" />
            </div>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <div className="relative z-10 flex min-h-screen flex-col justify-between px-4 pb-6 pt-24 sm:px-6 lg:px-8 lg:pb-8 lg:pt-28">
        
        {/* HERO TEXT CONTENT */}
        <div className="container-page my-auto flex flex-col justify-center pb-8 pt-4 lg:pb-28">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-100 shadow-xl backdrop-blur-md sm:px-4 sm:py-2 sm:text-xs">
              <Sparkles className="h-3.5 w-3.5 text-blue-300" />
              Your journey starts here
            </div>

            {/* Heading */}
            <h1 className="mt-5 text-3xl font-black leading-[1.05] tracking-tight sm:mt-7 sm:text-6xl lg:text-7xl xl:text-8xl">
              Explore the world.
              <span className="mt-1 block text-blue-300 sm:mt-2">
                Create memories.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/85 sm:mt-7 sm:text-lg sm:leading-8 lg:text-xl">
              Discover handpicked destinations, thoughtfully designed holiday
              packages and reliable travel support for every journey.
            </p>

            {/* CTA Buttons */}
            <div className="hidden lg:mt-8 lg:flex lg:flex-row lg:items-center lg:gap-3">
              <Button to="/packages" variant="light">
                Explore Packages
              </Button>
              <Button to="/contact" variant="secondary">
                Plan My Trip
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Current Destination Info */}
            <div className="mt-6 flex items-center gap-3 sm:mt-9 sm:gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md sm:h-11 sm:w-11">
                <MapPin className="h-4 w-4 text-blue-300 sm:h-5 sm:w-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300">
                  Currently exploring
                </p>
                <div className="mt-0.5 flex flex-wrap items-center gap-1.5 sm:mt-1 sm:gap-2">
                  <span className="text-base font-extrabold sm:text-lg">
                    {currentSlide.title}
                  </span>
                  <span className="text-white/40">•</span>
                  <span className="text-xs text-white/70 sm:text-sm">
                    {currentSlide.subtitle}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM CONTROLS & SEARCH PANEL AREA */}
        <div className="container-page w-full space-y-4">
          
          {/* CAROUSEL CONTROLS */}
          <div className="flex items-center justify-between">
            {/* Indicators */}
            <div className="flex items-center gap-1.5 sm:gap-2">
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
                        ? "w-8 bg-white sm:w-12"
                        : "w-3 bg-white/40 group-hover:bg-white/70 sm:w-5"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={goToPrevious}
                aria-label="Previous destination"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition-all duration-200 hover:border-white/40 hover:bg-white hover:text-slate-900 sm:h-11 sm:w-11"
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <button
                type="button"
                onClick={goToNext}
                aria-label="Next destination"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition-all duration-200 hover:border-white/40 hover:bg-white hover:text-slate-900 sm:h-11 sm:w-11"
              >
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </div>

          {/* FUNCTIONAL SEARCH PANEL */}
          <div className="rounded-2xl border border-white/20 bg-black/40 p-3 text-white shadow-2xl shadow-black/50 backdrop-blur-xl sm:p-4">
            <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_auto]">
              
              {/* DESTINATION */}
              <div
                className="relative"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => {
                    setDestinationOpen((value) => !value);
                    setTravellersOpen(false);
                  }}
                  className="flex min-h-[58px] w-full items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-left transition hover:border-white/30 hover:bg-white/10 sm:min-h-[68px] sm:p-3.5"
                >
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/10 text-white sm:h-10 sm:w-10">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-white/60 sm:text-[11px]">
                      Destination
                    </p>
                    <p
                      className={`mt-0.5 truncate text-xs font-bold sm:mt-1 sm:text-sm ${
                        destination ? "text-white" : "text-white/40"
                      }`}
                    >
                      {destination || "Where do you want to go?"}
                    </p>
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-white/40 transition-transform ${
                      destinationOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {destinationOpen && (
                  <div className="absolute bottom-full left-0 z-50 mb-2 max-h-60 w-full overflow-y-auto rounded-xl border border-white/20 bg-slate-900/95 p-2 shadow-2xl backdrop-blur-xl">
                    {destinations.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => {
                          setDestination(item);
                          setDestinationOpen(false);
                          setError("");
                        }}
                        className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-xs font-semibold transition sm:py-3 sm:text-sm ${
                          destination === item
                            ? "bg-white/20 text-white"
                            : "text-white/70 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        <MapPin className="h-4 w-4" />
                        {item}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* FROM DATE */}
              <label className="flex min-h-[58px] cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-white/30 hover:bg-white/10 sm:min-h-[68px] sm:p-3.5">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/10 text-white sm:h-10 sm:w-10">
                  <CalendarDays className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-white/60 sm:text-[11px]">
                    From
                  </p>
                  <input
                    type="date"
                    value={fromDate}
                    min={new Date().toISOString().split("T")[0]}
                    onChange={(event) => {
                      setFromDate(event.target.value);
                      setError("");
                    }}
                    className="mt-0.5 w-full border-0 bg-transparent p-0 text-xs font-bold text-white outline-none focus:ring-0 sm:mt-1 sm:text-sm [color-scheme:dark]"
                  />
                </div>
              </label>

              {/* TO DATE */}
              <label className="flex min-h-[58px] cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-white/30 hover:bg-white/10 sm:min-h-[68px] sm:p-3.5">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/10 text-white sm:h-10 sm:w-10">
                  <CalendarDays className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-white/60 sm:text-[11px]">
                    To
                  </p>
                  <input
                    type="date"
                    value={toDate}
                    min={
                      fromDate ||
                      new Date().toISOString().split("T")[0]
                    }
                    onChange={(event) => {
                      setToDate(event.target.value);
                      setError("");
                    }}
                    className="mt-0.5 w-full border-0 bg-transparent p-0 text-xs font-bold text-white outline-none focus:ring-0 sm:mt-1 sm:text-sm [color-scheme:dark]"
                  />
                </div>
              </label>

              {/* TRAVELLERS */}
              <div
                className="relative"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => {
                    setTravellersOpen((value) => !value);
                    setDestinationOpen(false);
                  }}
                  className="flex min-h-[58px] w-full items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-left transition hover:border-white/30 hover:bg-white/10 sm:min-h-[68px] sm:p-3.5"
                >
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/10 text-white sm:h-10 sm:w-10">
                    <Users className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-white/60 sm:text-[11px]">
                      Travellers
                    </p>
                    <p className="mt-0.5 truncate text-xs font-bold text-white sm:mt-1 sm:text-sm">
                      {travellerText()}
                    </p>
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-white/40 transition-transform ${
                      travellersOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Popup */}
                {travellersOpen && (
                  <div className="absolute bottom-full left-0 right-0 z-50 mb-2 w-full rounded-xl border border-white/20 bg-slate-900/95 p-4 shadow-2xl backdrop-blur-xl sm:left-auto sm:right-0 sm:w-72">
                    {/* Adults */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-3 sm:pb-4">
                      <div>
                        <p className="text-xs font-bold text-white sm:text-sm">
                          Adults
                        </p>
                        <p className="mt-0.5 text-[10px] text-white/50 sm:text-xs">
                          Age 12+
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={decreaseAdults}
                          disabled={adults <= 1}
                          className="grid h-8 w-8 place-items-center rounded-full border border-white/20 text-white/70 transition hover:border-white/50 hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                        >
                          <Minus className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </button>
                        <span className="w-5 text-center text-xs font-bold text-white sm:text-sm">
                          {adults}
                        </span>
                        <button
                          type="button"
                          onClick={increaseAdults}
                          disabled={adults >= 20}
                          className="grid h-8 w-8 place-items-center rounded-full border border-white/20 text-white/70 transition hover:border-white/50 hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                        >
                          <Plus className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </button>
                      </div>
                    </div>

                    {/* Children */}
                    <div className="flex items-center justify-between pt-3 sm:pt-4">
                      <div>
                        <p className="text-xs font-bold text-white sm:text-sm">
                          Children
                        </p>
                        <p className="mt-0.5 text-[10px] text-white/50 sm:text-xs">
                          Age 2–11
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={decreaseChildren}
                          disabled={children <= 0}
                          className="grid h-8 w-8 place-items-center rounded-full border border-white/20 text-white/70 transition hover:border-white/50 hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                        >
                          <Minus className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </button>
                        <span className="w-5 text-center text-xs font-bold text-white sm:text-sm">
                          {children}
                        </span>
                        <button
                          type="button"
                          onClick={increaseChildren}
                          disabled={children >= 10}
                          className="grid h-8 w-8 place-items-center rounded-full border border-white/20 text-white/70 transition hover:border-white/50 hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                        >
                          <Plus className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </button>
                      </div>
                    </div>

                    {/* Done Button */}
                    <button
                      type="button"
                      onClick={() => setTravellersOpen(false)}
                      className="mt-4 w-full rounded-lg bg-brand-600 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-brand-700 sm:text-sm"
                    >
                      Done
                    </button>
                  </div>
                )}
              </div>

              {/* SEARCH BUTTON */}
              <button
                type="button"
                onClick={handleSearch}
                className="group flex min-h-[58px] items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-3.5 text-xs font-bold text-white shadow-lg shadow-brand-600/25 transition-all duration-200 hover:bg-brand-700 hover:shadow-xl sm:min-h-[68px] sm:py-4 sm:text-sm"
              >
                <Search className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                <span>Search Trips</span>
              </button>
            </div>

            {/* ERROR MESSAGE */}
            {error && (
              <div className="mt-3 flex items-center justify-between rounded-lg border border-red-500/30 bg-red-500/10 px-3.5 py-2 text-xs text-red-200 backdrop-blur-md sm:px-4 sm:py-2.5 sm:text-sm">
                <span>{error}</span>
                <button
                  type="button"
                  onClick={() => setError("")}
                  className="ml-3 rounded-md p-1 transition hover:bg-red-500/20"
                  aria-label="Close error"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            )}

            {/* RESET BUTTON */}
            {(destination || fromDate || toDate || adults !== 2 || children > 0) &&
              !error && (
                <div className="mt-2 flex justify-end">
                  <button
                    type="button"
                    onClick={resetSearch}
                    className="text-[11px] font-semibold text-white/50 transition hover:text-white sm:text-xs"
                  >
                    Clear search
                  </button>
                </div>
              )}
          </div>
        </div>
      </div>

      {/* SIDE SLIDE COUNTER */}
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