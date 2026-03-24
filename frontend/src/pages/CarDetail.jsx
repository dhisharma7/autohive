import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import { fetchCarBySlug, fetchDealerById } from "../api";

export default function CarDetail() {
  const { slug } = useParams();
  const [car, setCar] = useState(null);
  const [dealer, setDealer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCarBySlug(slug).then(async data => {
      setCar(data);
      if (data?.dealerId) {
        await fetchDealerById(data.dealerId).then(setDealer);
      }
      setLoading(false);
    }).catch(() => setLoading(false));
  }, [slug]);

  if (loading) return <div className="container py-80 text-center"><p>Loading...</p></div>;

  if (!car) {
    return (
      <>
        <Breadcrumb
          title="Vehicle Not Found"
          items={[
            { label: "Home", link: "/" },
            { label: "Inventory", link: "/inventory" },
            { label: "Not Found" },
          ]}
        />
        <div className="container py-80 text-center">
          <i className="fa-solid fa-car-burst fs-1 text-muted mb-3 d-block"></i>
          <h3>Vehicle Not Found</h3>
          <p className="text-muted">
            The vehicle you are looking for does not exist.
          </p>
          <Link to="/inventory" className="btn btn-primary">
            Browse Inventory
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Breadcrumb
        title={car.title}
        items={[
          { label: "Home", link: "/" },
          { label: "Inventory", link: "/inventory" },
          { label: car.title },
        ]}
      />

      <section className="car-detail-section pt-80 pb-80">
        <div className="container">
          <div className="row">
            {/* Main Content */}
            <div className="col-lg-8">
              {/* Gallery */}
              <div className="car-gallery mb-4">
                <img
                  src={car.gallery[0]}
                  alt={car.title}
                  className="w-100 rounded-3"
                  style={{ maxHeight: "500px", objectFit: "cover" }}
                />
                <div className="row g-2 mt-2">
                  {car.gallery.slice(1).map((img, index) => (
                    <div className="col-4" key={index}>
                      <img
                        src={img}
                        alt={`${car.title} view ${index + 2}`}
                        className="w-100 rounded-2"
                        style={{ height: "120px", objectFit: "cover" }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Title & Price */}
              <div className="car-header mb-4">
                <div className="d-flex justify-content-between align-items-start flex-wrap">
                  <div>
                    <h2 className="fw-bold mb-1">{car.title}</h2>
                    <p className="text-muted mb-0">
                      {car.year} &bull; {car.mileage.toLocaleString()} mi &bull;{" "}
                      {car.fuel}
                    </p>
                  </div>
                  <h3 className="text-primary fw-bold">
                    ${car.price.toLocaleString()}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <div className="car-description bg-white rounded-3 shadow-sm p-4 mb-4">
                <h5 className="fw-bold mb-3">Description</h5>
                <p className="text-muted">{car.description}</p>
              </div>

              {/* Specifications */}
              <div className="car-specs bg-white rounded-3 shadow-sm p-4 mb-4">
                <h5 className="fw-bold mb-3">Specifications</h5>
                <div className="row g-3">
                  <div className="col-6 col-md-4">
                    <div className="spec-item p-3 bg-light rounded-2">
                      <small className="text-muted d-block">Make</small>
                      <strong>{car.make}</strong>
                    </div>
                  </div>
                  <div className="col-6 col-md-4">
                    <div className="spec-item p-3 bg-light rounded-2">
                      <small className="text-muted d-block">Model</small>
                      <strong>{car.model}</strong>
                    </div>
                  </div>
                  <div className="col-6 col-md-4">
                    <div className="spec-item p-3 bg-light rounded-2">
                      <small className="text-muted d-block">Year</small>
                      <strong>{car.year}</strong>
                    </div>
                  </div>
                  <div className="col-6 col-md-4">
                    <div className="spec-item p-3 bg-light rounded-2">
                      <small className="text-muted d-block">Mileage</small>
                      <strong>{car.mileage.toLocaleString()} mi</strong>
                    </div>
                  </div>
                  <div className="col-6 col-md-4">
                    <div className="spec-item p-3 bg-light rounded-2">
                      <small className="text-muted d-block">Transmission</small>
                      <strong>{car.transmission}</strong>
                    </div>
                  </div>
                  <div className="col-6 col-md-4">
                    <div className="spec-item p-3 bg-light rounded-2">
                      <small className="text-muted d-block">Fuel Type</small>
                      <strong>{car.fuel}</strong>
                    </div>
                  </div>
                  <div className="col-6 col-md-4">
                    <div className="spec-item p-3 bg-light rounded-2">
                      <small className="text-muted d-block">Body Type</small>
                      <strong>{car.bodyType}</strong>
                    </div>
                  </div>
                  <div className="col-6 col-md-4">
                    <div className="spec-item p-3 bg-light rounded-2">
                      <small className="text-muted d-block">Engine</small>
                      <strong>{car.engine}</strong>
                    </div>
                  </div>
                  <div className="col-6 col-md-4">
                    <div className="spec-item p-3 bg-light rounded-2">
                      <small className="text-muted d-block">Horsepower</small>
                      <strong>{car.horsepower} HP</strong>
                    </div>
                  </div>
                  <div className="col-6 col-md-4">
                    <div className="spec-item p-3 bg-light rounded-2">
                      <small className="text-muted d-block">Color</small>
                      <strong>{car.color}</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="car-features bg-white rounded-3 shadow-sm p-4 mb-4">
                <h5 className="fw-bold mb-3">Features</h5>
                <div className="row g-2">
                  {car.features.map((feature, index) => (
                    <div className="col-6 col-md-4" key={index}>
                      <div className="feature-item d-flex align-items-center">
                        <i className="fa-solid fa-circle-check text-primary me-2"></i>
                        <span>{feature}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              {/* Dealer Info */}
              {dealer && (
                <div className="dealer-sidebar bg-white rounded-3 shadow-sm p-4 mb-4">
                  <h5 className="fw-bold mb-3">Dealer Information</h5>
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src={dealer.logo}
                      alt=""
                      style={{ width: "40px", height: "40px" }}
                      className="me-2"
                    />
                    <div>
                      <h6 className="mb-0">
                        <Link
                          to={`/dealers/${dealer.slug}`}
                          className="text-decoration-none"
                        >
                          {dealer.name}
                        </Link>
                      </h6>
                      <div>
                        {[...Array(5)].map((_, i) => (
                          <i
                            key={i}
                            className={`fa-star small ${
                              i < Math.floor(dealer.rating)
                                ? "fa-solid"
                                : "fa-regular"
                            } text-warning`}
                          ></i>
                        ))}
                      </div>
                    </div>
                  </div>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="flaticon-phone-call me-2 text-primary"></i>
                      {dealer.phone}
                    </li>
                    <li className="mb-2">
                      <i className="flaticon-email me-2 text-primary"></i>
                      {dealer.email}
                    </li>
                    <li>
                      <i className="flaticon-location me-2 text-primary"></i>
                      {dealer.address}
                    </li>
                  </ul>
                  <Link
                    to={`/dealers/${dealer.slug}`}
                    className="btn btn-primary w-100 mt-3"
                  >
                    View Dealer Profile
                  </Link>
                </div>
              )}

              {/* Contact Form Placeholder */}
              <div className="contact-form-sidebar bg-white rounded-3 shadow-sm p-4">
                <h5 className="fw-bold mb-3">Inquire About This Vehicle</h5>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Your Phone"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Your Message"
                      defaultValue={`I'm interested in the ${car.title}. Please provide more details.`}
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
