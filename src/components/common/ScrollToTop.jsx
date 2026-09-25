import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If URL contains a hash such as #packages,
    // smoothly scroll to that section.
    if (hash) {
      const element = document.querySelector(hash);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 50);

        return;
      }
    }

    // Otherwise always start the new page at the top.
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname, hash]);

  return null;
}