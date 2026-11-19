import Image from "next/image";

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="hero-section px-4 pb-16 pt-24 sm:px-8 sm:pt-28 lg:pb-24 lg:pt-32">
      <div className="hero-center mx-auto max-w-7xl">
        <h1 id="hero-title" className="hero-poster-title">
          <span className="hero-title-line"><span><span className="hero-word">Premium</span>{" "}<span className="hero-word">coffee</span></span></span>
          {" "}
          <span className="hero-title-line"><span><span className="hero-word">Private</span>{" "}<span className="hero-word">events</span></span></span>
        </h1>

        <div className="hero-product-art">
          <Image
            className="hero-splash-art"
            src="/hero-coffee-splash.avif"
            alt=""
            width={2048}
            height={856}
            sizes="(max-width: 640px) 640px, 1100px"
            priority
          />
          <div className="hero-cup-arrive">
            <Image
              className="hero-cup-art"
              src="/hero-iced-coffee.png"
              alt="Iced coffee with milk and coffee splashing over ice"
              width={1137}
              height={1383}
              sizes="(max-width: 640px) 280px, 470px"
              priority
            />
          </div>
        </div>

        <div className="hero-bottom">
          <a href="#menu" className="hero-main-link">
            Explore our coffee menu
            <span aria-hidden="true">↗</span>
          </a>
          <a href="#halls" className="hero-secondary-link">Explore our event halls</a>
        </div>
      </div>
    </section>
  );
}
