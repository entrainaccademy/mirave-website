"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Halls", href: "#halls" },
  { label: "Menu", href: "#menu" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
<header className={`site-header fixed inset-x-0 top-0 z-40 ${scrolled || menuOpen ? "is-scrolled" : ""}`}>
  <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
    <a href="#top" aria-label="Mireva Café home">
      <Image
        src="/logo-brown.png"
        alt="Mireva Café"
        width={1752}
        height={897}
        className="h-9 w-auto sm:h-12"
        priority
      />
    </a>
    <ul className="hidden items-center gap-8 text-[13px] font-medium uppercase tracking-[0.22em] text-brown md:flex">
      {navLinks.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className="group relative py-1 transition-colors hover:text-espresso"
          >
            {link.label}
            <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-caramel transition-transform duration-500 ease-out group-hover:scale-x-100" />
          </a>
        </li>
      ))}
    </ul>
    <a href="#contact" className="hidden rounded-full bg-brown px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-cream transition-colors hover:bg-espresso md:inline-flex">
      Reserve
    </a>
    <button
      type="button"
      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-brown/25 px-4 text-xs font-semibold uppercase tracking-[0.12em] text-brown md:hidden"
      aria-expanded={menuOpen}
      aria-controls="mobile-nav"
      onClick={() => setMenuOpen((open) => !open)}
    >
      <span>{menuOpen ? "Close" : "Menu"}</span>
      <span aria-hidden="true" className="text-base leading-none">{menuOpen ? "×" : "☰"}</span>
    </button>
  </nav>
  {menuOpen && (
    <div id="mobile-nav" className="border-t border-brown/10 bg-cream px-5 pb-5 pt-2 shadow-lg shadow-brown/10 md:hidden">
      <ul className="mx-auto max-w-7xl">
        {navLinks.map((link) => (
          <li key={link.href} className="border-b border-brown/10">
            <a href={link.href} onClick={() => setMenuOpen(false)} className="block py-3.5 font-display text-xl text-espresso">
              {link.label}
            </a>
          </li>
        ))}
        <li><a href="#contact" onClick={() => setMenuOpen(false)} className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-brown px-5 text-xs font-semibold uppercase tracking-[0.16em] text-cream">Reserve a space</a></li>
      </ul>
    </div>
  )}
</header>  );
}
