import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "About Mireva Café",
  description:
    "Get to know Mireva Café: thoughtfully chosen coffee, good food, welcoming café spaces, and two private halls for gatherings and celebrations.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="top" className="about-editorial">
        <section className="about-editorial-stage" aria-labelledby="about-page-title">
            <div className="about-editorial-hero">
              <h1 id="about-page-title"><span>ABOUT</span><span>US</span></h1>
              <span className="about-editorial-flower" aria-hidden="true">✳</span>
              <Image
                className="about-editorial-hero-photo"
                src="/coffeeimg2.jpg"
                alt="Espresso being poured into a glass of iced coffee"
                width={1200}
                height={1500}
                sizes="(max-width: 700px) 64vw, 24vw"
                priority
              />
              <div className="about-editorial-pattern" aria-hidden="true" />
            </div>
        </section>

        <section className="about-editorial-story" aria-labelledby="about-story-title">
          <div className="about-editorial-gallery">
            <Reveal className="about-editorial-photo-card">
              <Image
                src="/coffeeimg.jpg"
                alt="A barista pouring milk into a cup of coffee"
                fill
                sizes="(max-width: 850px) 100vw, 24vw"
              />
              <span>Made with care, every day.</span>
            </Reveal>

            <Reveal delay={0.1} className="about-editorial-story-card">
              <p className="about-editorial-kicker">✳ The Mireva story</p>
              <h2 id="about-story-title">Good coffee.<br />Good company.</h2>
              <p className="about-editorial-story-lead">
                Mireva began with a simple idea: bring something better to the table.
              </p>
              <div className="about-editorial-mini-gallery">
                <div><Image src="/croissant.jpg" alt="Freshly baked croissant" fill sizes="(max-width: 850px) 28vw, 10vw" /></div>
                <div><Image src="/cafesideimg.jpg" alt="A warmly lit café table" fill sizes="(max-width: 850px) 28vw, 10vw" /></div>
                <div><Image src="/cafeimg.jpg" alt="Guests gathered inside a café" fill sizes="(max-width: 850px) 28vw, 10vw" /></div>
              </div>
              <p className="about-editorial-story-copy">
                We look for quality products that can be difficult to find locally,
                then prepare them with care. But Mireva is about more than what is
                in your cup or on your plate. It is a place to settle in, share a
                meal, and spend time with the people who matter to you.
              </p>
              <Link href="/menu">Explore the menu <span aria-hidden="true">↗</span></Link>
            </Reveal>

            <Reveal delay={0.2} className="about-editorial-details-card">
              <div className="about-editorial-details-copy">
                <p className="about-editorial-kicker">Beyond the café</p>
                <h2>Room for<br />what matters.</h2>
                <p>
                  Our two private halls make space for meetings, celebrations,
                  and time together.
                </p>
                <Link href="/halls">Discover our halls <span aria-hidden="true">↗</span></Link>
              </div>
              <div className="about-editorial-details-photo">
                <Image
                  src="/privatehall-clean.png"
                  alt="Mireva's banquet hall arranged for an event"
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 850px) 60vw, 62vw"
                  quality={90}
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="about-reasons" aria-labelledby="about-reasons-title">
          <div className="about-reasons-inner">
            <Reveal className="about-reasons-heading">
              <h2 id="about-reasons-title">More to<br />the table.</h2>
              <p>Coffee, food, and room to spend time together. The simple things, done with care.</p>
            </Reveal>
            <div className="about-reasons-list">
              <Reveal delay={0.08} as="article" className="about-reason">
                <div>
                  <h3>Good things, carefully chosen.</h3>
                  <p>We seek out quality products that can be hard to find locally and give them the attention they deserve in our food and drinks.</p>
                </div>
              </Reveal>
              <Reveal delay={0.16} as="article" className="about-reason">
                <div>
                  <h3>Time to enjoy it.</h3>
                  <p>Drop in for a quick break or settle over a meal. There is no rush to leave the table.</p>
                </div>
              </Reveal>
              <Reveal delay={0.24} as="article" className="about-reason">
                <div>
                  <h3>Room for your people.</h3>
                  <p>Meet in the café, or bring everyone together in one of our two private halls when the occasion is bigger.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="about-faq" aria-labelledby="about-faq-title">
          <div className="about-faq-inner">
            <Reveal className="about-faq-intro">
              <h2 id="about-faq-title">Before you come by.</h2>
              <p>A few useful answers about the café and our private halls.</p>
            </Reveal>
            <div className="about-faq-list">
              <details>
                <summary>What can I find at Mireva?</summary>
                <p>Good coffee, food, a place to sit and catch up, and two private halls for larger gatherings.</p>
              </details>
              <details>
                <summary>Can I come for food?</summary>
                <p>Of course. Mireva serves food as well as drinks. <Link href="/menu">See the menu</Link> for what is currently available.</p>
              </details>
              <details>
                <summary>Do you have space for events?</summary>
                <p>Yes. We have two private halls for meetings, celebrations, and occasions such as engagements. <Link href="/halls">Explore the halls</Link>.</p>
              </details>
              <details>
                <summary>Where can I see the private halls?</summary>
                <p><Link href="/halls">Explore the halls</Link> to see the spaces. Booking contact details will be added once confirmed.</p>
              </details>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
