import {
  ArrowRight,
  Check,
  Globe2,
  HeartHandshake,
  MapPin,
  Sparkles,
  UsersRound,
} from "lucide-react";

import { Link } from "react-router-dom";

import CTA from "../components/sections/CTA";

const values = [
  {
    icon: HeartHandshake,
    title: "People First",
    copy:
      "We design holidays around what travellers actually need — clear plans, comfort and helpful support.",
  },
  {
    icon: Sparkles,
    title: "Thoughtful Details",
    copy:
      "Small planning choices can make a big difference to how relaxed and memorable a journey feels.",
  },
  {
    icon: Globe2,
    title: "Curious Travel",
    copy:
      "We believe travel should help you experience a place, not simply collect a checklist of sights.",
  },
  {
    icon: UsersRound,
    title: "Long-Term Relationships",
    copy:
      "We aim to become your travel partner for the next adventure, not just the current booking.",
  },
];

const stats = [
  {
    value: "50+",
    label: "Destinations",
  },
  {
    value: "500+",
    label: "Happy Travellers",
  },
  {
    value: "100+",
    label: "Curated Journeys",
  },
  {
    value: "24/7",
    label: "Travel Support",
  },
];

export default function About() {
  return (
    <>
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[78vh] overflow-hidden bg-black">
        <img
          src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=2200&q=90"
          alt="Travellers exploring a destination"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Image overlays */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/10" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

        {/* Decorative glow */}
        <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="container-page relative z-10 flex min-h-[78vh] items-end pb-12 pt-32 sm:pb-16 lg:pb-20">
          <div className="grid w-full gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            {/* Hero content */}
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.25em] text-white backdrop-blur-xl sm:text-xs">
                <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
                About SkyWay
              </div>

              <h1
                className="
                  mt-6
                  max-w-4xl
                  text-5xl
                  font-black
                  leading-[0.92]
                  tracking-[-0.055em]
                  text-white
                  sm:text-6xl
                  md:text-7xl
                  lg:text-[88px]
                "
              >
                Travel planning
                <span className="block text-blue-300">
                  with a human touch.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                We help families, couples, friends and businesses turn travel
                ideas into comfortable, thoughtfully planned journeys.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/packages"
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    bg-white
                    px-6
                    py-3.5
                    text-sm
                    font-black
                    text-slate-950
                    shadow-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-blue-50
                  "
                >
                  Explore Our Journeys

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

                <Link
                  to="/contact"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-white/20
                    bg-white/10
                    px-6
                    py-3.5
                    text-sm
                    font-bold
                    text-white
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-white/15
                  "
                >
                  Plan a Trip
                </Link>
              </div>
            </div>

            {/* Floating hero card */}
            <div className="hidden w-[280px] lg:block">
              <div
                className="
                  rounded-[28px]
                  border
                  border-white/15
                  bg-white/10
                  p-6
                  text-white
                  shadow-2xl
                  backdrop-blur-xl
                "
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand-950">
                  <MapPin className="h-5 w-5" />
                </div>

                <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/45">
                  Our philosophy
                </p>

                <p className="mt-2 text-xl font-black leading-tight">
                  Less planning stress.
                  <span className="block text-blue-300">
                    More travel moments.
                  </span>
                </p>

                <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-5 text-xs text-white/50">
                  <Check className="h-4 w-4 text-emerald-400" />
                  Travel thoughtfully
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STATS
      ========================================================= */}
      <section className="relative z-20 -mt-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1400px]">
          <div
            className="
              grid
              overflow-hidden
              rounded-[28px]
              border
              border-slate-200
              bg-white
              shadow-[0_20px_60px_rgba(15,23,42,0.10)]
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`
                  px-6
                  py-7
                  text-center
                  sm:px-8
                  lg:py-8
                  ${
                    index !== stats.length - 1
                      ? "border-b border-slate-100 sm:border-r"
                      : ""
                  }
                `}
              >
                <p className="text-3xl font-black tracking-tight text-brand-600 sm:text-4xl">
                  {stat.value}
                </p>

                <p className="mt-2 text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          OUR STORY
      ========================================================= */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
        {/* Background decoration */}
        <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-blue-50 blur-3xl" />

        <div className="container-page relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            {/* Image */}
            <div className="relative">
              <div className="overflow-hidden rounded-[32px] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1400&q=90"
                  alt="Travellers enjoying a journey together"
                  className="
                    h-[460px]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                    sm:h-[560px]
                  "
                />
              </div>

              {/* Floating card */}
              <div
                className="
                  absolute
                  -bottom-7
                  -right-5
                  max-w-[250px]
                  rounded-[24px]
                  border
                  border-white/60
                  bg-white/90
                  p-5
                  shadow-2xl
                  backdrop-blur-xl
                  sm:-right-8
                "
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50">
                    <HeartHandshake className="h-5 w-5 text-brand-600" />
                  </div>

                  <div>
                    <p className="text-sm font-black text-slate-900">
                      People first
                    </p>

                    <p className="mt-0.5 text-xs text-slate-400">
                      Always at the heart
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-brand-700">
                <Sparkles className="h-3.5 w-3.5" />
                Our Story
              </span>

              <h2
                className="
                  mt-5
                  max-w-3xl
                  text-4xl
                  font-black
                  leading-tight
                  tracking-[-0.04em]
                  text-slate-950
                  sm:text-5xl
                "
              >
                A better way to
                <span className="block text-brand-600">
                  plan holidays.
                </span>
              </h2>

              <p className="mt-7 text-base leading-8 text-slate-600">
                SkyWay is built around a simple idea: travel planning should
                be exciting, not exhausting. We combine curated itineraries
                with flexible customization, so you can focus on the
                experience while we handle the details.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Whether you are planning a weekend break, a family vacation,
                a honeymoon or an international holiday, we keep the process
                clear from the first conversation to the final day of your
                trip.
              </p>

              {/* Story points */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <StoryPoint
                  title="Curated Experiences"
                  text="Journeys designed around meaningful experiences."
                />

                <StoryPoint
                  title="Flexible Planning"
                  text="Plans that can adapt to your travel preferences."
                />

                <StoryPoint
                  title="Clear Communication"
                  text="Simple planning without unnecessary complexity."
                />

                <StoryPoint
                  title="Human Support"
                  text="Real assistance when you need it."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          VALUES
      ========================================================= */}
      <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute -right-40 top-10 h-[450px] w-[450px] rounded-full bg-blue-100/50 blur-3xl" />

        <div className="container-page relative z-10">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-brand-700 shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Our Values
            </span>

            <h2
              className="
                mt-5
                text-4xl
                font-black
                leading-tight
                tracking-[-0.04em]
                text-slate-950
                sm:text-5xl
              "
            >
              What guides
              <span className="text-brand-600"> every trip.</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-500">
              Every journey we create is shaped by the same principles:
              thoughtful planning, genuine support and experiences that feel
              personal.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, copy }) => (
              <div
                key={title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-slate-200
                  bg-white
                  p-7
                  shadow-sm
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-brand-200
                  hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]
                "
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-50 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                <div
                  className="
                    relative
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-brand-50
                    text-brand-600
                    transition-all
                    duration-300
                    group-hover:bg-brand-600
                    group-hover:text-white
                  "
                >
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="relative mt-6 text-lg font-black tracking-tight text-slate-900">
                  {title}
                </h3>

                <p className="relative mt-3 text-sm leading-7 text-slate-500">
                  {copy}
                </p>

                <div className="relative mt-6 flex items-center gap-2 text-xs font-bold text-brand-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
                  SkyWay principle
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          MISSION BANNER
      ========================================================= */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-[32px] bg-brand-950 px-7 py-12 text-white sm:px-10 sm:py-16 lg:px-16">
            <div className="pointer-events-none absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full bg-blue-500/15 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-32 -left-32 h-[350px] w-[350px] rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-3xl">
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-cyan-300">
                  Why SkyWay
                </span>

                <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  We don't just plan trips.
                  <span className="block text-blue-300">
                    We help create memories.
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-blue-100/60 sm:text-base">
                  From the first idea to the moment you return home, our goal
                  is to make every part of your journey feel simple,
                  comfortable and meaningful.
                </p>
              </div>

              <Link
                to="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-white
                  px-6
                  py-4
                  text-sm
                  font-black
                  text-brand-950
                  shadow-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-blue-50
                "
              >
                Start Planning

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
            </div>
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
   STORY POINT
============================================================= */

function StoryPoint({ title, text }) {
  return (
    <div className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4">
      <div className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-white shadow-sm">
        <Check className="h-4 w-4 text-brand-600" />
      </div>

      <div>
        <h3 className="text-sm font-black text-slate-900">
          {title}
        </h3>

        <p className="mt-1 text-xs leading-5 text-slate-500">
          {text}
        </p>
      </div>
    </div>
  );
}