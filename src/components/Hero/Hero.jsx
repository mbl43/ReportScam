import { ChevronRight } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <main className="container mx-auto">
      <section style={{ padding: "7rem 0" }}>
        <div className="mx-auto text-center">
          <div>
            <span
              className="rounded-pill py-1 px-2"
              style={{ backgroundColor: "var(--muted)", color: "var(--text)" }}
            >
              Anonymous. Safe. Empowered.
            </span>
            <h1 className="responsive-heading">
             
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
          <div className="gap-4 d-flex justify-content-center pt-3">
            <button className="btn btn-light border-1 rounded-pill border-black  p-2 px-4 fw-normal">
              Report a Scam
            </button>
            <button className="btn btn-dark border-0 rounded-pill border-light p-2 px-4 fw-normal">
              Read Real Experiences <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
