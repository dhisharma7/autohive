import { Link } from "react-router-dom";

export default function DealerCard({ dealer }) {
  return (
    <div className="dealer-card bg-white rounded-3 overflow-hidden shadow-sm h-100">
      <div className="dealer-card-image">
        <Link to={`/dealers/${dealer.slug}`}>
          <img
            src={dealer.image}
            alt={dealer.name}
            className="w-100"
            style={{ height: "200px", objectFit: "cover" }}
          />
        </Link>
      </div>
      <div className="dealer-card-body p-3">
        <div className="d-flex align-items-center mb-2">
          <img
            src={dealer.logo}
            alt=""
            style={{ width: "32px", height: "32px" }}
            className="me-2"
          />
          <h5 className="mb-0">
            <Link
              to={`/dealers/${dealer.slug}`}
              className="text-decoration-none text-dark"
            >
              {dealer.name}
            </Link>
          </h5>
        </div>
        <div className="dealer-rating mb-2">
          {[...Array(5)].map((_, i) => (
            <i
              key={i}
              className={`fa-star ${
                i < Math.floor(dealer.rating) ? "fa-solid" : "fa-regular"
              } text-warning`}
            ></i>
          ))}
          <span className="ms-2 small text-muted">({dealer.rating})</span>
        </div>
        <p className="small text-muted mb-2">
          <i className="flaticon-location me-1"></i>
          {dealer.address}
        </p>
        <p className="small text-muted mb-0">
          {dealer.totalListings} Listings Available
        </p>
      </div>
    </div>
  );
}
