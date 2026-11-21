import Image from "next/image";
import Reveal from "@/components/Reveal";

const dishes = [
  {
    name: "Chocolate croissant",
    kind: "From the bakery",
    image: "/croissant.jpg",
    alt: "Chocolate poured into a freshly cut croissant",
    className: "signature-food-croissant",
  },
  {
    name: "Margherita pizza",
    kind: "For the table",
    image: "/pizzaimg.jpg",
    alt: "Margherita pizza topped with fresh basil",
    className: "signature-food-pizza",
  },
  {
    name: "Creamy pasta",
    kind: "Something savoury",
    image: "/sphegatti.jpg",
    alt: "Creamy pasta served in a white bowl",
    className: "signature-food-pasta",
  },
  {
    name: "Chocolate hazelnut tart",
    kind: "A sweet finish",
    image: "/chococlatehazelnut.jpg",
    alt: "Slice of chocolate hazelnut tart on a ceramic plate",
    className: "signature-food-tart",
  },
];

export default function SignatureFood() {
  return (
    <section id="food" aria-labelledby="food-title" className="signature-food">
      <div className="signature-food-inner">
        <div className="signature-food-heading">
          <Reveal>
            <p className="signature-food-eyebrow">From the kitchen</p>
            <h2 id="food-title">Signature food.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="signature-food-intro">
              A few favourites to stay a little longer for.
            </p>
          </Reveal>
        </div>
        <div className="signature-food-grid">
          {dishes.map((dish, index) => (
            <Reveal
              key={dish.name}
              as="article"
              delay={(index % 2) * 0.12}
              className={`signature-food-card ${dish.className}`}
            >
              <div className="signature-food-image">
                <Image
                  src={dish.image}
                  alt={dish.alt}
                  fill
                  sizes="(max-width: 700px) 90vw, (max-width: 1000px) 45vw, 48vw"
                />
              </div>
              <div className="signature-food-card-copy">
                <span className="signature-food-number">0{index + 1}</span>
                <div>
                  <p>{dish.kind}</p>
                  <h3>{dish.name}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
