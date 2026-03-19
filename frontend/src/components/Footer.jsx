import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="at_footer pt-80 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6 mb-40">
            <div className="footer-widget">
              <Link to="/" className="footer-logo d-block mb-4">
                <img
                  src="/assets/uploads/12/logo-dark.svg"
                  alt="AutoHive"
                  className="img-fluid"
                  style={{ maxWidth: "160px" }}
                />
              </Link>
              <p className="text-muted mb-3">
                AutoHive is your trusted destination for buying and selling
                quality vehicles. Browse our extensive inventory or connect with
                certified dealers.
              </p>
              <div className="footer-social d-flex gap-2">
                <a href="#" className="social-icon">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 mb-40">
            <div className="footer-widget">
              <h5 className="widget-title mb-4">Quick Links</h5>
              <ul className="footer-links list-unstyled">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/inventory">Inventory</Link>
                </li>
                <li>
                  <Link to="/dealers">Dealers</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 mb-40">
            <div className="footer-widget">
              <h5 className="widget-title mb-4">Vehicle Types</h5>
              <ul className="footer-links list-unstyled">
                <li>
                  <Link to="/inventory">Sedans</Link>
                </li>
                <li>
                  <Link to="/inventory">SUVs</Link>
                </li>
                <li>
                  <Link to="/inventory">Coupes</Link>
                </li>
                <li>
                  <Link to="/inventory">Convertibles</Link>
                </li>
                <li>
                  <Link to="/inventory">Trucks</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 mb-40">
            <div className="footer-widget">
              <h5 className="widget-title mb-4">Contact Info</h5>
              <ul className="footer-contact list-unstyled">
                <li className="d-flex align-items-start mb-3">
                  <i className="flaticon-location me-2 mt-1"></i>
                  <span>Rock St 14, New York City, USA</span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="flaticon-phone-call me-2 mt-1"></i>
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="flaticon-email me-2 mt-1"></i>
                  <span>support@autohive.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom pt-3 mt-3 border-top">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="text-muted mb-0">
                &copy; {new Date().getFullYear()} AutoHive. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <Link to="/about" className="text-muted me-3">
                Privacy Policy
              </Link>
              <Link to="/about" className="text-muted">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
