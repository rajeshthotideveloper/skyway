import {
  ArrowUpRight,
  Check,
  Clock3,
  MapPin,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function PackageCard({ pack }) {
  return (
    <Link
      to={`/packages/${pack.id}`}
      className="block"
    >
      <article
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
          hover:border-brand-200
          hover:shadow-2xl
        "
      >
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={pack.image}
            alt={pack.title}
            loading="lazy"
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              ease-out
              group-hover:scale-110
            "
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

          {/* Featured */}
          {pack.featured && (
            <span
              className="
                absolute
                left-5
                top-5
                rounded-full
                border
                border-white/20
                bg-white/15
                px-4
                py-2
                text-xs
                font-bold
                text-white
                backdrop-blur-md
              "
            >
              ✦ Featured
            </span>
          )}

          {/* Price */}
          <div className="absolute bottom-5 left-5">
            <p className="text-xs font-medium text-white/70">
              Starting from
            </p>

            <p className="mt-1 text-2xl font-black text-white">
              {pack.price}
            </p>
          </div>

          {/* Arrow */}
          <div
            className="
              absolute
              bottom-5
              right-5
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-white
              text-slate-900
              shadow-lg
              transition-all
              duration-300
              group-hover:rotate-45
            "
          >
            <ArrowUpRight className="h-5 w-5" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3
            className="
              text-2xl
              font-black
              tracking-tight
              text-slate-900
              transition-colors
              duration-300
              group-hover:text-brand-600
            "
          >
            {pack.title}
          </h3>

          {/* Destination */}
          <div className="mt-4 flex items-start gap-2 text-sm text-slate-500">
            <MapPin className="mt-0.5 h-4 w-4 flex-none text-brand-600" />

            <span className="leading-6">
              {pack.destination}
            </span>
          </div>

          {/* Duration */}
          <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
            <Clock3 className="h-4 w-4 text-brand-600" />

            <span>
              {pack.duration}
            </span>
          </div>

          {/* Highlights */}
          <div className="mt-6 border-t border-slate-100 pt-5">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
              Package Includes
            </p>

            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {pack.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-2 text-sm text-slate-600"
                >
                  <span
                    className="
                      mt-0.5
                      flex
                      h-5
                      w-5
                      flex-none
                      items-center
                      justify-center
                      rounded-full
                      bg-brand-50
                    "
                  >
                    <Check className="h-3 w-3 text-brand-600" />
                  </span>

                  <span className="leading-5">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-6 flex items-center justify-between gap-4 border-t border-slate-100 pt-5">
            <div>
              <p className="text-xs font-medium text-slate-400">
                Per person
              </p>

              <p className="mt-1 text-xl font-black text-brand-600">
                {pack.price}
              </p>
            </div>

            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-brand-600
                px-5
                py-3
                text-sm
                font-bold
                text-white
                shadow-sm
                transition-all
                duration-300
                group-hover:bg-brand-700
                group-hover:shadow-lg
              "
            >
              View Details
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}