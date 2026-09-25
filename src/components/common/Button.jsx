import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Button({ children, to, variant = "primary", icon = true, className = "" }) {
  const styles = {
    primary: "bg-brand-600 text-white shadow-lg shadow-brand-600/20 hover:bg-brand-700 focus-visible:ring-brand-600",
    secondary: "border border-slate-200 bg-white text-slate-800 hover:border-brand-200 hover:bg-brand-50 focus-visible:ring-brand-600",
    light: "bg-white text-brand-700 hover:bg-brand-50 focus-visible:ring-white",
  };
  const content = <span className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${styles[variant]} ${className}`}>{children}{icon && <ArrowRight className="h-4 w-4" />}</span>;
  return to ? <Link to={to}>{content}</Link> : <button type="button">{content}</button>;
}
