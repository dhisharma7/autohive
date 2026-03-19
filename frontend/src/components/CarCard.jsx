import { Link } from "react-router-dom";

export default function CarCard({ car }) {
  return (
    <div className="car-card bg-white rounded-3 overflow-hidden shadow-sm h-100">
      <div className="car-card-image position-relative">
        <Link to={`/inventory/${car.slug}`}>
          <img
            src={car.image}
            alt={car.title}
            className="w-100"
            style={{ height: "220px", objectFit: "cover" }}
          />
        </Link>
        <span className="car-badge position-absolute top-0 end-0 m-3 badge bg-primary">
          {car.year}
        </span>
      </div>
      <div className="car-card-body p-3">
        <h5 className="car-card-title mb-2">
          <Link
            to={`/inventory/${car.slug}`}
            className="text-decoration-none text-dark"
          >
            {car.title}
          </Link>
        </h5>
        <p className="car-card-price text-primary fw-bold fs-5 mb-3">
          ${car.price.toLocaleString()}
        </p>
        <div className="car-card-meta">
          <div className="row g-2">
            <div className="col-6">
              <div className="meta-item d-flex align-items-center">
                <i className="flaticon-speedometer me-2"></i>
                <span className="small text-muted">
                  {car.mileage.toLocaleString()} mi
                </span>
              </div>
            </div>
            <div className="col-6">
              <div className="meta-item d-flex align-items-center">
                <i className="fa-solid fa-gas-pump me-2"></i>
                <span className="small text-muted">{car.fuel}</span>
              </div>
            </div>
            <div className="col-6">
              <div className="meta-item d-flex align-items-center">
                <i className="fa-solid fa-gear me-2"></i>
                <span className="small text-muted">{car.transmission}</span>
              </div>
            </div>
            <div className="col-6">
              <div className="meta-item d-flex align-items-center">
                <i className="fa-solid fa-car me-2"></i>
                <span className="small text-muted">{car.bodyType}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
