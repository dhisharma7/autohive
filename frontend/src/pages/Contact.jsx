import Breadcrumb from "../components/Breadcrumb";

export default function Contact() {
  return (
    <>
      <Breadcrumb
        title="Contact Us"
        items={[
          { label: "Home", link: "/" },
          { label: "Contact Us" },
        ]}
      />

      <section className="contact-section pt-80 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="contact-info">
                <h6 className="text-primary text-uppercase fw-semibold mb-2">
                  Get in Touch
                </h6>
                <h2 className="fw-bold mb-4">We&apos;d Love to Hear From You</h2>
                <p className="text-muted mb-4">
                  Have questions about a vehicle, need help with your search, or
                  want to partner with AutoHive? Reach out to us anytime.
                </p>

                <div className="contact-details">
                  <div className="d-flex align-items-start mb-4">
                    <div
                      className="icon-box bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                      style={{ width: "50px", height: "50px" }}
                    >
                      <i className="flaticon-location text-primary fs-5"></i>
                    </div>
                    <div>
                      <h6 className="fw-semibold mb-1">Our Office</h6>
                      <p className="text-muted mb-0">
                        Rock St 14, New York City, USA
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start mb-4">
                    <div
                      className="icon-box bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                      style={{ width: "50px", height: "50px" }}
                    >
                      <i className="flaticon-phone-call text-primary fs-5"></i>
                    </div>
                    <div>
                      <h6 className="fw-semibold mb-1">Call Us</h6>
                      <p className="text-muted mb-0">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start mb-4">
                    <div
                      className="icon-box bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                      style={{ width: "50px", height: "50px" }}
                    >
                      <i className="flaticon-email text-primary fs-5"></i>
                    </div>
                    <div>
                      <h6 className="fw-semibold mb-1">Email Us</h6>
                      <p className="text-muted mb-0">support@autohive.com</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start">
                    <div
                      className="icon-box bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                      style={{ width: "50px", height: "50px" }}
                    >
                      <i className="fa-solid fa-clock text-primary fs-5"></i>
                    </div>
                    <div>
                      <h6 className="fw-semibold mb-1">Working Hours</h6>
                      <p className="text-muted mb-0">
                        Mon - Sat: 9:00 AM - 7:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="contact-form bg-white rounded-3 shadow-sm p-4 p-lg-5">
                <h4 className="fw-bold mb-4">Send Us a Message</h4>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label fw-semibold small">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="John"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label fw-semibold small">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label fw-semibold small">
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label fw-semibold small">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label fw-semibold small">
                          Subject
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="How can we help?"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label fw-semibold small">
                          Message
                        </label>
                        <textarea
                          className="form-control"
                          rows="5"
                          placeholder="Write your message here..."
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-primary px-5 py-2"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
