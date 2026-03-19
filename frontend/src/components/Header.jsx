import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header-sticky header-style-one sticky_enabled">
      <div className="at_topbar d-none d-sm-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-5 col-8">
              <div className="tp-info">
                <p className="mb-0">
                  Welcome! Proof of Quality Is On the AutoHive
                </p>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7 col-4">
              <div className="tp-info-wrapper d-flex align-items-center justify-content-end">
                <span className="d-none tp-info d-xl-inline-flex align-items-center">
                  <span className="icon-wrapper me-2">
                    <i className="flaticon-location"></i>
                  </span>
                  <p className="mb-0">Rock St 14, New York City, USA</p>
                </span>
                <span className="d-none tp-info d-xl-inline-flex align-items-center">
                  <span className="icon-wrapper me-2">
                    <i className="flaticon-phone-call"></i>
                  </span>
                  <p className="mb-0">+1 (555) 123-4567</p>
                </span>
                <a
                  href="mailto:support@autohive.com"
                  className="d-none tp-info d-xl-inline-flex align-items-center"
                >
                  <span className="icon-wrapper me-2">
                    <i className="flaticon-email"></i>
                  </span>
                  <p className="mb-0">support@autohive.com</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="at_header_nav">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6 col-lg-2">
              <div className="logo-wrapper">
                <Link to="/" className="duble_logo" rel="home">
                  <img
                    className="main-logo"
                    src="/assets/images/logo/logo.svg"
                    alt="AutoHive"
                  />
                </Link>
              </div>
            </div>
            <div className="col-6 col-lg-10">
              <div className="at_header_right d-flex align-items-center justify-content-end">
                <nav className="at_nav_menu d-none d-lg-block">
                  <ul className="ms-auto">
                    <li className="menu-item">
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="menu-item">
                      <NavLink to="/inventory">Inventory</NavLink>
                    </li>
                    <li className="menu-item">
                      <NavLink to="/dealers">Dealers</NavLink>
                    </li>
                    <li className="menu-item">
                      <NavLink to="/about">About</NavLink>
                    </li>
                    <li className="menu-item">
                      <NavLink to="/contact">Contact</NavLink>
                    </li>
                  </ul>
                </nav>
                <button
                  className="mobile-menu-toggle header-toggle-btn ms-4 d-lg-none"
                  onClick={() => {
                    document
                      .querySelector(".mobile-menu")
                      ?.classList.toggle("active");
                  }}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="mobile-menu position-fixed bg-white deep-shadow">
        <button
          className="close-menu position-absolute"
          onClick={() => {
            document
              .querySelector(".mobile-menu")
              ?.classList.remove("active");
          }}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <Link
          to="/"
          className="logo-wrapper bg-secondary d-block mt-4 p-3 rounded-1 text-center"
        >
          <img
            src="/assets/images/logo/logo.svg"
            alt="AutoHive"
            className="img-fluid"
          />
        </Link>
        <nav className="mobile-menu-wrapper mt-40">
          <ul>
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
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
