import { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import CarCard from "../components/CarCard";
import { cars } from "../data/mockData";

export default function Inventory() {
  const [filterMake, setFilterMake] = useState("");
  const [filterBody, setFilterBody] = useState("");
  const [sortBy, setSortBy] = useState("default");

  const makes = [...new Set(cars.map((c) => c.make))];
  const bodyTypes = [...new Set(cars.map((c) => c.bodyType))];

  let filtered = cars.filter((car) => {
    if (filterMake && car.make !== filterMake) return false;
    if (filterBody && car.bodyType !== filterBody) return false;
    return true;
  });

  if (sortBy === "price-asc") filtered.sort((a, b) => a.price - b.price);
  if (sortBy === "price-desc") filtered.sort((a, b) => b.price - a.price);
  if (sortBy === "year-desc") filtered.sort((a, b) => b.year - a.year);
  if (sortBy === "mileage-asc") filtered.sort((a, b) => a.mileage - b.mileage);

  return (
    <>
      <Breadcrumb
        title="Inventory"
        items={[
          { label: "Home", link: "/" },
          { label: "Inventory" },
        ]}
      />

      <section className="inventory-section pt-80 pb-80">
        <div className="container">
          <div className="row">
            {/* Sidebar Filters */}
            <div className="col-lg-3 mb-4">
              <div className="filter-sidebar bg-white rounded-3 shadow-sm p-4">
                <h5 className="fw-bold mb-4">
                  <i className="fa-solid fa-filter me-2"></i>Filters
                </h5>

                <div className="mb-3">
                  <label className="form-label fw-semibold small">Make</label>
                  <select
                    className="form-select"
                    value={filterMake}
                    onChange={(e) => setFilterMake(e.target.value)}
                  >
                    <option value="">All Makes</option>
                    {makes.map((make) => (
                      <option key={make} value={make}>
                        {make}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold small">
                    Body Type
                  </label>
                  <select
                    className="form-select"
                    value={filterBody}
                    onChange={(e) => setFilterBody(e.target.value)}
                  >
                    <option value="">All Types</option>
                    {bodyTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold small">
                    Sort By
                  </label>
                  <select
                    className="form-select"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="default">Default</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="year-desc">Newest First</option>
                    <option value="mileage-asc">Lowest Mileage</option>
                  </select>
                </div>

                <button
                  className="btn btn-outline-secondary w-100"
                  onClick={() => {
                    setFilterMake("");
                    setFilterBody("");
                    setSortBy("default");
                  }}
                >
                  Clear Filters
                </button>
              </div>
            </div>

            {/* Car Grid */}
            <div className="col-lg-9">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <p className="text-muted mb-0">
                  Showing{" "}
                  <strong>
                    {filtered.length} of {cars.length}
                  </strong>{" "}
                  vehicles
                </p>
              </div>
              <div className="row g-4">
                {filtered.map((car) => (
                  <div className="col-md-6 col-xl-4" key={car.id}>
                    <CarCard car={car} />
                  </div>
                ))}
                {filtered.length === 0 && (
                  <div className="col-12 text-center py-5">
                    <i className="fa-solid fa-car-burst fs-1 text-muted mb-3 d-block"></i>
                    <h5 className="text-muted">No vehicles match your filters</h5>
                    <p className="text-muted">Try adjusting your search criteria</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
