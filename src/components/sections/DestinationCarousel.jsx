import {
  ChevronLeft,
  ChevronRight,
  Compass,
  Sparkles,
} from "lucide-react";
import { useRef } from "react";

import DestinationCard from "./DestinationCard";
import { destinations } from "../../data/travelData";

export default function DestinationCarousel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;

    const cardWidth =
      container.querySelector("[data-destination-card]")?.offsetWidth || 360;

    const gap = 20;

    container.scrollBy({
      left:
        direction === "next"
          ? cardWidth + gap
          : -(cardWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[400px] w-[400px] rounded-full bg-blue-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-100/40 blur-3xl" />

      <div className="container-page relative z-10">
        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-blue-700">
              <Sparkles className="h-3.5 w-3.5" />
              Discover destinations
            </div>

            {/* Heading */}
            <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.04em] text-slate-950 sm:text-5xl">
              Where will you
              <span className="block text-blue-600">
                go next?
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
              Explore handpicked destinations and discover places designed
              for unforgettable holidays, adventures and escapes.
            </p>
          </div>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}
          <div className="hidden items-center gap-3 sm:flex">
            <button
              type="button"
              onClick={() => scroll("previous")}
              aria-label="Previous destinations"
              className="
                group
                flex h-12 w-12
                items-center justify-center
                rounded-full
                border border-slate-200
                bg-white
                text-slate-700
                shadow-sm
                transition-all duration-300
                hover:-translate-x-1
                hover:border-slate-900
                hover:bg-slate-950
                hover:text-white
                hover:shadow-lg
              "
            >
              <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" />
            </button>

            <button
              type="button"
              onClick={() => scroll("next")}
              aria-label="Next destinations"
              className="
                group
                flex h-12 w-12
                items-center justify-center
                rounded-full
                border border-slate-200
                bg-white
                text-slate-700
                shadow-sm
                transition-all duration-300
                hover:translate-x-1
                hover:border-slate-900
                hover:bg-slate-950
                hover:text-white
                hover:shadow-lg
              "
            >
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        {/* =====================================================
            CAROUSEL
        ====================================================== */}
        <div className="relative mt-10">
          {/* Left fade */}
          <div className="pointer-events-none absolute -left-1 top-0 z-10 hidden h-full w-16 bg-gradient-to-r from-slate-50 to-transparent lg:block" />

          {/* Right fade */}
          <div className="pointer-events-none absolute -right-1 top-0 z-10 hidden h-full w-16 bg-gradient-to-l from-slate-50 to-transparent lg:block" />

          <div
            ref={scrollRef}
            className="
              flex
              gap-5
              overflow-x-auto
              pb-6
              scroll-smooth
              snap-x
              snap-mandatory
              overscroll-x-contain
              [-ms-overflow-style:none]
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {destinations.map((destination) => (
              <div
                key={destination.id}
                data-destination-card
                className="
                  w-[85vw]
                  max-w-[340px]
                  flex-none
                  snap-start

                  sm:w-[320px]
                  sm:max-w-none

                  md:w-[360px]

                  lg:w-[390px]

                  xl:w-[410px]

                  2xl:w-[430px]
                "
              >
                <DestinationCard destination={destination} />
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            MOBILE NAVIGATION
        ====================================================== */}
        <div className="mt-2 flex items-center justify-between sm:hidden">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
            <Compass className="h-4 w-4 text-blue-500" />
            Swipe to explore
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scroll("previous")}
              aria-label="Previous destinations"
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-full
                border border-slate-200
                bg-white
                text-slate-700
                shadow-sm
                transition-all
                active:scale-95
              "
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => scroll("next")}
              aria-label="Next destinations"
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-full
                border border-slate-200
                bg-white
                text-slate-700
                shadow-sm
                transition-all
                active:scale-95
              "
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* =====================================================
            BOTTOM INFO
        ====================================================== */}
        <div className="mt-6 hidden items-center justify-between border-t border-slate-200 pt-5 sm:flex">
          <p className="text-xs font-semibold text-slate-400">
            {destinations.length} destinations to explore
          </p>

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
            <span className="h-px w-8 bg-slate-300" />
            Scroll to explore
            <span className="h-px w-8 bg-slate-300" />
          </div>
        </div>
      </div>
    </section>
  );
}