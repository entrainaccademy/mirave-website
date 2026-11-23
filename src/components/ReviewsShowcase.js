"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const previewReviews = [
  "We came in for coffee and stayed for the conversation.",
  "A comfortable place to catch up over coffee and lunch.",
  "The private space gave our group room to celebrate together.",
];

export default function ReviewsShowcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const touchStartX = useRef(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(media.matches);
    updateMotion();
    media.addEventListener("change", updateMotion);
    return () => media.removeEventListener("change", updateMotion);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % previewReviews.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion]);

  const goTo = (next) => setActive((next + previewReviews.length) % previewReviews.length);

  return (
    <section id="reviews" aria-labelledby="reviews-title" className="reviews-showcase">
      <Image
        className="reviews-showcase-background"
        src="/cafeimg.jpg"
        alt=""
        fill
        sizes="100vw"
      />
      <div className="reviews-showcase-inner">
        <div className="reviews-showcase-heading">
          <p className="reviews-showcase-eyebrow">Guest reviews</p>
          <h2 id="reviews-title">What guests say.</h2>
          <p className="reviews-showcase-note">A little preview of the moments shared here.</p>
        </div>

        <div
          className="reviews-showcase-carousel"
          aria-label="Review carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
          }}
          onTouchStart={(event) => { touchStartX.current = event.touches[0].clientX; }}
          onTouchEnd={(event) => {
            if (touchStartX.current === null) return;
            const distance = touchStartX.current - event.changedTouches[0].clientX;
            if (Math.abs(distance) > 45) goTo(active + (distance > 0 ? 1 : -1));
            touchStartX.current = null;
          }}
        >
          <div className="reviews-showcase-window">
            <div
              className="reviews-showcase-track"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {previewReviews.map((review, index) => (
                <article
                  className="reviews-showcase-card"
                  key={review}
                  aria-hidden={index !== active}
                >
                  <span className="reviews-showcase-quote" aria-hidden="true">“</span>
                  <blockquote>{review}</blockquote>
                  <p>Sample review</p>
                </article>
              ))}
            </div>
          </div>
          <div className="reviews-showcase-controls">
            <div className="reviews-showcase-dots" aria-label="Choose a review">
              {previewReviews.map((review, index) => (
                <button
                  key={review}
                  type="button"
                  className={active === index ? "is-active" : ""}
                  aria-label={`Show review ${index + 1}`}
                  aria-current={active === index ? "true" : undefined}
                  onClick={() => goTo(index)}
                />
              ))}
            </div>
            <div className="reviews-showcase-arrows">
              <button type="button" aria-label="Previous review" onClick={() => goTo(active - 1)}>←</button>
              <button type="button" aria-label="Next review" onClick={() => goTo(active + 1)}>→</button>
            </div>
          </div>
          {/* <p className="reviews-showcase-disclaimer">
            Sample wording for this website preview. Replace with verified guest feedback.
          </p> */}
        </div>
      </div>
    </section>
  );
}
