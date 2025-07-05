import React, { useState } from "react";
import Reportform from "../Reportform/Reportform";
import { ChevronRight } from "lucide-react";
import { Plus } from "lucide-react";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <main className="container mx-auto">
      <section style={{ padding: "7.3rem 0" }}>
        <div className="mx-auto text-center">
          <div>
            <span
              className="rounded-pill py-1 px-2 "
              style={{ backgroundColor: "var(--muted)", color: "var(--text)" }}
            >
              Anonymous. Safe. Empowered.
            </span>
            <h1 className="responsive-heading mt-2 tracking-in-expand">
              &lt; ReportScam /&gt; <br />
              Where people speak up against fraud.
            </h1>
          </div>
          <div className="pt-3">
            <p className="fs-4" style={{ color: "var(--white)" }}>
              Real reports from real victims. No sign-ups. No filters.
              <br /> Just honest stories to protect others from the same scams.
            </p>
          </div>
          <div className="pt-3">
            <button
              onClick={handleOpen}
              className="btn btn-light border-1 rounded-pill border-black m-1 p-2 px-4 fw-normal"
            >
              Report a Scam <Plus  size={18} />
            </button>
            <button className="btn btn-dark border-1 rounded-pill border-white m-1 p-2 px-4 fw-normal">
              Read Real Experiences <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div
          className="modal d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content p-3">
              <div className="modal-header">
                <h5 className="modal-title text-black">Submit Your Report</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClose}
                ></button>
              </div>
              <div className="modal-body">
                <Reportform />
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Hero;
