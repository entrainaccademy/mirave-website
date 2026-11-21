import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function HallsShowcase() {
  return (
    <section id="halls" aria-labelledby="halls-title" className="halls-posters">
      <div className="halls-posters-inner">
        <Reveal className="halls-posters-heading">
          <p>At Mireva</p>
          <h2 id="halls-title">Two private halls.</h2>
        </Reveal>

        <div className="halls-posters-gallery">
          <Reveal className="halls-posters-item halls-posters-hall">
            <Image
              src="/privatehall-clean.png"
              alt="Banquet hall with rows of chairs and warm lighting"
              width={1122}
              height={1402}
              sizes="(max-width: 700px) 90vw, 45vw"
            />
            <div className="halls-posters-caption">
              <h3>Banquet Hall</h3>
              <p>Our larger hall hosts meetings and celebrations for 150–200 guests.</p>
            </div>
          </Reveal>
          <Reveal delay={0.14} className="halls-posters-item halls-posters-event">
            <Image
              src="/privateevent.png"
              alt="Candlelit table arranged for a private celebration"
              width={1121}
              height={1403}
              sizes="(max-width: 700px) 90vw, 45vw"
            />
            <div className="halls-posters-caption">
              <h3>Private Events</h3>
              <p>For birthdays, private dining and smaller celebrations.</p>
            </div>
          </Reveal>
        </div>

        <Reveal className="halls-posters-footer">
          <Link href="/halls">Explore our halls <span aria-hidden="true">↗</span></Link>
        </Reveal>
      </div>
    </section>
  );
}
