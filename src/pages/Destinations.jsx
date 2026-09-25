import {
  ArrowRight,
  Compass,
  Globe2,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

import DestinationCard from "../components/sections/DestinationCard";
import CTA from "../components/sections/CTA";
import { destinations } from "../data/travelData";

export default function Destinations() {
  return (
    <>
      {/* =========================================================
          PREMIUM HERO
      ========================================================== */}
      <section className="relative min-h-[68vh] overflow-hidden bg-slate-950">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=90"
          alt="Beautiful travel destination"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Image Overlays */}
        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/10" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20" />

        {/* Decorative Glow */}
        <div className="pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-blue-500/15 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 left-20 h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-3xl" />

        {/* Hero Content */}
        <div className="container-page relative z-10 flex min-h-[68vh] items-end pb-14 pt-32 sm:pb-16 lg:pb-20">
          <div className="grid w-full gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            {/* Main Content */}
            <div className="max-w-4xl">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.25em] text-white backdrop-blur-xl sm:text-xs">
                <Globe2 className="h-3.5 w-3.5 text-cyan-300" />
                Explore the World
              </div>

              {/* Heading */}
              <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.92] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-[82px]">
                Places that
                <span className="block text-blue-300">
                  stay with you.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                Discover breathtaking landscapes, vibrant cities, peaceful
                escapes and unforgettable experiences curated for the way you
                love to travel.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#destinations"
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-black text-slate-950 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50"
                >
                  Explore Destinations

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <Link
                  to="/packages"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
                >
                  View Packages
                </Link>
              </div>
            </div>

            {/* =====================================================
                FLOATING HERO CARD
            ====================================================== */}
            <div className="hidden w-[290px] lg:block">
              <div className="rounded-[28px] border border-white/15 bg-black/30 p-6 text-white shadow-2xl backdrop-blur-xl">
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-950 shadow-lg">
                  <Compass className="h-5 w-5" />
                </div>

                {/* Label */}
                <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                  Discover more
                </p>

                {/* Heading */}
                <h3 className="mt-2 text-2xl font-black leading-tight">
                  Your next place
                  <span className="block text-blue-300">
                    is waiting.
                  </span>
                </h3>

                {/* Stats */}
                <div className="mt-6 border-t border-white/10 pt-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/45">
                      Destinations
                    </span>

                    <span className="text-lg font-black text-white">
                      {destinations.length.toString().padStart(2, "0")}
                    </span>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-xs text-white/50">
                    <MapPin className="h-4 w-4 text-cyan-300" />
                    Handpicked places
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DESTINATION SECTION
      ========================================================== */}
      <section
        id="destinations"
        className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-28"
      >
        {/* Background Decorations */}
        <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-blue-100/60 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-100/50 blur-3xl" />

        <div className="container-page relative z-10">
          {/* =====================================================
              SECTION HEADER
          ====================================================== */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            {/* Heading */}
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-blue-700">
                <Sparkles className="h-3.5 w-3.5" />
                Popular Destinations
              </div>

              <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
                Where will you
                <span className="block text-blue-600">
                  go next?
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
                From mountain escapes and tropical beaches to cultural
                journeys and vibrant city breaks, discover destinations made
                for memorable experiences.
              </p>
            </div>

            {/* =================================================
                DESTINATION COUNTER
            ================================================== */}
            <div className="flex w-fit items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
                <Globe2 className="h-5 w-5" />
              </div>

              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                  Explore
                </p>

                <p className="mt-1 text-sm font-black text-slate-900">
                  {destinations.length} destinations
                </p>
              </div>
            </div>
          </div>

          {/* =====================================================
              DESTINATION GRID
              1 COLUMN  → MOBILE
              2 COLUMNS → TABLET
              3 COLUMNS → DESKTOP
          ====================================================== */}
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {destinations.map((destination) => (
                <div
                  key={destination.id}
                  className="w-full"
                >
                  <DestinationCard destination={destination} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DISCOVER BANNER
      ========================================================== */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-[32px] bg-slate-950 shadow-[0_30px_80px_rgba(15,23,42,0.18)] sm:rounded-[40px]">
            {/* Decorative Glow */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-3xl" />

            {/* Content */}
            <div className="relative z-10 grid gap-10 px-7 py-10 sm:px-10 sm:py-14 lg:grid-cols-[1fr_auto] lg:items-center lg:px-16 lg:py-16">
              {/* Main */}
              <div className="max-w-3xl">
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 shadow-lg backdrop-blur-md">
                  <MapPin className="h-6 w-6 text-cyan-300" />
                </div>

                {/* Label */}
                <p className="mt-7 text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
                  Travel your way
                </p>

                {/* Heading */}
                <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                  One destination.
                  <span className="block text-blue-300">
                    Endless possibilities.
                  </span>
                </h2>

                {/* Description */}
                <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                  Whether you're looking for adventure, relaxation, culture or
                  a little bit of everything, we'll help you create a journey
                  that feels uniquely yours.
                </p>

                {/* CTA */}
                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-black text-slate-950 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50"
                  >
                    Plan My Journey

                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* =================================================
                  TRAVEL STEPS
              ================================================== */}
              <div className="hidden w-[260px] lg:block">
                <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/35">
                    Travel inspiration
                  </p>

                  <div className="mt-6 space-y-5">
                    <Stat
                      number="01"
                      label="Choose a destination"
                    />

                    <Stat
                      number="02"
                      label="Build your experience"
                    />

                    <Stat
                      number="03"
                      label="Start your journey"
                    />
                  </div>

                  <div className="mt-7 h-px bg-gradient-to-r from-cyan-300/40 via-blue-400/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN CTA
      ========================================================== */}
      <CTA />
    </>
  );
}

/* =============================================================
   TRAVEL STEP
============================================================= */

function Stat({ number, label }) {
  return (
    <div className="flex items-center gap-4">
      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-white/10 text-xs font-black text-cyan-300">
        {number}
      </span>

      <span className="text-sm font-semibold text-white/65">
        {label}
      </span>
    </div>
  );
}