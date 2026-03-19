import Breadcrumb from "../components/Breadcrumb";

export default function About() {
  return (
    <>
      <Breadcrumb
        title="About Us"
        items={[
          { label: "Home", link: "/" },
          { label: "About Us" },
        ]}
      />

      <section className="about-section pt-80 pb-80">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src="/assets/uploads/12/about-bg-1.jpg"
                alt="About AutoHive"
                className="w-100 rounded-3 shadow"
              />
            </div>
            <div className="col-lg-6">
              <h6 className="text-primary text-uppercase fw-semibold mb-2">
                About AutoHive
              </h6>
              <h2 className="fw-bold mb-4">
                Your Trusted Partner in Finding the Perfect Vehicle
              </h2>
              <p className="text-muted mb-3">
                AutoHive is a premier automotive marketplace connecting buyers
                with trusted dealers across the country. We believe that finding
                your dream car should be simple, transparent, and enjoyable.
              </p>
              <p className="text-muted mb-4">
                With an extensive network of verified dealers and a wide
                selection of vehicles ranging from everyday commuters to exotic
                supercars, AutoHive makes it easy to browse, compare, and
                connect with sellers who share our commitment to quality and
                customer satisfaction.
              </p>
              <div className="row g-3">
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <i className="fa-solid fa-circle-check text-primary fs-4 me-2"></i>
                    <span className="fw-semibold">Verified Dealers</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <i className="fa-solid fa-circle-check text-primary fs-4 me-2"></i>
                    <span className="fw-semibold">Quality Vehicles</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <i className="fa-solid fa-circle-check text-primary fs-4 me-2"></i>
                    <span className="fw-semibold">Best Prices</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <i className="fa-solid fa-circle-check text-primary fs-4 me-2"></i>
                    <span className="fw-semibold">24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="row g-4 pt-40">
            <div className="col-6 col-md-3">
              <div className="stat-card text-center p-4 bg-white rounded-3 shadow-sm">
                <h2 className="text-primary fw-bold mb-1">500+</h2>
                <p className="text-muted mb-0">Vehicles Listed</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-card text-center p-4 bg-white rounded-3 shadow-sm">
                <h2 className="text-primary fw-bold mb-1">50+</h2>
                <p className="text-muted mb-0">Trusted Dealers</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-card text-center p-4 bg-white rounded-3 shadow-sm">
                <h2 className="text-primary fw-bold mb-1">10K+</h2>
                <p className="text-muted mb-0">Happy Customers</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-card text-center p-4 bg-white rounded-3 shadow-sm">
                <h2 className="text-primary fw-bold mb-1">15+</h2>
                <p className="text-muted mb-0">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
