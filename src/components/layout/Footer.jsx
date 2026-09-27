import {
  ArrowUpRight,
  Globe2,
  Mail,
  MapPin,
  Phone,
  Plane,
} from "lucide-react";
import { Link } from "react-router-dom";

const exploreLinks = [
  { label: "Destinations", to: "/destinations" },
  { label: "Holiday Packages", to: "/packages" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
];

const travelServices = [
  "Domestic Tours",
  "International Holidays",
  "Honeymoon Packages",
  "Family Vacations",
  "Corporate Travel",
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    shortLabel: "f",
  },
  {
    label: "Instagram",
    href: "#",
    shortLabel: "ig",
  },
  {
    label: "LinkedIn",
    href: "#",
    shortLabel: "in",
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-white">
      {/* Main Footer */}
      <div className="container-page py-12 sm:py-14 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="inline-flex items-center gap-3"
              aria-label="SkyWay Tours & Travels Home"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-brand-700 shadow-lg">
                <Plane className="h-5 w-5" />
              </span>

              <span className="leading-none">
                <span className="block text-lg font-extrabold tracking-tight">
                  Madhu
                </span>

                <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.22em] text-blue-200">
                  Tours & Travels
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-blue-100">
              Thoughtfully planned holidays, simple bookings and reliable
              travel support from take-off to return.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="group grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-sm font-bold text-blue-100 transition-all duration-200 hover:border-white/20 hover:bg-white/15 hover:text-white"
                >
                  <span className="transition-transform duration-200 group-hover:scale-110">
                    {social.shortLabel}
                  </span>
                </a>
              ))}

              <a
                href="#"
                aria-label="Website"
                className="group grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-blue-100 transition-all duration-200 hover:border-white/20 hover:bg-white/15 hover:text-white"
              >
                <Globe2 className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Explore
            </h3>

            <div className="mt-5 grid gap-3">
              {exploreLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="group flex items-center justify-between rounded-lg py-1 text-sm text-blue-100 transition-colors duration-200 hover:text-white"
                >
                  <span>{link.label}</span>

                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Travel Services
            </h3>

            <div className="mt-5 grid gap-3">
              {travelServices.map((service) => (
                <span
                  key={service}
                  className="text-sm text-blue-100 transition-colors duration-200 hover:text-white"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Get in Touch
            </h3>

            <div className="mt-5 grid gap-4">
              {/* Phone */}
              <a
                href="tel:+919876543210"
                className="group flex items-start gap-3 text-sm text-blue-100 transition-colors duration-200 hover:text-white"
              >
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/10 text-white">
                  <Phone className="h-4 w-4" />
                </span>

                <span className="pt-1">+91 98765 43210</span>
              </a>

              {/* Email */}
              <a
                href="mailto:hello@skywaytravels.com"
                className="group flex items-start gap-3 text-sm text-blue-100 transition-colors duration-200 hover:text-white"
              >
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/10 text-white">
                  <Mail className="h-4 w-4" />
                </span>

                <span className="break-all pt-1">
                  hello@skywaytravels.com
                </span>
              </a>

              {/* Address */}
              <div className="flex items-start gap-3 text-sm text-blue-100">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/10 text-white">
                  <MapPin className="h-4 w-4" />
                </span>

                <span className="pt-1 leading-6">
                  Tirupati,
                  <br />
                  Andhra Pradesh, India
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-5 text-center text-xs text-blue-200 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} SkyWay Tours & Travels. All rights
            reserved.
          </p>

          <p>Travel made simple. Memories made memorable.</p>
        </div>
      </div>
    </footer>
  );
}