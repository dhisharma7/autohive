import { useState, useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";
import DealerCard from "../components/DealerCard";
import { fetchDealers } from "../api";

export default function Dealers() {
  const [dealers, setDealers] = useState([]);

  useEffect(() => {
    fetchDealers().then(setDealers);
  }, []);

  return (
    <>
      <Breadcrumb
        title="Dealer Directory"
        items={[
          { label: "Home", link: "/" },
          { label: "Dealers" },
        ]}
      />

      <section className="dealers-section pt-80 pb-80">
        <div className="container">
          <div className="text-center mb-5">
            <h6 className="text-primary text-uppercase fw-semibold mb-2">
              Our Partners
            </h6>
            <h2 className="fw-bold">Trusted AutoHive Dealers</h2>
            <p className="text-muted">
              Browse our network of verified dealers offering quality vehicles
              and exceptional service.
            </p>
          </div>
          <div className="row g-4">
            {dealers.map((dealer) => (
              <div className="col-md-6 col-lg-3" key={dealer.id}>
                <DealerCard dealer={dealer} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
