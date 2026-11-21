import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Private Halls & Events | Mireva Café",
  description:
    "Explore Mireva Café's banquet hall and VIP room for meetings, private dining, celebrations, and events. Enquire about a space for your gathering.",
};

export default function HallsPage() {
  return (
    <>
      <Header />
      <main id="top" className="hall2">
        <section className="hall2-hero" aria-labelledby="hall2-title">
          <div className="hall2-hero-inner">
            <div className="hall2-hero-heading">
              <p>Private halls at Mireva</p>
              <h1 id="hall2-title">Gather at <em>Mireva.</em></h1>
              <a href="#hall2-spaces">Explore the halls <span aria-hidden="true">↘</span></a>
            </div>
            <div className="hall2-hero-photo">
              <Image
                src="/privatehall-clean.png"
                alt="Mireva's banquet hall set with rows of chairs and warm lighting"
                fill
                loading="eager"
                quality={90}
                sizes="(max-width: 1122px) 100vw, 1122px"
              />
            </div>
          </div>
        </section>

        <section id="hall2-spaces" className="hall2-intro" aria-labelledby="hall2-intro-title">
          <Reveal className="hall2-intro-top">
            <p className="hall2-eyebrow">The spaces</p>
            <h2 id="hall2-intro-title">Come together,<br /><em>your way.</em></h2>
            <p>A celebration, a meeting, a long table of friends. Tell us what you have in mind and we&apos;ll help you find the right room.</p>
          </Reveal>
          <div className="hall2-intro-rule" />
        </section>

        <section className="hall2-banquet" aria-labelledby="hall2-banquet-title">
          <div className="hall2-banquet-layout">
            <Reveal className="hall2-banquet-photo">
              <Image
                src="/neweventimg.jpg"
                alt="Private event dining room with a long table, flowers, and candlelight"
                fill
                quality={90}
                sizes="(max-width: 800px) 100vw, 57vw"
              />
            </Reveal>
            <Reveal delay={0.12} className="hall2-banquet-copy">
              <p className="hall2-eyebrow">The banquet hall</p>
              <h2 id="hall2-banquet-title">For the whole<br /><em>room.</em></h2>
              <p>Bring everyone in for a milestone, engagement, presentation, or meeting. The hall can host groups of 150 to 200, with a warm setting that still feels personal.</p>
              <Link href="/#contact">Enquire about the hall <span aria-hidden="true">↗</span></Link>
            </Reveal>
          </div>
        </section>

        <section className="hall2-vip" aria-labelledby="hall2-vip-title">
          <Reveal className="hall2-vip-heading">
            <h2 id="hall2-vip-title">The table<br />is <em>yours.</em></h2>
            <p>Bring your people around one table. Talk, make plans, share food, and take your time in a room set apart from the café.</p>
            <Link href="/#contact">Enquire about the VIP room <span aria-hidden="true">↗</span></Link>
          </Reveal>
          <div className="hall2-vip-gallery">
            <Reveal className="hall2-vip-main-photo">
              <Image src="/viproom4.jpg" alt="VIP room with a large table and leather chairs" fill quality={90} sizes="(max-width: 800px) 100vw, 52vw" />
            </Reveal>
            <Reveal delay={0.12} className="hall2-vip-detail-photo">
              <Image src="/viproom2.jpg" alt="Leather lounge seating inside the VIP room" fill quality={90} sizes="(max-width: 800px) 47vw, 22vw" />
            </Reveal>
          </div>
        </section>

        <section className="hall2-enquire" aria-labelledby="hall2-enquire-title">
          <Reveal>
            <p className="hall2-eyebrow">Plan a gathering</p>
            <h2 id="hall2-enquire-title">Tell us what<br /><em>you have in mind.</em></h2>
            <p>Share your date, the occasion, and your expected guest count. We&apos;ll help you take it from there.</p>
            <Link href="/#contact">Get in touch <span aria-hidden="true">↗</span></Link>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
