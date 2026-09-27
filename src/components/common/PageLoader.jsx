import { Compass } from "lucide-react";

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center bg-slate-950">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[100px]" />

      <div className="relative flex flex-col items-center">
        {/* Logo loader */}
        <div className="relative flex h-24 w-24 items-center justify-center">
          {/* Outer rotating ring */}
          <div
            className="
              absolute inset-0
              rounded-full
              border border-blue-400/20
              border-t-blue-400
              animate-spin
            "
          />

          {/* Inner rotating ring */}
          <div
            className="
              absolute inset-2
              rounded-full
              border border-cyan-300/10
              border-b-cyan-300
              animate-[spin_1.5s_linear_infinite_reverse]
            "
          />

          {/* Logo */}
          <div
            className="
              flex h-14 w-14 items-center justify-center
              rounded-2xl
              bg-gradient-to-br from-blue-600 to-cyan-400
              text-white
              shadow-[0_0_45px_rgba(37,99,235,0.35)]
            "
          >
            <Compass className="h-7 w-7" />
          </div>
        </div>

        {/* Brand */}
        <div className="mt-7 text-center">
          <h1 className="text-2xl font-black tracking-[0.18em] text-white">
            MADHU
          </h1>

          <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.3em] text-blue-300">
            Travel Beyond
          </p>
        </div>

        {/* Loading indicator */}
        <div className="mt-8 flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400 [animation-delay:200ms]" />
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300 [animation-delay:400ms]" />
        </div>

        <p className="mt-4 text-xs font-medium text-slate-500">
          Preparing your journey...
        </p>
      </div>
    </div>
  );
}