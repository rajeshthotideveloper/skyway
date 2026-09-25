import { useEffect, useState } from "react";

import {
  ChevronLeft,
  ChevronRight,
  Globe2,
  MapPin,
  X,
  Maximize2,
} from "lucide-react";

export default function DestinationGallery({ destinations = [] }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const isOpen = activeIndex !== null;

  const activeDestination =
    activeIndex !== null ? destinations[activeIndex] : null;

  const openGallery = (index) => {
    setActiveIndex(index);
  };

  const closeGallery = () => {
    setActiveIndex(null);
  };

  const showPrevious = () => {
    setActiveIndex((current) => {
      if (current === null) return null;

      return current === 0 ? destinations.length - 1 : current - 1;
    });
  };

  const showNext = () => {
    setActiveIndex((current) => {
      if (current === null) return null;

      return current === destinations.length - 1 ? 0 : current + 1;
    });
  };

  /* Keyboard Navigation */
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyboard = (event) => {
      if (event.key === "Escape") {
        closeGallery();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [isOpen]);

  /* Prevent background scrolling */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!destinations.length) {
    return (
      <div className="rounded-[28px] border border-slate-200 bg-white p-10 text-center">
        <p className="text-sm font-semibold text-slate-500">
          No destinations available.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* =========================================================
          GALLERY
      ========================================================== */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
        {destinations.map((destination, index) => {
          /*
            Create a more editorial layout.

            First image:
            Large featured image

            Remaining images:
            Smaller cards
          */

          const isFeatured = index === 0;

          return (
            <button
              key={destination.id}
              type="button"
              onClick={() => openGallery(index)}
              className={`
                group relative overflow-hidden rounded-[28px]
                border border-white/60 bg-slate-200 text-left
                shadow-sm outline-none
                transition-all duration-500
                hover:-translate-y-1
                hover:shadow-2xl
                focus-visible:ring-4
                focus-visible:ring-blue-500/30
                ${
                  isFeatured
                    ? "h-[440px] sm:col-span-2 lg:col-span-7 lg:h-[620px]"
                    : "h-[300px] sm:h-[340px] lg:col-span-5 lg:h-[300px]"
                }
              `}
            >
              {/* Image */}
              <img
                src={destination.image}
                alt={destination.name}
                loading={index === 0 ? "eager" : "lazy"}
                className="
                  absolute inset-0
                  h-full w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-110
                "
              />

              {/* Dark Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/85
                  via-black/20
                  to-transparent
                  transition-opacity
                  duration-500
                  group-hover:from-black/90
                "
              />

              {/* Top Label */}
              <div className="absolute left-5 top-5">
                <span
                  className="
                    inline-flex items-center gap-2
                    rounded-full
                    border border-white/20
                    bg-black/25
                    px-3.5 py-2
                    text-[10px]
                    font-black
                    uppercase
                    tracking-[0.18em]
                    text-white
                    backdrop-blur-xl
                  "
                >
                  <Globe2 className="h-3.5 w-3.5 text-cyan-300" />
                  {destination.tag || "Destination"}
                </span>
              </div>

              {/* Expand Icon */}
              <div
                className="
                  absolute right-5 top-5
                  flex h-11 w-11
                  items-center justify-center
                  rounded-full
                  border border-white/20
                  bg-black/25
                  text-white
                  opacity-0
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  group-hover:opacity-100
                  group-hover:rotate-0
                "
              >
                <Maximize2 className="h-4 w-4" />
              </div>

              {/* Bottom Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-white/70">
                      <MapPin className="h-3.5 w-3.5 text-cyan-300" />
                      {destination.country}
                    </div>

                    <h3
                      className={`
                        mt-2
                        font-black
                        tracking-tight
                        text-white
                        ${
                          isFeatured
                            ? "text-3xl sm:text-4xl lg:text-5xl"
                            : "text-2xl sm:text-3xl"
                        }
                      `}
                    >
                      {destination.name}
                    </h3>

                    <p className="mt-2 max-w-md text-sm leading-6 text-white/65">
                      {destination.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="hidden flex-none sm:block">
                    <div className="rounded-2xl border border-white/15 bg-black/25 px-4 py-3 text-right backdrop-blur-xl">
                      <p className="text-[9px] font-black uppercase tracking-[0.15em] text-white/45">
                        From
                      </p>

                      <p className="mt-1 text-lg font-black text-white">
                        {destination.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* =========================================================
          FULLSCREEN GALLERY
      ========================================================== */}
      {isOpen && activeDestination && (
        <div
          className="
            fixed inset-0 z-[9999]
            flex items-center justify-center
            bg-black/95
            backdrop-blur-xl
          "
          role="dialog"
          aria-modal="true"
          aria-label="Destination gallery"
        >
          {/* Background */}
          <div
            className="absolute inset-0 bg-black/80"
            onClick={closeGallery}
          />

          {/* =====================================================
              TOP BAR
          ====================================================== */}
          <div
            className="
              absolute left-0 right-0 top-0
              z-30
              flex items-center
              justify-between
              px-5 py-5
              sm:px-8 sm:py-7
            "
          >
            {/* Destination Info */}
            <div className="min-w-0">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white/40">
                SkyWay Destinations
              </p>

              <div className="mt-1 flex items-center gap-2">
                <MapPin className="h-4 w-4 flex-none text-cyan-300" />

                <h2 className="truncate text-lg font-black text-white sm:text-xl">
                  {activeDestination.name}
                </h2>
              </div>
            </div>

            {/* Counter + Close */}
            <div className="flex flex-none items-center gap-3">
              <div
                className="
                  hidden rounded-full
                  border border-white/10
                  bg-white/5
                  px-4 py-2
                  text-xs font-bold
                  text-white/60
                  backdrop-blur-xl
                  sm:block
                "
              >
                {String(activeIndex + 1).padStart(2, "0")}
                <span className="mx-1 text-white/20">/</span>
                {String(destinations.length).padStart(2, "0")}
              </div>

              <button
                type="button"
                onClick={closeGallery}
                aria-label="Close gallery"
                className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-full
                  border border-white/15
                  bg-white/10
                  text-white
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:bg-white/20
                  hover:rotate-90
                "
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* =====================================================
              MAIN IMAGE
          ====================================================== */}
          <div
            className="
              relative z-20
              flex h-full w-full
              items-center justify-center
              px-5
              py-24
              sm:px-16
              lg:px-28
            "
          >
            <img
              key={activeDestination.id}
              src={activeDestination.image}
              alt={activeDestination.name}
              className="
                max-h-[72vh]
                w-auto
                max-w-full
                rounded-2xl
                object-contain
                shadow-[0_30px_100px_rgba(0,0,0,0.6)]
                sm:rounded-[28px]
              "
            />

            {/* =================================================
                PREVIOUS
            ================================================== */}
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous destination"
              className="
                absolute left-3
                top-1/2
                flex h-12 w-12
                -translate-y-1/2
                items-center justify-center
                rounded-full
                border border-white/15
                bg-black/40
                text-white
                shadow-xl
                backdrop-blur-xl
                transition-all
                duration-300
                hover:scale-110
                hover:bg-white
                hover:text-slate-950
                sm:left-6
                sm:h-14
                sm:w-14
                lg:left-10
              "
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* =================================================
                NEXT
            ================================================== */}
            <button
              type="button"
              onClick={showNext}
              aria-label="Next destination"
              className="
                absolute right-3
                top-1/2
                flex h-12 w-12
                -translate-y-1/2
                items-center justify-center
                rounded-full
                border border-white/15
                bg-black/40
                text-white
                shadow-xl
                backdrop-blur-xl
                transition-all
                duration-300
                hover:scale-110
                hover:bg-white
                hover:text-slate-950
                sm:right-6
                sm:h-14
                sm:w-14
                lg:right-10
              "
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* =====================================================
              BOTTOM INFO + THUMBNAILS
          ====================================================== */}
          <div
            className="
              absolute bottom-0 left-0 right-0
              z-30
              bg-gradient-to-t
              from-black
              via-black/80
              to-transparent
              px-5 pb-5 pt-16
              sm:px-8 sm:pb-7
            "
          >
            <div className="mx-auto max-w-7xl">
              <div className="flex flex-col gap-5">
                {/* Description */}
                <div className="flex items-end justify-between gap-5">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-2 text-xs text-white/50">
                      <MapPin className="h-3.5 w-3.5 text-cyan-300" />
                      {activeDestination.country}
                    </div>

                    <h3 className="mt-1 text-2xl font-black text-white sm:text-3xl">
                      {activeDestination.name}
                    </h3>

                    <p className="mt-2 hidden text-sm leading-6 text-white/50 sm:block">
                      {activeDestination.description}
                    </p>
                  </div>

                  <div className="hidden flex-none rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-right backdrop-blur-xl sm:block">
                    <p className="text-[9px] font-black uppercase tracking-[0.15em] text-white/35">
                      Starting from
                    </p>

                    <p className="mt-1 text-lg font-black text-white">
                      {activeDestination.price}
                    </p>
                  </div>
                </div>

                {/* Thumbnail Carousel */}
                <div
                  className="
                    flex
                    gap-2
                    overflow-x-auto
                    pb-1
                    [-ms-overflow-style:none]
                    [scrollbar-width:none]
                    [&::-webkit-scrollbar]:hidden
                  "
                >
                  {destinations.map((destination, index) => (
                    <button
                      key={destination.id}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`View ${destination.name}`}
                      className={`
                        relative
                        h-14 w-20
                        flex-none
                        overflow-hidden
                        rounded-xl
                        border
                        transition-all
                        duration-300
                        sm:h-16
                        sm:w-24
                        ${
                          index === activeIndex
                            ? "border-white ring-2 ring-white/30"
                            : "border-white/10 opacity-50 hover:opacity-100"
                        }
                      `}
                    >
                      <img
                        src={destination.image}
                        alt=""
                        className="h-full w-full object-cover"
                      />

                      {index === activeIndex && (
                        <div className="absolute inset-0 bg-white/10" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}