import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/common/ScrollToTop";
import PageLoader from "./components/common/PageLoader";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));

const Destinations = lazy(
  () => import("./pages/Destinations")
);

const DestinationDetails = lazy(
  () => import("./pages/DestinationDetails")
);

const Packages = lazy(
  () => import("./pages/Packages")
);

const PackageDetails = lazy(
  () => import("./pages/PackageDetails")
);

const About = lazy(
  () => import("./pages/About")
);

const Contact = lazy(
  () => import("./pages/Contact")
);

const NotFound = lazy(
  () => import("./pages/NotFound")
);

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      
      {/* Scroll to top on route change */}
      <ScrollToTop />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            
            {/* Home */}
            <Route
              path="/"
              element={<Home />}
            />

            {/* Destinations */}
            <Route
              path="/destinations"
              element={<Destinations />}
            />

            {/* Destination Details */}
            <Route
              path="/destinations/:id"
              element={<DestinationDetails />}
            />

            {/* Packages */}
            <Route
              path="/packages"
              element={<Packages />}
            />

            {/* Package Details */}
            <Route
              path="/packages/:id"
              element={<PackageDetails />}
            />

            {/* About */}
            <Route
              path="/about"
              element={<About />}
            />

            {/* Contact */}
            <Route
              path="/contact"
              element={<Contact />}
            />

            {/* 404 */}
            <Route
              path="*"
              element={<NotFound />}
            />

          </Routes>
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}