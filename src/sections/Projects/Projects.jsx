import { useCallback, useState } from "react";
import meta from "@/assets/image-meta.json";
import img2Avif from "@/images/FreeSolar2.avif";
import img2Webp from "@/images/FreeSolar2.webp";
import img3Avif from "@/images/FreeSolar3.avif";
import img3Webp from "@/images/FreeSolar3.webp";
import img4Avif from "@/images/FreeSolar4.avif";
import img4Webp from "@/images/FreeSolar4.webp";
import "./Projects.css";

const slidesData = [
  {
    id: "FreeSolar2",
    alt: "Велика наземна сонячна електростанція під хмарним небом",
    avif: img2Avif,
    webp: img2Webp,
  },
  {
    id: "FreeSolar3",
    alt: "Ряд сонячних панелей на відкритій ділянці",
    avif: img3Avif,
    webp: img3Webp,
  },
  {
    id: "FreeSolar4",
    alt: "Сонячні панелі на червоному даху будинку",
    avif: img4Avif,
    webp: img4Webp,
  },
];

function Projects() {
  const [index, setIndex] = useState(0);
  const count = slidesData.length;

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + count) % count);
  }, [count]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % count);
  }, [count]);

  return (
    <section className="projects" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="projects__title">
        Наші реалізовані проекти
      </h2>
      <div
        className="projects__carousel"
        role="region"
        aria-roledescription="карусель"
        aria-label="Фото сонячних електростанцій"
      >
        <div className="projects__viewport">
          <ul
            className="projects__track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slidesData.map((slide, i) => {
              const { width = 800, height = 600 } = meta[slide.id] || {};

              return (
                <li
                  key={slide.id}
                  className="projects__slide"
                  aria-hidden={i !== index}
                >
                  <picture>
                    <source type="image/avif" srcSet={slide.avif} />
                    <source type="image/webp" srcSet={slide.webp} />
                    <img
                      src={slide.webp}
                      alt={slide.alt}
                      width={width}
                      height={height}
                      loading={i === 0 ? "eager" : "lazy"}
                      decoding="async"
                    />
                  </picture>
                </li>
              );
            })}
          </ul>

          <div className="projects__controls">
            <button
              type="button"
              className="projects__nav projects__nav--prev"
              onClick={goPrev}
              aria-label="Попереднє фото"
            >
              ‹
            </button>
            <button
              type="button"
              className="projects__nav projects__nav--next"
              onClick={goNext}
              aria-label="Наступне фото"
            >
              ›
            </button>
          </div>
        </div>

        <div className="projects__dots">
          {slidesData.map((_, i) => (
            <button
              key={i}
              type="button"
              className="projects__dot"
              data-active={i === index}
              aria-current={i === index ? "true" : undefined}
              aria-label={`Слайд ${i + 1} з ${count}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
