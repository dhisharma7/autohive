import { Link } from "react-router-dom";

export default function Breadcrumb({ title, items }) {
  return (
    <section className="breadcrumb-section position-relative">
      <img
        className="breadcrumb-shape position-absolute"
        src="/assets/uploads/12/tire-print-left.png"
        alt=""
      />
      <img
        className="breadcrumb-shape-right position-absolute"
        src="/assets/uploads/12/tire-print-right.png"
        alt=""
      />
      <div className="container">
        <div className="breadcrumb-content-wrapper text-center">
          <div className="breadcrumb-inner">
            <h1 className="text-white mb-3">{title}</h1>
            <ol className="breadcrumb justify-content-center mb-0">
              {items.map((item, index) => (
                <li
                  key={index}
                  className={`breadcrumb-item ${
                    index === items.length - 1 ? "item-current" : ""
                  }`}
                >
                  {item.link ? (
                    <Link to={item.link} className="text-white">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-white">{item.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
