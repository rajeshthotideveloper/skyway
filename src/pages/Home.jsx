import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "../components/sections/Hero";
import DestinationCard from "../components/sections/DestinationCard";
import PackageCard from "../components/sections/PackageCard";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Testimonials from "../components/sections/Testimonials";
import CTA from "../components/sections/CTA";
import { destinations, packages } from "../data/travelData";

export default function Home() { return <><Hero /><section className="section-padding bg-white"><div className="container-page"><div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><span className="eyebrow">Popular destinations</span><h2 className="section-title">Where will you go next?</h2><p className="section-copy">Explore destinations that balance iconic sights, local experiences and great value.</p></div><Link to="/destinations" className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-700">View all destinations <ArrowRight className="h-4 w-4" /></Link></div><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{destinations.map((destination) => <DestinationCard key={destination.id} destination={destination} />)}</div></div></section><section className="section-padding bg-slate-50"><div className="container-page"><div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><span className="eyebrow">Holiday packages</span><h2 className="section-title">Made for real travellers</h2><p className="section-copy">Choose a ready itinerary or use it as a starting point for a custom trip.</p></div><Link to="/packages" className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-700">See all packages <ArrowRight className="h-4 w-4" /></Link></div><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{packages.slice(0, 3).map((pack) => <PackageCard key={pack.id} pack={pack} />)}</div></div></section><WhyChooseUs /><Testimonials /><CTA /></>; }
