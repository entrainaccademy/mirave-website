import Image from "next/image";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Menu",
  description: "Explore Mireva Café's coffee, café drinks, pastries, and food, from signature pours to plates made for sharing.",
};

const drinks = [
  { name: "Signature Espresso", detail: "Short, rich, and full of character." },
  { name: "Mireva Latte", detail: "A smooth favourite for a slower moment." },
  { name: "Iced Latte", detail: "Coffee, milk, and ice for the warmer days." },
  { name: "Affogato", detail: "Espresso poured over vanilla gelato." },
  { name: "Hot Chocolate", detail: "A comforting cup with a chocolate finish." },
];

const food = [
  { name: "Chocolate Croissant", detail: "From the bakery." },
  { name: "Margherita Pizza", detail: "For the table." },
  { name: "Creamy Pasta", detail: "Something savoury." },
  { name: "Chocolate Hazelnut Tart", detail: "A sweet finish." },
];

export default function MenuPage() {
  return (
    <>
      <Header />
      <main id="top" className="menu-page">
        <section className="menu-page-hero" aria-labelledby="menu-page-title">
          <div className="menu-page-hero-photo">
            <Image
              src="/croissant.jpg"
              alt="Chocolate being poured into a freshly cut croissant"
              fill
              loading="eager"
              sizes="(max-width: 750px) 100vw, 48vw"
              quality={90}
            />
            <span className="menu-page-photo-note">From the bakery</span>
          </div>
          <div className="menu-page-hero-content">
            <Reveal className="menu-page-hero-heading">
              <p>At Mireva Café</p>
              <h1 id="menu-page-title">The <em>menu.</em></h1>
              <span>For the first sip, the long lunch, and everything in between.</span>
            </Reveal>
            <Reveal delay={0.12} className="menu-page-paper-stack">
              <div className="menu-page-paper-back" aria-hidden="true" />
              <div className="menu-page-paper">
                <div className="menu-page-paper-top"><span>Mireva Café</span><span>Food & drinks</span></div>
                <div className="menu-page-paper-title">A little of everything.</div>
                <div className="menu-page-paper-columns">
                  <div>
                    <h2>From the cup</h2>
                    <span>Espresso</span><span>Latte</span><span>Affogato</span>
                  </div>
                  <div>
                    <h2>From the kitchen</h2>
                    <span>Pastries</span><span>For the table</span><span>Something sweet</span>
                  </div>
                </div>
                <span className="menu-page-paper-mark" aria-hidden="true">✳</span>
              </div>
            </Reveal>
            <a className="menu-page-hero-scroll" href="#menu-page-drinks">Explore the menu <span aria-hidden="true">↓</span></a>
          </div>
        </section>

        <section id="menu-page-drinks" className="menu-page-section menu-page-drinks" aria-labelledby="menu-drinks-title">
          <div className="menu-page-section-inner">
            <Reveal className="menu-page-section-heading">
              <p>From the cup</p>
              <h2 id="menu-drinks-title">Your usual, or <em>something new.</em></h2>
            </Reveal>
            <div className="menu-page-section-body">
              <Reveal className="menu-page-feature-photo">
                <Image src="/coffeeimg2.jpg" alt="Espresso being poured over an iced milk coffee" fill sizes="(max-width: 750px) 100vw, 45vw" quality={90} />
              </Reveal>
              <Reveal delay={0.1} className="menu-page-list">
                {drinks.map((item) => (
                  <article className="menu-page-item" key={item.name}>
                    <h3>{item.name}</h3>
                    <p>{item.detail}</p>
                  </article>
                ))}
              </Reveal>
            </div>
          </div>
        </section>

        <section className="menu-page-section menu-page-food" aria-labelledby="menu-food-title">
          <div className="menu-page-section-inner">
            <Reveal className="menu-page-section-heading">
              <p>From the kitchen</p>
              <h2 id="menu-food-title">Stay for <em>one more bite.</em></h2>
            </Reveal>
            <div className="menu-page-section-body menu-page-food-body">
              <Reveal className="menu-page-list">
                {food.map((item) => (
                  <article className="menu-page-item" key={item.name}>
                    <h3>{item.name}</h3>
                    <p>{item.detail}</p>
                  </article>
                ))}
              </Reveal>
              <Reveal delay={0.1} className="menu-page-food-photos">
                <div><Image src="/pizzaimg.jpg" alt="Margherita pizza with fresh basil" fill sizes="(max-width: 750px) 50vw, 24vw" quality={90} /></div>
                <div><Image src="/chococlatehazelnut.jpg" alt="Chocolate hazelnut tart on a plate" fill sizes="(max-width: 750px) 50vw, 24vw" quality={90} /></div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
