"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Halls", href: "/halls" },
  { label: "Menu", href: "/menu" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
<header className="site-header is-scrolled fixed inset-x-0 top-0 z-40">
  <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
    <Link href="/" aria-label="Mireva Café home">
      <Image
        src="/logo-brown.png"
        alt="Mireva Café"
        width={1752}
        height={897}
        className="h-9 w-auto sm:h-12"
        priority
      />
    </Link>
    <ul className="hidden items-center gap-8 text-[13px] font-medium uppercase tracking-[0.22em] md:flex">
      {navLinks.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="group relative py-1 transition-opacity hover:opacity-70"
          >
            {link.label}
            <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-caramel transition-transform duration-500 ease-out group-hover:scale-x-100" />
          </Link>
        </li>
      ))}
    </ul>
    <Link href="/#contact" className="header-reserve hidden rounded-full px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.2em] transition-colors md:inline-flex">
      Reserve
    </Link>
    <button
      type="button"
      className="header-menu-button inline-flex min-h-11 items-center gap-2 rounded-full border px-4 text-xs font-semibold uppercase tracking-[0.12em] md:hidden"
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
            <Link href={link.href} onClick={() => setMenuOpen(false)} className="block py-3.5 font-display text-xl text-espresso">
              {link.label}
            </Link>
          </li>
        ))}
        <li><Link href="/#contact" onClick={() => setMenuOpen(false)} className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-brown px-5 text-xs font-semibold uppercase tracking-[0.16em] text-cream">Reserve a space</Link></li>
      </ul>
    </div>
  )}
</header>  );
}
