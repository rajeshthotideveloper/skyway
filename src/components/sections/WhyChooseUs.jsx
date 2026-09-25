
import {
  BadgeCheck,
  Headphones,
  MapPinned,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const items = [
  {
    icon: MapPinned,
    number: "01",
    title: "Local Expertise",
    copy: "Practical suggestions, realistic itineraries and trusted local experiences curated by people who understand the destination.",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Clear Pricing",
    copy: "Straightforward package inclusions and transparent pricing so you know exactly what your journey includes.",
  },
  {
    icon: Headphones,
    number: "03",
    title: "Travel Support",
    copy: "A dedicated team ready to help with questions, changes and travel assistance before and during your trip.",
  },
  {
    icon: BadgeCheck,
    number: "04",
    title: "Curated Stays",
    copy: "Hotels, experiences and activities selected with comfort, location, quality and value in mind.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-cyan-50 blur-3xl" />

      <div className="container-page relative z-10">

        {/* Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="eyebrow">
              Why SkyWay
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Travel planning
              <span className="block text-brand-600">
                that feels simple.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              From quick weekend escapes to multi-city adventures, we combine
              thoughtful planning, trusted experiences and dependable support
              to make your journey easier.
            </p>
          </div>

          {/* Trust Badge */}
          <div
            className="
              flex
              w-fit
              items-center
              gap-3
              rounded-2xl
              border
              border-slate-200
              bg-slate-50
              px-5
              py-4
              shadow-sm
            "
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 text-white">
              <BadgeCheck className="h-5 w-5" />
            </div>

            <div>
              <p className="text-sm font-bold text-slate-900">
                Travel with confidence
              </p>

              <p className="mt-0.5 text-xs text-slate-500">
                Thoughtful planning. Reliable support.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, number, title, copy }) => (
            <article
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
                hover:shadow-2xl
              "
            >
              {/* Decorative Number */}
              <span
                className="
                  absolute
                  right-5
                  top-5
                  text-5xl
                  font-black
                  tracking-tighter
                  text-slate-100
                  transition-colors
                  duration-500
                  group-hover:text-brand-50
                "
              >
                {number}
              </span>

              {/* Icon */}
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
                  duration-500
                  group-hover:bg-brand-600
                  group-hover:text-white
                  group-hover:shadow-lg
                  group-hover:shadow-brand-600/20
                "
              >
                <Icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <h3 className="mt-7 text-lg font-black text-slate-900">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {copy}
              </p>

              {/* Bottom Arrow */}
              <div
                className="
                  mt-7
                  flex
                  items-center
                  gap-2
                  text-sm
                  font-bold
                  text-brand-600
                  transition-all
                  duration-300
                  group-hover:gap-3
                "
              >
                <span>Learn more</span>

                <ArrowUpRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </div>

              {/* Bottom Accent */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-1
                  w-0
                  bg-brand-600
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />
            </article>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-12 rounded-[28px] bg-brand-900 px-6 py-8 text-white sm:px-10 lg:flex lg:items-center lg:justify-between">
          <div>
            <p className="text-xl font-black sm:text-2xl">
              Your journey starts with a better plan.
            </p>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-blue-100">
              Tell us where you want to go, and we'll help turn your travel
              ideas into a memorable experience.
            </p>
          </div>

          <div className="mt-6 lg:mt-0">
            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-white
                px-5
                py-3
                text-sm
                font-bold
                text-brand-700
                shadow-lg
              "
            >
              Plan your journey
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

