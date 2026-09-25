import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock3,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  CalendarDays,
  Plane,
  Hotel,
  Car,
} from "lucide-react";

import { Link, useParams } from "react-router-dom";

import CTA from "../components/sections/CTA";
import { packages } from "../data/travelData";

export default function PackageDetails() {
  const { id } = useParams();

  const pack = packages.find(
    (item) => String(item.id) === String(id)
  );

  /* =========================================================
     PACKAGE NOT FOUND
  ========================================================= */
  if (!pack) {
    return (
      <section className="flex min-h-[75vh] items-center justify-center bg-slate-50 px-6">
        <div className="max-w-lg text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-brand-50">
            <MapPin className="h-8 w-8 text-brand-600" />
          </div>

          <p className="mt-7 text-xs font-black uppercase tracking-[0.25em] text-brand-600">
            Package Not Found
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            This journey is unavailable.
          </h1>

          <p className="mt-4 text-slate-500">
            The travel package you are looking for may have been removed or
            the URL may be incorrect.
          </p>

          <Link
            to="/packages"
            className="
              mt-8
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-brand-600
              px-6
              py-3.5
              text-sm
              font-bold
              text-white
              shadow-lg
              shadow-brand-600/20
              transition
              hover:-translate-y-0.5
              hover:bg-brand-700
            "
          >
            <ArrowLeft className="h-4 w-4" />
            Explore Packages
          </Link>
        </div>
      </section>
    );
  }

  /* =========================================================
     RELATED PACKAGES
  ========================================================= */
  const relatedPackages = packages
    .filter((item) => item.id !== pack.id)
    .slice(0, 3);

  return (
    <>
      {/* =========================================================
          CINEMATIC HERO
      ========================================================= */}
      <section className="relative min-h-[88vh] overflow-hidden bg-black">
        {/* Background */}
        <img
          src={pack.image}
          alt={pack.title}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
          "
        />

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-black/25" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-black/10" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

        {/* Decorative glow */}
        <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />

        {/* Navigation */}
        <div className="container-page relative z-20 pt-7 sm:pt-10">
          <Link
            to="/packages"
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/20
              bg-white/10
              px-4
              py-2.5
              text-sm
              font-semibold
              text-white
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-white/30
              hover:bg-white/20
            "
          >
            <ArrowLeft
              className="
                h-4
                w-4
                transition-transform
                duration-300
                group-hover:-translate-x-1
              "
            />

            All Packages
          </Link>
        </div>

        {/* Hero Content */}
        <div className="container-page relative z-10 flex min-h-[88vh] items-end pb-10 pt-32 sm:pb-14 lg:pb-20">
          <div className="w-full">
            <div className="max-w-5xl">
              {/* Featured */}
              {pack.featured && (
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-xl">
                  <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
                  Featured Journey
                </div>
              )}

              {/* Destination */}
              <div className="flex items-center gap-2 text-sm font-semibold text-white/70">
                <MapPin className="h-4 w-4 text-cyan-300" />
                {pack.destination}
              </div>

              {/* Title */}
              <h1
                className="
                  mt-4
                  max-w-5xl
                  text-5xl
                  font-black
                  leading-[0.9]
                  tracking-[-0.055em]
                  text-white
                  sm:text-6xl
                  md:text-7xl
                  lg:text-[92px]
                "
              >
                {pack.title}
              </h1>

              {/* Meta */}
              <div className="mt-7 flex flex-wrap items-center gap-4 text-sm text-white/70">
                <span className="inline-flex items-center gap-2">
                  <Clock3 className="h-4 w-4 text-cyan-300" />
                  {pack.duration}
                </span>

                <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:block" />

                <span className="inline-flex items-center gap-2">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  Premium Experience
                </span>
              </div>
            </div>

            {/* Bottom Hero Stats */}
            <div className="mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
              <HeroStat
                icon={Clock3}
                label="Duration"
                value={pack.duration}
              />

              <HeroStat
                icon={Users}
                label="Ideal for"
                value="Couples & Families"
              />

              <HeroStat
                icon={Hotel}
                label="Stay"
                value="Handpicked Hotels"
              />

              <HeroStat
                icon={Plane}
                label="Transfers"
                value="Included"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-28">
        {/* Decorative backgrounds */}
        <div className="pointer-events-none absolute -left-60 top-20 h-[500px] w-[500px] rounded-full bg-blue-100/60 blur-3xl" />

        <div className="pointer-events-none absolute -right-60 top-[45%] h-[500px] w-[500px] rounded-full bg-cyan-100/50 blur-3xl" />

        <div className="container-page relative z-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_390px] lg:gap-10">
            {/* =====================================================
                LEFT CONTENT
            ===================================================== */}
            <main className="min-w-0">
              {/* Overview */}
              <section className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-sm sm:p-9 lg:p-10">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-brand-700">
                  <Sparkles className="h-3.5 w-3.5" />
                  Package Overview
                </span>

                <h2 className="mt-5 max-w-3xl text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
                  A carefully planned journey,
                  <span className="text-brand-600">
                    {" "}made memorable.
                  </span>
                </h2>

                <p className="mt-6 max-w-3xl text-[15px] leading-8 text-slate-600 sm:text-base">
                  Experience {pack.destination} through a thoughtfully planned
                  holiday designed around comfort, discovery and unforgettable
                  moments. From carefully selected stays to convenient
                  transfers and experiences, every detail is designed to make
                  your journey easier.
                </p>

                {/* Quick Facts */}
                <div className="mt-9 grid gap-3 sm:grid-cols-3">
                  <InfoCard
                    icon={CalendarDays}
                    title="Duration"
                    value={pack.duration}
                  />

                  <InfoCard
                    icon={MapPin}
                    title="Destination"
                    value={pack.destination}
                  />

                  <InfoCard
                    icon={Users}
                    title="Travel Style"
                    value="Relaxed & Curated"
                  />
                </div>
              </section>

              {/* =================================================
                  INCLUDES
              ================================================= */}
              <section className="mt-6 rounded-[32px] border border-slate-200 bg-white p-7 shadow-sm sm:p-9 lg:p-10">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-brand-600">
                      What's Included
                    </span>

                    <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">
                      Everything covered.
                    </h2>
                  </div>

                  <p className="text-sm text-slate-400">
                    Carefully selected for your comfort
                  </p>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {pack.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="
                        group
                        flex
                        items-center
                        gap-4
                        rounded-2xl
                        border
                        border-slate-100
                        bg-slate-50
                        p-4
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:border-brand-100
                        hover:bg-brand-50/50
                      "
                    >
                      <span
                        className="
                          flex
                          h-10
                          w-10
                          flex-none
                          items-center
                          justify-center
                          rounded-xl
                          bg-white
                          shadow-sm
                          transition
                          group-hover:bg-brand-600
                        "
                      >
                        <Check className="h-4 w-4 text-brand-600 group-hover:text-white" />
                      </span>

                      <span className="text-sm font-bold text-slate-700">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* =================================================
                  EXPERIENCE CARDS
              ================================================= */}
              <section className="mt-6 grid gap-4 sm:grid-cols-3">
                <ExperienceCard
                  icon={Hotel}
                  title="Handpicked Stays"
                  text="Comfortable accommodation selected for location and quality."
                />

                <ExperienceCard
                  icon={Car}
                  title="Easy Transfers"
                  text="Convenient transportation to keep your journey smooth."
                />

                <ExperienceCard
                  icon={ShieldCheck}
                  title="Travel Support"
                  text="Support available before and during your journey."
                />
              </section>

              {/* =================================================
                  TRAVEL PROMISE
              ================================================= */}
              <section className="relative mt-6 overflow-hidden rounded-[32px] bg-brand-950 p-7 text-white sm:p-10">
                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

                <div className="relative z-10 flex flex-col gap-7 sm:flex-row sm:items-start">
                  <div className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-white/10">
                    <ShieldCheck className="h-7 w-7 text-cyan-300" />
                  </div>

                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.2em] text-blue-300">
                      Travel with confidence
                    </p>

                    <h3 className="mt-2 text-2xl font-black">
                      Your journey, supported from start to finish.
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-blue-100/65">
                      Our travel team can help with planning, questions,
                      changes and assistance throughout your trip.
                    </p>
                  </div>
                </div>
              </section>
            </main>

            {/* =====================================================
                STICKY BOOKING CARD
            ===================================================== */}
            <aside>
              <div className="sticky top-24">
                <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.12)]">
                  {/* Card Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={pack.image}
                      alt={pack.title}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        hover:scale-105
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    <div className="absolute bottom-5 left-5">
                      <p className="text-xs font-medium text-white/60">
                        Starting from
                      </p>

                      <p className="mt-1 text-3xl font-black text-white">
                        {pack.price}
                      </p>

                      <p className="mt-1 text-xs text-white/50">
                        Per person
                      </p>
                    </div>

                    {pack.featured && (
                      <div className="absolute right-5 top-5">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-white backdrop-blur-md">
                          <Sparkles className="h-3 w-3 text-cyan-300" />
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Booking Content */}
                  <div className="p-6 sm:p-7">
                    <h3 className="text-xl font-black tracking-tight text-slate-950">
                      Ready to plan this journey?
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Share your preferred dates and requirements. We'll help
                      you create the perfect holiday.
                    </p>

                    {/* Price */}
                    <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-500">
                          Package price
                        </span>

                        <span className="text-lg font-black text-brand-600">
                          {pack.price}
                        </span>
                      </div>

                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-xs text-slate-400">
                          Duration
                        </span>

                        <span className="text-xs font-bold text-slate-600">
                          {pack.duration}
                        </span>
                      </div>
                    </div>

                    {/* Primary CTA */}
                    <Link
                      to="/contact"
                      className="
                        group
                        mt-5
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-2xl
                        bg-brand-600
                        px-5
                        py-4
                        text-sm
                        font-black
                        text-white
                        shadow-xl
                        shadow-brand-600/20
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:bg-brand-700
                        hover:shadow-2xl
                      "
                    >
                      Enquire About This Package

                      <ArrowRight
                        className="
                          h-4
                          w-4
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      />
                    </Link>

                    {/* Secondary CTA */}
                    <Link
                      to="/packages"
                      className="
                        mt-3
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-2xl
                        border
                        border-slate-200
                        px-5
                        py-3.5
                        text-sm
                        font-bold
                        text-slate-700
                        transition
                        hover:bg-slate-50
                      "
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Browse Other Packages
                    </Link>

                    {/* Trust */}
                    <div className="mt-6 flex items-center justify-center gap-2 border-t border-slate-100 pt-5 text-xs text-slate-400">
                      <ShieldCheck className="h-4 w-4 text-emerald-500" />
                      Trusted travel support
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* =========================================================
          RELATED PACKAGES
      ========================================================= */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-page">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-brand-600">
                Continue Exploring
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                You may also like
              </h2>
            </div>

            <Link
              to="/packages"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-600"
            >
              View all packages
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {relatedPackages.map((item) => (
              <Link
                key={item.id}
                to={`/packages/${item.id}`}
                className="
                  group
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-slate-200
                  bg-white
                  shadow-sm
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                  <div className="absolute bottom-5 left-5">
                    <p className="text-xs text-white/60">
                      Starting from
                    </p>

                    <p className="text-xl font-black text-white">
                      {item.price}
                    </p>
                  </div>

                  <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-900 transition group-hover:rotate-45">
                    <ArrowUpRightIcon />
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-black text-slate-900 transition-colors group-hover:text-brand-600">
                    {item.title}
                  </h3>

                  <p className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                    <Clock3 className="h-4 w-4 text-brand-600" />
                    {item.duration}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <CTA />
    </>
  );
}

/* =============================================================
   HERO STAT
============================================================= */

function HeroStat({ icon: Icon, label, value }) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-white/10
        bg-white/10
        px-4
        py-4
        backdrop-blur-xl
      "
    >
      <div className="flex items-center gap-3">
        <Icon className="h-4 w-4 flex-none text-cyan-300" />

        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">
            {label}
          </p>

          <p className="mt-1 truncate text-xs font-bold text-white/80">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

/* =============================================================
   INFO CARD
============================================================= */

function InfoCard({ icon: Icon, title, value }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
      <Icon className="h-5 w-5 text-brand-600" />

      <p className="mt-4 text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
        {title}
      </p>

      <p className="mt-1 text-sm font-bold text-slate-800">
        {value}
      </p>
    </div>
  );
}

/* =============================================================
   EXPERIENCE CARD
============================================================= */

function ExperienceCard({ icon: Icon, title, text }) {
  return (
    <div
      className="
        group
        rounded-[24px]
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-brand-200
        hover:shadow-lg
      "
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
        <Icon className="h-5 w-5" />
      </div>

      <h3 className="mt-5 text-base font-black text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {text}
      </p>
    </div>
  );
}

/* =============================================================
   SMALL ARROW ICON
============================================================= */

function ArrowUpRightIcon() {
  return <ArrowRight className="h-4 w-4" />;
}