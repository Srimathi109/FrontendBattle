import "./Bento.css";

interface Item {
  id: number;
  title: string;
  description: string;
  svg: string;
}

interface Props {
  items: Item[];
  activeIndex: number;
  onChange: (index: number) => void;
}

export default function Accordion({
  items,
  activeIndex,
  onChange,
}: Props) {
  return (
    <div className="accordion">

      {items.map((item, index) => (
        <div
          className={
            activeIndex === index
              ? "accordion-item active"
              : "accordion-item"
          }
          key={item.id}
        >
          <button
            className="accordion-header"
            onClick={() => onChange(index)}
          >
            <img
              src={item.svg}
              alt={item.title}
            />

            <span>{item.title}</span>

            <span>
              {activeIndex === index ? "−" : "+"}
            </span>
          </button>

          <div
            className="accordion-body"
          >
            <p>{item.description}</p>
          </div>
        </div>
      ))}

    </div>
  );
}