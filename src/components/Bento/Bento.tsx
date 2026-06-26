import "./Bento.css";
import { features } from "../../data/features";
import Accordion from "./Accordian";
import useBreakpoint from "../../hooks/useBreakpoint";
import useActiveCard from "../../hooks/useActiveCard";

export default function Bento() {
  const isMobile = useBreakpoint(900);

  const { activeIndex, setActiveIndex } = useActiveCard();

  if (isMobile) {
    return (
      <section className="bento-section" id="features">
        <div className="container">
          <h2 className="section-title">
            Powerful AI Features
          </h2>

          <Accordion
            items={features}
            activeIndex={activeIndex}
            onChange={setActiveIndex}
          />
        </div>
      </section>
    );
  }

  return (
    <section className="bento-section" id="features">
      <div className="container">

        <h2 className="section-title">
          Powerful AI Features
        </h2>

        <div className="bento-grid">

          {features.map((item, index) => (
            <article
              key={item.id}
              className={
                activeIndex === index
                  ? "bento-card active"
                  : "bento-card"
              }
              onMouseEnter={() => setActiveIndex(index)}
            >
              <img
                src={item.svg}
                alt={item.title}
              />

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}