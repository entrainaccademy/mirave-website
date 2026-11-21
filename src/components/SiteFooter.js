import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <Reveal className="site-footer-opening">
          <p>Where every sip tells a story of pure taste.</p>
          <span aria-hidden="true">✳</span>
        </Reveal>

        <Reveal delay={0.1} className="site-footer-panel">
          <div className="site-footer-top">
            <div className="site-footer-invite">
              <p className="site-footer-label">Until next time</p>
              <h2>See you at Mireva.</h2>
              <Link href="/halls" className="site-footer-contact-link">
                Explore our spaces <span aria-hidden="true">↗</span>
              </Link>
            </div>

            <nav className="site-footer-links" aria-label="Footer navigation">
              <div>
                <h3>Explore</h3>
                <Link href="/about">Our story</Link>
                <Link href="/menu">Menu</Link>
                <Link href="/halls">Private halls</Link>
              </div>
              <div>
                <h3>Visit</h3>
                <Link href="/#inside">Inside Mireva</Link>
                <Link href="/#reviews">Guest reviews</Link>
                <Link href="/#contact">Plan an event</Link>
              </div>
              <div>
                <h3>Gather</h3>
                <Link href="/halls">Explore the halls</Link>
                <Link href="/#contact">Plan a gathering</Link>
                <div className="site-footer-socials" aria-label="Social profiles coming soon">
                  <span role="img" aria-label="Instagram profile coming soon" title="Instagram profile coming soon">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle className="site-footer-social-dot" cx="17.5" cy="6.5" r="1" /></svg>
                  </span>
                  <span role="img" aria-label="Facebook profile coming soon" title="Facebook profile coming soon">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5H18V3.9a22 22 0 0 0-2.6-.2c-2.6 0-4.4 1.6-4.4 4.5V10H8v3h3v8" /></svg>
                  </span>
                </div>
              </div>
            </nav>
          </div>

          <div className="site-footer-showcase">
            <figure className="site-footer-map">
              <div className="site-footer-map-art" role="img" aria-label="Kerala map marking the Changaramkulam area">
                <Image src="/kerala-outline.svg" alt="" width={180} height={283} unoptimized />
                <span className="site-footer-map-pin" aria-hidden="true"><span /></span>
              </div>
              <figcaption>
                <span className="site-footer-map-kicker">India · Kerala</span>
                <strong>Changaramkulam</strong>
                <span>Malappuram · near Thrissur</span>
              </figcaption>
            </figure>

            <Link href="/" className="site-footer-logo" aria-label="Mireva Café home">
              <Image
                src="/logo-brown.png"
                alt=""
                width={1752}
                height={897}
                sizes="(max-width: 700px) 88vw, 55vw"
              />
            </Link>
          </div>

          <div className="site-footer-bottom">
            <span>© {new Date().getFullYear()} Mireva Café <span className="site-footer-map-credit">· <a href="https://commons.wikimedia.org/wiki/File:Kerala_outline_shape.svg" target="_blank" rel="noopener noreferrer">Kerala outline: Planemad, CC BY-SA 4.0</a></span></span>
            <Link href="#top">Back to top <span aria-hidden="true">↑</span></Link>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
