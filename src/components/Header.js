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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
<header className={`site-header hero-in fixed inset-x-0 top-0 z-40 ${scrolled ? "is-scrolled" : ""}`}>
  <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
    <a href="#top" aria-label="Mireva Café home">
      <Image
        src="/logo-brown.png"
        alt="Mireva Café"
        width={1752}
        height={897}
        className="h-10 w-auto sm:h-12"
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
    <a
      href="#contact"
      className="rounded-full bg-brown px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-cream shadow-lg shadow-brown/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-espresso"
    >
      Reserve
    </a>
  </nav>
</header>  );
}
