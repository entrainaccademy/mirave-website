import Image from "next/image";

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="hero-editorial">
      <div className="hero-editorial-inner">
        <div className="hero-editorial-copy">
          <h1 id="hero-title">Meet for Coffee.<br />Stay for the Moment.</h1>
          <a href="/menu" className="hero-editorial-button">View the menu <span aria-hidden="true">↗</span></a>
        </div>
        <div className="hero-editorial-gallery" aria-label="Inside the café">
          <div className="hero-editorial-main">
            <Image src="/cafe3.webp" alt="A quiet café seating nook" fill priority unoptimized sizes="(max-width: 700px) 62vw, 34vw" />
          </div>
          <div className="hero-editorial-details">
            <div><Image src="/cafe1.webp" alt="The warm café counter" fill unoptimized sizes="(max-width: 700px) 38vw, 20vw" /></div>
            <div><Image src="/cafe2.webp" alt="Coffee bar and espresso machine" fill unoptimized sizes="(max-width: 700px) 38vw, 20vw" /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
