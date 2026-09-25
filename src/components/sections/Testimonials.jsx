
import { Quote, Star, MapPin } from "lucide-react";
import { testimonials } from "../../data/travelData";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-cyan-100/50 blur-3xl" />

      <div className="container-page relative z-10">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">
            Traveller Stories
          </span>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Memories made.
            <span className="block text-brand-600">
              Stories shared.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Hear from travellers who trusted us to turn their holiday plans
            into unforgettable experiences.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <article
              key={item.name}
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
              {/* Decorative Quote */}
              <div
                className="
                  absolute
                  -right-4
                  -top-4
                  flex
                  h-24
                  w-24
                  items-center
                  justify-center
                  rounded-full
                  bg-brand-50
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              >
                <Quote className="h-10 w-10 text-brand-200" />
              </div>

              {/* Number */}
              <div className="relative flex items-center justify-between">
                <span className="text-xs font-bold tracking-[0.2em] text-slate-300">
                  0{index + 1}
                </span>

                {/* Stars */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="relative mt-7">
                <p className="text-[15px] leading-7 text-slate-600">
                  “{item.text}”
                </p>
              </div>

              {/* Traveller */}
              <div className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-6">

                {/* Avatar */}
                <div
                  className="
                    flex
                    h-12
                    w-12
                    flex-none
                    items-center
                    justify-center
                    rounded-full
                    bg-gradient-to-br
                    from-brand-500
                    to-blue-700
                    text-sm
                    font-black
                    text-white
                    shadow-md
                  "
                >
                  {item.name
                    .split(" ")
                    .map((name) => name[0])
                    .join("")
                    .slice(0, 2)}
                </div>

                {/* Details */}
                <div className="min-w-0">
                  <p className="font-bold text-slate-900">
                    {item.name}
                  </p>

                  <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
                    <MapPin className="h-3.5 w-3.5 text-brand-600" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Verified */}
                <div className="ml-auto">
                  <span
                    className="
                      rounded-full
                      bg-emerald-50
                      px-2.5
                      py-1
                      text-[10px]
                      font-bold
                      text-emerald-600
                    "
                  >
                    Verified
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Trust Section */}
        <div className="mt-12 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className="h-5 w-5 fill-amber-400 text-amber-400"
              />
            ))}
          </div>

          <span className="hidden text-slate-300 sm:block">
            •
          </span>

          <p className="text-sm font-medium text-slate-500">
            Loved by travellers across India and beyond
          </p>
        </div>
      </div>
    </section>
  );
}
