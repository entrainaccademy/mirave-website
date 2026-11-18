"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const LOADER_TOTAL_MS = 2600;

export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.classList.add("is-loading");
    const timer = setTimeout(() => {
      setDone(true);
      document.body.classList.remove("is-loading");
    }, LOADER_TOTAL_MS);
    return () => {
      clearTimeout(timer);
      document.body.classList.remove("is-loading");
    };
  }, []);

  if (done) return null;

  return (
    <div className="loader" aria-hidden="true">
      {/* Each panel holds one half of the same bean photo, clipped at the
          crease, so the bean opens as the panels part. */}
      <div className="loader-panel loader-panel-left">
        <Image
          className="bean-half bean-half-left"
          src="/bean.png"
          alt=""
          unoptimized
          width={726}
          height={936}
          priority
        />
      </div>
      <div className="loader-panel loader-panel-right">
        <Image
          className="bean-half bean-half-right"
          src="/bean.png"
          alt=""
          unoptimized
          width={726}
          height={936}
          priority
        />
      </div>

      <div className="loader-content">
        <Image
          className="loader-logo"
          src="/logo-cream.png"
          alt=""
          width={1752}
          height={897}
          priority
        />
        <div className="loader-track">
          <div className="loader-fill" />
        </div>
        <p className="loader-tagline">Brewed to be remembered</p>
      </div>
    </div>
  );
}
