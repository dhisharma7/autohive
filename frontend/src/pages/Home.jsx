import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CarCard from "../components/CarCard";
import DealerCard from "../components/DealerCard";
import { brands, bodyTypes } from "../data/mockData";
import { fetchCars, fetchDealers } from "../api";

export default function Home() {
  const [cars, setCars] = useState([]);
  const [dealers, setDealers] = useState([]);

  useEffect(() => {
    fetchCars().then(setCars).catch(() => setCars([]));
    fetchDealers().then(setDealers).catch(() => setDealers([]));
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-section position-relative d-flex align-items-center"
        style={{
          backgroundImage: "url(/assets/uploads/10/banner-bg-1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "600px",
        }}
      >
        <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100" style={{ background: "rgba(0,0,0,0.5)" }}></div>
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row">
            <div className="col-lg-8">
              <h1 className="text-white display-4 fw-bold mb-3">
                Find Your Perfect Car at <span className="text-primary">AutoHive</span>
              </h1>
              <p className="text-white fs-5 mb-4 opacity-75">
                Browse thousands of quality vehicles from trusted dealers. Your dream car is just a click away.
              </p>
              <div className="hero-cta d-flex gap-3">
                <Link to="/inventory" className="btn btn-primary btn-lg px-4">
                  Browse Inventory
                </Link>
                <Link to="/dealers" className="btn btn-outline-light btn-lg px-4">
                  Find Dealers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="search-section py-4" style={{ marginTop: "-40px", position: "relative", zIndex: 3 }}>
        <div className="container">
          <div className="bg-white rounded-3 shadow p-4">
            <div className="row g-3 align-items-end">
              <div className="col-md-3">
                <label className="form-label fw-semibold small">Make</label>
                <select className="form-select">
                  <option>All Makes</option>
                  <option>Tesla</option>
                  <option>Ferrari</option>
                  <option>Lamborghini</option>
                  <option>Chevrolet</option>
                  <option>Ford</option>
                  <option>Mercedes-Benz</option>
                </select>
              </div>
              <div className="col-md-3">
                <label className="form-label fw-semibold small">Body Type</label>
                <select className="form-select">
                  <option>All Types</option>
                  {bodyTypes.map((type) => (
                    <option key={type.name}>{type.name}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-3">
                <label className="form-label fw-semibold small">Price Range</label>
                <select className="form-select">
                  <option>Any Price</option>
                  <option>Under $50,000</option>
                  <option>$50,000 - $100,000</option>
                  <option>$100,000 - $250,000</option>
                  <option>$250,000+</option>
                </select>
              </div>
              <div className="col-md-3">
                <Link to="/inventory" className="btn btn-primary w-100 py-2">
                  <i className="fa-solid fa-magnifying-glass me-2"></i>
                  Search Vehicles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body Types */}
      <section className="body-types-section pt-80 pb-60">
        <div className="container">
          <div className="text-center mb-5">
            <h6 className="text-primary text-uppercase fw-semibold mb-2">Browse by Type</h6>
            <h2 className="fw-bold">Explore Vehicle Categories</h2>
          </div>
          <div className="row g-4">
            {bodyTypes.slice(0, 8).map((type) => (
              <div className="col-6 col-md-3" key={type.name}>
                <Link to="/inventory" className="text-decoration-none">
                  <div className="body-type-card text-center p-4 rounded-3 bg-white shadow-sm h-100">
                    <img
                      src={`/assets/uploads/12/${type.icon}`}
                      alt={type.name}
                      className="mb-3"
                      style={{ height: "48px" }}
                    />
                    <h6 className="text-dark mb-0">{type.name}</h6>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="featured-cars-section pb-80" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container pt-80">
          <div className="text-center mb-5">
            <h6 className="text-primary text-uppercase fw-semibold mb-2">Featured Vehicles</h6>
            <h2 className="fw-bold">Explore Our Latest Inventory</h2>
          </div>
          <div className="row g-4">
            {cars.slice(0, 3).map((car) => (
              <div className="col-md-6 col-lg-4" key={car.id}>
                <CarCard car={car} />
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link to="/inventory" className="btn btn-primary px-4 py-2">
              View All Vehicles
            </Link>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="brands-section py-60">
        <div className="container">
          <div className="text-center mb-5">
            <h6 className="text-primary text-uppercase fw-semibold mb-2">Trusted Brands</h6>
            <h2 className="fw-bold">Shop by Popular Brands</h2>
          </div>
          <div className="row g-4 justify-content-center align-items-center">
            {brands.map((brand) => (
              <div className="col-4 col-md-2 text-center" key={brand.name}>
                <Link to="/inventory" className="text-decoration-none">
                  <div className="brand-card p-3 rounded-3 bg-white shadow-sm">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="img-fluid"
                      style={{ maxHeight: "50px" }}
                    />
                    <p className="small text-muted mt-2 mb-0">{brand.name}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us-section py-80" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <div className="text-center mb-5">
            <h6 className="text-primary text-uppercase fw-semibold mb-2">Why Choose Us</h6>
            <h2 className="fw-bold">The AutoHive Advantage</h2>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="why-card text-center p-4 bg-white rounded-3 shadow-sm h-100">
                <div className="icon-box mb-3">
                  <i className="fa-solid fa-shield-halved fs-1 text-primary"></i>
                </div>
                <h5>Verified Dealers</h5>
                <p className="text-muted mb-0">
                  Every dealer on AutoHive is verified and vetted to ensure a trustworthy buying experience.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="why-card text-center p-4 bg-white rounded-3 shadow-sm h-100">
                <div className="icon-box mb-3">
                  <i className="fa-solid fa-car fs-1 text-primary"></i>
                </div>
                <h5>Wide Selection</h5>
                <p className="text-muted mb-0">
                  From economy to exotic, find every type of vehicle across our extensive network.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="why-card text-center p-4 bg-white rounded-3 shadow-sm h-100">
                <div className="icon-box mb-3">
                  <i className="fa-solid fa-handshake fs-1 text-primary"></i>
                </div>
                <h5>Best Deals</h5>
                <p className="text-muted mb-0">
                  Competitive pricing and transparent listings so you always get the best value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dealers */}
      <section className="featured-dealers-section py-80">
        <div className="container">
          <div className="text-center mb-5">
            <h6 className="text-primary text-uppercase fw-semibold mb-2">Our Partners</h6>
            <h2 className="fw-bold">Featured Dealers</h2>
          </div>
          <div className="row g-4">
            {dealers.slice(0, 4).map((dealer) => (
              <div className="col-md-6 col-lg-3" key={dealer.id}>
                <DealerCard dealer={dealer} />
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link to="/dealers" className="btn btn-primary px-4 py-2">
              View All Dealers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
