"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";

/**
 * Fournil-style menu: category columns, ruled rows, and a photo card of
 * the drink that follows the cursor while a row is hovered.
 */
export default function Menu({ sections }) {
  const [active, setActive] = useState(null);
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const pos = useRef({ x: 0, y: 0, tx: 0, ty: 0 });
  const raf = useRef(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      pos.current.tx = e.clientX - rect.left;
      pos.current.ty = e.clientY - rect.top;
      if (!raf.current) raf.current = requestAnimationFrame(tick);
    };

    const tick = () => {
      const p = pos.current;
      // ease toward the cursor for the slightly lagging feel
      p.x += (p.tx - p.x) * 0.18;
      p.y += (p.ty - p.y) * 0.18;
      if (cardRef.current) {
        cardRef.current.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`;
      }
      const still = Math.abs(p.tx - p.x) < 0.3 && Math.abs(p.ty - p.y) < 0.3;
      raf.current = still ? 0 : requestAnimationFrame(tick);
    };

    el.addEventListener("pointermove", onMove);
    return () => {
      el.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  const allItems = sections.flatMap((s) => s.items);

  return (
    <div ref={sectionRef} className="relative">
      {/* Floating photo card */}
      <div
        ref={cardRef}
        className={`menu-photo ${active ? "is-active" : ""}`}
        aria-hidden="true"
      >
        {allItems.map((item) => (
          <Image
            key={item.name}
            src={item.image}
            alt=""
            width={840}
            height={840}
            sizes="220px"
            className={`menu-photo-img ${active === item.name ? "is-current" : ""}`}
          />
        ))}
      </div>

      <div className="grid gap-x-16 gap-y-16 lg:grid-cols-2">
        {sections.map((section, si) => (
          <Reveal key={section.title} delay={si * 0.1}>
            <h3 className="mb-3 font-display text-xl text-brown">{section.title}</h3>
            <ul className="border-t border-brown/30">
              {section.items.map((item) => (
                <li
                  key={item.name}
                  className="menu-row group border-b border-brown/15 py-5 md:py-6"
                  onPointerEnter={(e) => {
                    if (e.pointerType === "mouse") setActive(item.name);
                  }}
                  onPointerLeave={() => setActive(null)}
                >
                  <div className="flex items-start gap-4">
                    {/* Keep item photos visible on touch-sized layouts. */}
                    <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-cream-deep/60 lg:hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={840}
                        height={840}
                        sizes="64px"
                        className="h-14 w-14 object-contain drop-shadow-[0_6px_8px_rgba(43,23,16,0.3)]"
                      />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="font-display text-2xl leading-tight text-espresso transition-colors duration-300 group-hover:text-brown-soft">
                          {item.name}
                        </h3>
                        <span className="shrink-0 font-display text-xl text-brown">{item.price}</span>
                      </div>
                      {item.badge && (
                        <span className="mt-2 inline-block whitespace-nowrap rounded-full border border-brown/40 px-3 py-0.5 font-sans text-xs font-medium text-brown">
                          {item.badge}
                        </span>
                      )}
                      <p className="mt-2 max-w-md text-[15px] leading-6 text-brown-soft">
                        {item.note}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
