import {
  ArrowUpRight,
  Clock3,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function DestinationCard({ destination }) {
  return (
    <Link
      to={`/destinations/${destination.id}`}
      className="
        group
        block
        w-full
        overflow-hidden
        rounded-[28px]
        border border-slate-200
        bg-white
        shadow-[0_15px_45px_rgba(15,23,42,0.08)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-slate-300
        hover:shadow-[0_25px_70px_rgba(15,23,42,0.14)]
      "
    >
      {/* =====================================================
          IMAGE
      ====================================================== */}
      <div
        className="
          relative
          h-[330px]
          overflow-hidden
          sm:h-[360px]
          md:h-[380px]
          lg:h-[400px]
        "
      >
        {/* Image */}
        <img
          src={destination.image}
          alt={destination.name}
          loading="lazy"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-110
          "
        />

        {/* Main Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-slate-950/90
            via-slate-950/20
            to-transparent
          "
        />

        {/* Hover Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-blue-950/0
            transition-all
            duration-500
            group-hover:bg-blue-950/10
          "
        />

        {/* =================================================
            TOP TAG
        ================================================== */}
        <div className="absolute left-5 top-5">
          <span
            className="
              inline-flex
              items-center
              gap-1.5
              rounded-full
              border
              border-white/20
              bg-black/25
              px-3.5
              py-2
              text-[10px]
              font-black
              uppercase
              tracking-[0.15em]
              text-white
              shadow-lg
              backdrop-blur-xl
            "
          >
            <Sparkles className="h-3 w-3 text-cyan-300" />
            {destination.tag}
          </span>
        </div>

        {/* =================================================
            ARROW
        ================================================== */}
        <div className="absolute right-5 top-5">
          <span
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-black/25
              text-white
              shadow-lg
              backdrop-blur-xl
              transition-all
              duration-300
              group-hover:rotate-0
              group-hover:bg-white
              group-hover:text-slate-950
            "
          >
            <ArrowUpRight
              className="
                h-5
                w-5
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </span>
        </div>

        {/* =================================================
            BOTTOM IMAGE CONTENT
        ================================================== */}
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          {/* Country */}
          <div>
            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/15
                bg-black/30
                px-3
                py-1.5
                text-xs
                font-semibold
                text-white
                backdrop-blur-xl
              "
            >
              <MapPin className="h-3.5 w-3.5 text-cyan-300" />
              {destination.country}
            </span>
          </div>

          {/* Destination */}
          <div className="mt-4">
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-blue-200">
              Explore
            </p>

            <h3
              className="
                mt-1
                text-3xl
                font-black
                leading-tight
                tracking-[-0.03em]
                text-white
                sm:text-4xl
              "
            >
              {destination.name}
            </h3>
          </div>
        </div>
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div className="p-5 sm:p-6">
        {/* Duration */}
        <div className="flex items-center gap-3">
          <span
            className="
              flex
              h-10
              w-10
              flex-none
              items-center
              justify-center
              rounded-xl
              bg-blue-50
              text-blue-600
            "
          >
            <Clock3 className="h-4.5 w-4.5" />
          </span>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
              Duration
            </p>

            <p className="mt-1 text-sm font-bold text-slate-700">
              {destination.duration}
            </p>
          </div>
        </div>

        {/* Description */}
        <p
          className="
            mt-5
            line-clamp-2
            min-h-[48px]
            text-sm
            leading-6
            text-slate-500
          "
        >
          {destination.description}
        </p>

        {/* Divider */}
        <div className="my-5 h-px bg-slate-100" />

        {/* Bottom */}
        <div className="flex items-end justify-between gap-4">
          {/* Price */}
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
              Packages from
            </p>

            <p className="mt-1 text-2xl font-black tracking-tight text-slate-950 sm:text-[26px]">
              {destination.price}
            </p>
          </div>

          {/* View Button */}
          <span
            className="
              inline-flex
              flex-none
              items-center
              gap-2
              rounded-xl
              bg-slate-950
              px-4
              py-3
              text-xs
              font-black
              text-white
              shadow-lg
              transition-all
              duration-300
              group-hover:-translate-y-1
              group-hover:bg-blue-600
              group-hover:shadow-blue-600/20
              sm:px-5
            "
          >
            View Details

            <ArrowUpRight
              className="
                h-3.5
                w-3.5
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </span>
        </div>
      </div>
    </Link>
  );
}