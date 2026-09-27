import { useState } from "react";

import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <>
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[68vh] overflow-hidden bg-slate-950">
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2200&q=90"
          alt="Travel road through mountains"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Image overlays */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/10" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20" />

        {/* Decorative glow */}
        <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="container-page relative z-10 flex min-h-[68vh] items-end pb-12 pt-32 sm:pb-16 lg:pb-20">
          <div className="grid w-full gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            {/* Hero content */}
            <div className="max-w-4xl">
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/15
                  bg-white/10
                  px-4
                  py-2
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.25em]
                  text-white
                  backdrop-blur-xl
                  sm:text-xs
                "
              >
                <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
                Contact SkyWay
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
                  lg:text-[82px]
                "
              >
                Let's plan something
                <span className="block text-blue-300">
                  memorable.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                Tell us where you want to go, when you want to travel and what
                matters most to you. We'll help shape the journey around you.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#trip-form"
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
                </a>

                <a
                  href="tel:+919876543210"
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
                  <Phone className="h-4 w-4" />
                  Call Our Team
                </a>
              </div>
            </div>

            {/* Floating hero card */}
            <div className="hidden w-[280px] lg:block">
              <div
                className="
                  rounded-[28px]
                  border
                  border-white/15
                  bg-black/30
                  p-6
                  text-white
                  shadow-2xl
                  backdrop-blur-xl
                "
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-950">
                  <MessageCircle className="h-5 w-5" />
                </div>

                <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                  Start a conversation
                </p>

                <h3 className="mt-2 text-2xl font-black leading-tight">
                  Your next adventure
                  <span className="block text-blue-300">
                    starts here.
                  </span>
                </h3>

                <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-5 text-xs text-white/50">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  Personalized travel planning
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT AREA
      ========================================================= */}
      <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-28">
        {/* Background decoration */}
        <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-blue-100/60 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-10 h-[450px] w-[450px] rounded-full bg-cyan-100/50 blur-3xl" />

        <div className="container-page relative z-10">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-10">
            {/* =====================================================
                CONTACT INFORMATION
            ===================================================== */}
            <aside
              className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-slate-800
                bg-slate-950
                p-7
                text-white
                shadow-2xl
                sm:p-9
              "
            >
              {/* Background glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-24
                  h-72
                  w-72
                  rounded-full
                  bg-blue-600/20
                  blur-3xl
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-24
                  -left-24
                  h-72
                  w-72
                  rounded-full
                  bg-cyan-500/10
                  blur-3xl
                "
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/10
                  "
                >
                  <MessageCircle className="h-6 w-6 text-cyan-300" />
                </div>

                {/* Heading */}
                <p className="mt-7 text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
                  Let's talk
                </p>

                <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl">
                  We're here to
                  <span className="block text-blue-300">
                    help.
                  </span>
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-300">
                  Prefer to speak with someone directly? Reach out by phone,
                  email or visit our office. Our team is happy to help with
                  your travel plans.
                </p>

                {/* Contact details */}
                <div className="mt-9 space-y-3">
                  <ContactItem
                    icon={Phone}
                    title="Phone"
                    value="+91 7013304406"
                    href="tel:+917013304406"
                  />

                  <ContactItem
                    icon={Mail}
                    title="Email"
                    value="hello@madhutravels.com"
                    href="mailto:hello@madhutravels.com"
                  />

                  <ContactItem
                    icon={MapPin}
                    title="Office"
                    value="Tirupati, Andhra Pradesh, India"
                  />

                  <ContactItem
                    icon={Clock3}
                    title="Availability"
                    value="Mon - Sat · 9:00 AM - 7:00 PM"
                  />
                </div>

                {/* Divider */}
                <div className="my-8 h-px bg-white/10" />

                {/* Help card */}
                <div
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    p-5
                  "
                >
                  <div className="flex items-start gap-3">
                    <Sparkles className="mt-0.5 h-4 w-4 flex-none text-cyan-300" />

                    <p className="text-xs leading-6 text-slate-300">
                      Share as much or as little as you know. We'll help you
                      figure out the rest.
                    </p>
                  </div>
                </div>
              </div>
            </aside>

            {/* =====================================================
                ENQUIRY FORM
            ===================================================== */}
            <div
              id="trip-form"
              className="
                rounded-[32px]
                border
                border-slate-200
                bg-white
                p-6
                shadow-[0_25px_70px_rgba(15,23,42,0.08)]
                sm:p-9
                lg:p-10
              "
            >
              {/* Form heading */}
              <div className="max-w-2xl">
                <span
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-blue-50
                    px-4
                    py-2
                    text-[10px]
                    font-black
                    uppercase
                    tracking-[0.2em]
                    text-blue-700
                  "
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  Plan Your Journey
                </span>

                <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  Tell us about your trip.
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
                  Give us a few details and our travel team can start shaping
                  your perfect holiday.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="mt-9">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Full name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                  />

                  <Field
                    label="Phone number"
                    name="phone"
                    type="tel"
                    placeholder="+91 7013304406"
                  />

                  <Field
                    label="Email address"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                  />

                  <Field
                    label="Preferred destination"
                    name="destination"
                    type="text"
                    placeholder="e.g. Tirupati"
                  />
                </div>

                {/* Trip details */}
                <div className="mt-5">
                  <label
                    className="text-sm font-bold text-slate-700"
                    htmlFor="message"
                  >
                    Trip details
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    placeholder="Tell us about your dates, travellers, budget and preferences..."
                    className="
                      mt-2
                      w-full
                      resize-none
                      rounded-2xl
                      border
                      border-slate-200
                      bg-slate-50/50
                      px-4
                      py-3.5
                      text-sm
                      leading-6
                      text-slate-800
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-slate-400
                      focus:border-blue-500
                      focus:bg-white
                      focus:ring-4
                      focus:ring-blue-50
                    "
                  />
                </div>

                {/* Success message */}
                {submitted && (
                  <div
                    className="
                      mt-5
                      flex
                      items-start
                      gap-3
                      rounded-2xl
                      border
                      border-emerald-100
                      bg-emerald-50
                      p-4
                      text-sm
                      text-emerald-700
                    "
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none" />

                    <div>
                      <p className="font-black">
                        Thanks! Your enquiry has been captured.
                      </p>

                      <p className="mt-1 text-xs leading-5 text-emerald-600">
                        This is currently a demo form. Connect it to your
                        backend or email service to receive real enquiries.
                      </p>
                    </div>
                  </div>
                )}

                {/* Submit area */}
                <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-sm text-xs leading-5 text-slate-400">
                    Share your requirements and we'll help you turn them into
                    a memorable journey.
                  </p>

                  <button
                    type="submit"
                    className="
                      group
                      inline-flex
                      w-full
                      items-center
                      justify-center
                      gap-3
                      rounded-xl
                      bg-blue-600
                      px-7
                      py-4
                      text-sm
                      font-black
                      text-white
                      shadow-xl
                      shadow-blue-600/20
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:bg-blue-700
                      hover:shadow-2xl
                      sm:w-auto
                    "
                  >
                    Send Enquiry

                    <Send
                      className="
                        h-4
                        w-4
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <div
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-slate-800
              bg-slate-950
              px-7
              py-10
              text-white
              shadow-2xl
              sm:px-10
              sm:py-14
              lg:px-14
            "
          >
            {/* Glows */}
            <div
              className="
                pointer-events-none
                absolute
                -right-32
                -top-32
                h-80
                w-80
                rounded-full
                bg-blue-600/20
                blur-3xl
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-32
                -left-32
                h-80
                w-80
                rounded-full
                bg-cyan-500/10
                blur-3xl
              "
            />

            <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
                  Your next adventure
                </p>

                <h2
                  className="
                    mt-4
                    max-w-2xl
                    text-3xl
                    font-black
                    leading-tight
                    tracking-tight
                    text-white
                    sm:text-4xl
                  "
                >
                  Not sure where to go?
                  <span className="block text-blue-300">
                    That's okay.
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">
                  Tell us what kind of experience you're looking for and we'll
                  help you discover the right destination.
                </p>
              </div>

              <a
                href="tel:+919876543210"
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
                  text-slate-950
                  shadow-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-blue-50
                "
              >
                <Phone className="h-4 w-4" />

                Talk to Our Team

                <ArrowRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* =============================================================
   CONTACT ITEM
============================================================= */

function ContactItem({ icon: Icon, title, value, href }) {
  const content = (
    <>
      <div
        className="
          flex
          h-11
          w-11
          flex-none
          items-center
          justify-center
          rounded-xl
          border
          border-white/10
          bg-white/10
          transition-all
          duration-300
          group-hover:bg-white/15
        "
      >
        <Icon className="h-4 w-4 text-cyan-300" />
      </div>

      <div className="min-w-0">
        <p className="text-[10px] font-black uppercase tracking-[0.15em] text-white/35">
          {title}
        </p>

        <p className="mt-1 break-words text-sm font-semibold text-white/80">
          {value}
        </p>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="
          group
          flex
          items-center
          gap-4
          rounded-2xl
          border
          border-transparent
          p-3
          transition-all
          duration-300
          hover:border-white/10
          hover:bg-white/5
        "
      >
        {content}
      </a>
    );
  }

  return (
    <div
      className="
        group
        flex
        items-center
        gap-4
        rounded-2xl
        border
        border-transparent
        p-3
      "
    >
      {content}
    </div>
  );
}

/* =============================================================
   FORM FIELD
============================================================= */

function Field({ label, name, type, placeholder }) {
  return (
    <div>
      <label
        className="text-sm font-bold text-slate-700"
        htmlFor={name}
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="
          mt-2
          w-full
          rounded-2xl
          border
          border-slate-200
          bg-slate-50/50
          px-4
          py-3.5
          text-sm
          text-slate-800
          outline-none
          transition-all
          duration-300
          placeholder:text-slate-400
          focus:border-blue-500
          focus:bg-white
          focus:ring-4
          focus:ring-blue-50
        "
      />
    </div>
  );
}