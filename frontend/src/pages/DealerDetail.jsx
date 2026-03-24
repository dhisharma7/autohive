import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import CarCard from "../components/CarCard";
import { fetchDealerBySlug, fetchCarsByDealer } from "../api";

export default function DealerDetail() {
  const { slug } = useParams();
  const [dealer, setDealer] = useState(null);
  const [dealerCars, setDealerCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDealerBySlug(slug).then(data => {
      setDealer(data);
      if (data?.id) {
        fetchCarsByDealer(data.id).then(setDealerCars);
      }
      setLoading(false);
    });
  }, [slug]);

  if (loading) return <div className="container py-80 text-center"><p>Loading...</p></div>;

  if (!dealer) {
    return (
      <>
        <Breadcrumb
          title="Dealer Not Found"
          items={[
            { label: "Home", link: "/" },
            { label: "Dealers", link: "/dealers" },
            { label: "Not Found" },
          ]}
        />
        <div className="container py-80 text-center">
          <i className="fa-solid fa-building fs-1 text-muted mb-3 d-block"></i>
          <h3>Dealer Not Found</h3>
          <p className="text-muted">
            The dealer you are looking for does not exist.
          </p>
          <Link to="/dealers" className="btn btn-primary">
            Browse Dealers
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Breadcrumb
        title={dealer.name}
        items={[
          { label: "Home", link: "/" },
          { label: "Dealers", link: "/dealers" },
          { label: dealer.name },
        ]}
      />

      <section className="dealer-detail-section pt-80 pb-80">
        <div className="container">
          <div className="row">
            {/* Main Content */}
            <div className="col-lg-8">
              {/* Dealer Header */}
              <div className="dealer-header bg-white rounded-3 shadow-sm overflow-hidden mb-4">
                <img
                  src={dealer.image}
                  alt={dealer.name}
                  className="w-100"
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src={dealer.logo}
                      alt=""
                      style={{ width: "50px", height: "50px" }}
                      className="me-3"
                    />
                    <div>
                      <h2 className="fw-bold mb-1">{dealer.name}</h2>
                      <div>
                        {[...Array(5)].map((_, i) => (
                          <i
                            key={i}
                            className={`fa-star ${
                              i < Math.floor(dealer.rating)
                                ? "fa-solid"
                                : "fa-regular"
                            } text-warning`}
                          ></i>
                        ))}
                        <span className="ms-2 text-muted">
                          ({dealer.rating})
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted">{dealer.description}</p>
                </div>
              </div>

              {/* Dealer Inventory */}
              <div className="dealer-inventory mb-4">
                <h4 className="fw-bold mb-4">
                  Vehicles by {dealer.name} ({dealerCars.length})
                </h4>
                <div className="row g-4">
                  {dealerCars.map((car) => (
                    <div className="col-md-6" key={car.id}>
                      <CarCard car={car} />
                    </div>
                  ))}
                  {dealerCars.length === 0 && (
                    <div className="col-12 text-center py-4">
                      <p className="text-muted">
                        No vehicles currently listed by this dealer.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="dealer-info-sidebar bg-white rounded-3 shadow-sm p-4 mb-4">
                <h5 className="fw-bold mb-3">Contact Information</h5>
                <ul className="list-unstyled mb-0">
                  <li className="mb-3 d-flex align-items-start">
                    <i className="flaticon-location me-2 mt-1 text-primary"></i>
                    <span>{dealer.address}</span>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <i className="flaticon-phone-call me-2 mt-1 text-primary"></i>
                    <span>{dealer.phone}</span>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <i className="flaticon-email me-2 mt-1 text-primary"></i>
                    <span>{dealer.email}</span>
                  </li>
                  <li className="d-flex align-items-start">
                    <i className="fa-solid fa-clock me-2 mt-1 text-primary"></i>
                    <span>{dealer.openHours}</span>
                  </li>
                </ul>
              </div>

              <div className="dealer-contact-form bg-white rounded-3 shadow-sm p-4">
                <h5 className="fw-bold mb-3">Send a Message</h5>
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
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Send Message
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
