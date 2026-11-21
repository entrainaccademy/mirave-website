import Image from "next/image";
import Link from "next/link";
import Loader from "@/components/Loader";
import Reveal from "@/components/Reveal";
import Menu from "@/components/Menu";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SignatureFood from "@/components/SignatureFood";
import HallsShowcase from "@/components/HallsShowcase";
import ReviewsShowcase from "@/components/ReviewsShowcase";
import SiteFooter from "@/components/SiteFooter";


const menuSections = [
  {
    title: "Espresso bar",
    note: "Single origin",
    items: [
      { name: "Signature Espresso", note: "Slow roasted, pulled short. Notes of cocoa and dried fig.", price: "4.50", icon: "espresso", image: "/menu/espresso.png" },
      { name: "Mireva Latte", note: "Velvet-steamed milk over a double shot, with caramel tones.", price: "5.50", badge: "House favourite", icon: "latte", image: "/menu/latte.png" },
      { name: "Affogato", note: "Vanilla gelato drowned in a double shot, dusted with cocoa.", price: "7.00", icon: "affogato", image: "/menu/affogato.png" },
    ],
  },
  {
    title: "Iced & sweet",
    note: "Made to order",
    items: [
      { name: "Iced Latte", note: "Double shot over ice with cold milk. Smooth and refreshing.", price: "5.50", icon: "coldbrew", image: "/menu/icedlatte.png" },
      { name: "Hot Chocolate", note: "70% dark chocolate, whipped cream and chocolate shavings.", price: "5.50", icon: "hotchocolate", image: "/menu/hotchocolate.png" },
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["CafeOrCoffeeShop", "EventVenue"],
  name: "Mireva Café",
  description:
    "Premium café serving imported, high-quality coffee and food, with two private halls for meetings, events and intimate celebrations of 150 to 200 guests.",
  servesCuisine: ["Coffee", "Café"],
  maximumAttendeeCapacity: 200,
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Private event halls", value: true },
    { "@type": "LocationFeatureSpecification", name: "Meeting facilities", value: true },
    { "@type": "LocationFeatureSpecification", name: "Catering", value: true },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Loader />

      <Header />

      <main id="top" className="flex-1">
        <Hero />

        {/* About */}
        <section id="about" aria-labelledby="about-title" className="about-showcase">
          <div className="about-showcase-panel">
            <Reveal className="about-showcase-intro">
              <p className="about-showcase-eyebrow">The Mireva story</p>
              <h2 id="about-title">A café made for gathering.</h2>
              <p className="about-showcase-description">
                At Mireva, carefully chosen coffee and a warm welcome make room
                for the moments that matter. Find a quiet corner, catch up with
                friends, and take your time.
              </p>
              <Link href="/about" className="about-showcase-link">
                About Mireva <span aria-hidden="true">↗</span>
              </Link>
            </Reveal>
            <Reveal delay={0.12} className="about-showcase-visual">
              <Image
                src="/coffee-dipped-pastry.png"
                alt=""
                width={1024}
                height={1536}
                sizes="(max-width: 900px) 85vw, 45vw"
              />
            </Reveal>
            <Reveal delay={0.15} className="about-showcase-card">
              <div>
                <p className="about-showcase-card-label">More than coffee</p>
                <h3>Make room for your moments.</h3>
                <p className="about-showcase-card-copy">
                  Alongside the café, our two private halls welcome meetings,
                  events, and celebrations for groups of 150 to 200.
                </p>
              </div>
              <div className="about-showcase-stats">
                {[
                  ["2", "Private halls"],
                  ["200", "Guest capacity"],
                  ["7", "Days a week"],
                ].map(([n, label]) => (
                  <div key={label}>
                    <p>{n}</p>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Menu */}
        <section id="menu" aria-labelledby="menu-title" className="bg-cream px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-14 text-center">
              <h2 id="menu-title" className="font-display text-4xl leading-tight text-espresso sm:text-5xl">
                Signature pours
              </h2>
            </Reveal>
            <Menu sections={menuSections} />
          </div>
        </section>

        <SignatureFood />

        {/* Café atmosphere */}
        <section id="inside" aria-labelledby="inside-title" className="inside-mireva">
          <div className="inside-mireva-inner">
            <div className="inside-mireva-heading">
              <Reveal>
                <p className="inside-mireva-kicker">Inside Mireva</p>
                <h2 id="inside-title">Take a seat.<br />Take your time.</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="inside-mireva-copy">
                  A warm space for coffee, conversation, and a little time to yourself.
                </p>
              </Reveal>
            </div>
            <div className="inside-mireva-gallery">
              <Reveal className="inside-mireva-photo inside-mireva-photo-main">
                <Image
                  src="/cafeimg.jpg"
                  alt="Sunlit café seating with guests gathered around tables"
                  fill
                  sizes="(max-width: 700px) 100vw, 56vw"
                />
              </Reveal>
              <div className="inside-mireva-photo-stack">
                <Reveal delay={0.1} className="inside-mireva-photo inside-mireva-photo-corner">
                  <Image
                    src="/cafesideimg.jpg"
                    alt="A warmly lit corner table beneath a pendant light"
                    fill
                    sizes="(max-width: 700px) 50vw, 36vw"
                  />
                </Reveal>
                <Reveal delay={0.2} className="inside-mireva-photo inside-mireva-photo-counter">
                  <Image
                    src="/cafeimg2.jpg"
                    alt="Coffee counter with pastries and baristas at work"
                    fill
                    sizes="(max-width: 700px) 50vw, 36vw"
                  />
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <ReviewsShowcase />

        <HallsShowcase />

        {/* Contact */}
        <section id="contact" aria-labelledby="contact-title" className="contact-editorial">
          <div className="contact-editorial-inner">
            <Reveal className="contact-editorial-intro">
              <span className="contact-editorial-label">The next occasion</span>
              <h2 id="contact-title">Make room for <em>your moment.</em></h2>
            </Reveal>
            <div className="contact-editorial-story">
              <Reveal className="contact-editorial-photo">
                <Image
                  src="/cafe.png"
                  alt="A warm café corner with a pendant lamp and wooden table"
                  fill
                  sizes="(max-width: 720px) 100vw, 55vw"
                  quality={90}
                />
              </Reveal>
              <Reveal delay={0.13} className="contact-editorial-details">
                <p className="contact-editorial-small">At Mireva</p>
                <h3>Plan your meeting or celebration with us.</h3>
                <p>Tell us the date, the number of guests and the occasion. We&apos;ll take care of the rest, from the coffee to the cake.</p>
                <Link className="contact-editorial-action" href="/halls">
                  Explore the private halls <span aria-hidden="true">↗</span>
                </Link>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
