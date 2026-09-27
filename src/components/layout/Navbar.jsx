
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Compass,
  Menu,
  Phone,
  X,
  ChevronRight,
} from "lucide-react";

const links = [
  { label: "Home", to: "/" },
  { label: "Destinations", to: "/destinations" },
  { label: "Packages", to: "/packages" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu whenever route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="container-page">
        <div className="flex h-16 items-center justify-between lg:h-[76px]">
          {/* Logo */}
          <Link
            to="/"
            className="group flex shrink-0 items-center gap-3"
            aria-label="SkyWay Tours & Travels Home"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-600 text-white shadow-lg shadow-brand-600/20 transition duration-300 group-hover:scale-105 group-hover:bg-brand-700 lg:h-11 lg:w-11">
              <Compass className="h-5 w-5 lg:h-6 lg:w-6" />
            </span>

            <span className="leading-none">
              <span className="block text-base font-extrabold tracking-tight text-slate-900 sm:text-lg lg:text-xl">
                Madhu
              </span>

              <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.22em] text-brand-600 sm:text-[10px]">
                Tours & Travels
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center lg:flex">
            <nav
              className="flex items-center gap-7 xl:gap-9"
              aria-label="Main navigation"
            >
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    [
                      "relative py-2 text-sm font-semibold transition-colors duration-200",
                      "after:absolute after:bottom-0 after:left-0 after:h-0.5",
                      "after:rounded-full after:bg-brand-600 after:transition-all after:duration-200",
                      isActive
                        ? "text-brand-600 after:w-full"
                        : "text-slate-600 after:w-0 hover:text-brand-600 hover:after:w-full",
                    ].join(" ")
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Call Button */}
            <a
              href="tel:+919876543210"
              className="ml-8 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-600/20 transition duration-200 hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-600/25 xl:px-5"
            >
              <Phone className="h-4 w-4" />
              <span>+91 98765 43210</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={
              open ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-brand-200 hover:bg-brand-50 hover:text-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500/30 lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-navigation"
          className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
            open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav
            className="border-t border-slate-100 py-4"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    [
                      "flex items-center justify-between rounded-xl px-4 py-3.5",
                      "text-sm font-semibold transition-all duration-200",
                      isActive
                        ? "bg-brand-50 text-brand-700"
                        : "text-slate-700 hover:bg-slate-50 hover:text-brand-600",
                    ].join(" ")
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.label}</span>

                      <ChevronRight
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isActive
                            ? "translate-x-0 text-brand-600"
                            : "-translate-x-1 text-slate-300"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}

              {/* Mobile Call CTA */}
              <a
                href="tel:+919876543210"
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-600/20 transition hover:bg-brand-700"
              >
                <Phone className="h-4 w-4" />
                Call +91 98765 43210
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
