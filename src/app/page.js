import Image from "next/image";
import Loader from "@/components/Loader";
import Reveal from "@/components/Reveal";
import Menu from "@/components/Menu";
import Header from "@/components/Header";


const halls = [
  {
    name: "The Meeting Hall",
    capacity: "Meetings, workshops and intimate parties",
    blurb:
      "A quiet, warmly lit space for board meetings, workshops and small celebrations. Presentation screen, fast Wi-Fi and a dedicated coffee service.",
    tags: ["Meetings", "Workshops", "Intimate parties"],
  },
  {
    name: "The Grand Hall",
    capacity: "Events and celebrations for 150 to 200 guests",
    blurb:
      "Our larger hall, made for engagements, family gatherings and company events. Flexible seating, sound system and custom catering menus.",
    tags: ["Engagements", "Events", "Celebrations"],
  },
];

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
  openingHours: "Mo-Su 07:00-22:00",
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
        {/* Hero: one giant headline, the pour video as a tall pill behind it */}
        <section
          aria-labelledby="hero-title"
          className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden bg-cream px-5 pt-28 pb-16 text-center sm:px-8"
        >
          <div className="relative w-full max-w-7xl">
            <h1
              id="hero-title"
              className="hero-in hero-in-delay-1 hero-title relative z-10 font-display uppercase"
            >
              <span className="block">Sip &amp;</span>
              <span className="block italic">Celebrate</span>
            </h1>

            <div className="hero-in hero-in-delay-2 hero-media" aria-hidden="true">
              <video
                className="h-full w-full object-cover"
                src="/hero.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              />
            </div>
          </div>

          <p className="hero-in hero-in-delay-2 relative mt-14 max-w-md text-lg leading-8 text-brown-soft sm:mt-10">
            Imported beans, poured with care. Two private halls for up to 200 guests.
          </p>
          <div className="hero-in hero-in-delay-3 relative mt-7">
            <a
              href="#halls"
              className="inline-block rounded-full bg-brown px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-espresso hover:shadow-xl hover:shadow-brown/25"
            >
              Book a hall
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" aria-labelledby="about-title" className="bg-cream-soft px-5 py-24 sm:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <h2 id="about-title" className="font-display text-4xl leading-tight text-espresso sm:text-5xl">
                A premium touch, from the first sip to the last toast.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-lg leading-8 text-brown-soft">
                We opened Mireva to bring something better to the table: imported,
                high-quality products that are hard to find locally, prepared by
                people who care about every detail. Alongside the café, our two
                private halls host meetings, events and intimate celebrations
                such as engagements, for groups of 150 to 200.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-6">
                {[
                  ["2", "Private halls"],
                  ["200", "Guest capacity"],
                  ["7", "Days a week"],
                ].map(([n, label]) => (
                  <div key={label}>
                    <p className="font-display text-4xl text-brown">{n}</p>
                    <p className="mt-1 text-sm text-brown-soft">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Halls */}
        <section id="halls" aria-labelledby="halls-title" className="bg-brown px-5 py-24 text-cream sm:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal className="mb-14 max-w-2xl">
              <h2 id="halls-title" className="font-display text-4xl leading-tight sm:text-5xl">
                Two halls, made for your moments.
              </h2>
            </Reveal>
            <div className="grid gap-8 md:grid-cols-2">
              {halls.map((hall, i) => (
                <Reveal
                  key={hall.name}
                  delay={i * 0.15}
                  className="group rounded-3xl border border-cream/15 bg-espresso/40 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-caramel/60 hover:bg-espresso/60"
                >
                  <h3 className="font-display text-3xl">{hall.name}</h3>
                  <p className="mt-2 text-cream/70">{hall.capacity}</p>
                  <p className="mt-4 leading-7 text-cream/75">{hall.blurb}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {hall.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-cream/20 px-3 py-1 text-sm text-cream/80"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="mt-8 inline-flex items-center gap-2 text-base font-medium text-cream transition-colors group-hover:text-caramel"
                  >
                    Enquire
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
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

        {/* Contact */}
        <section id="contact" aria-labelledby="contact-title" className="bg-cream-soft px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-espresso px-8 py-16 text-cream sm:px-14">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <Reveal>
                <h2 id="contact-title" className="font-display text-4xl leading-tight sm:text-5xl">
                  Plan your meeting or celebration with us.
                </h2>
                <p className="mt-6 max-w-xl leading-8 text-cream/75">
                  Tell us the date, the number of guests and the occasion. We&apos;ll
                  take care of the rest, from the coffee to the cake.
                </p>
              </Reveal>
              <Reveal delay={0.15} className="space-y-4 lg:text-right">
                <a
                  href="tel:+10000000000"
                  className="block font-display text-2xl transition-colors hover:text-caramel"
                >
                  +1 (000) 000-0000
                </a>
                <a
                  href="mailto:hello@mirevacafe.com"
                  className="block text-cream/80 transition-colors hover:text-caramel"
                >
                  hello@mirevacafe.com
                </a>
                <p className="text-cream/60">Open daily · 7:00 – 22:00</p>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-cream-soft px-5 pb-10 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-brown/15 pt-8 text-sm text-brown-soft sm:flex-row">
          <Image
            src="/logo-brown.png"
            alt="Mireva Café"
            width={1752}
            height={897}
            className="h-8 w-auto"
          />
          <p>© 2025 Mireva Café</p>
        </div>
      </footer>
    </>
  );
}
