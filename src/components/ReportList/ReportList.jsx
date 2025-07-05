import React from "react";
import {Card} from "../index";

const ReportList = () => {
  return (
    <section className="container mx-auto" id="browse">
      <div className="mb-4">
        <div>
          <h2 className="fs-5 text-center">
            Authentic scam reports shared by people just like you — to warn,
            protect, and empower others.
          </h2>
        </div>
      </div>
      <Card/>
    </section>
  );
};

export default ReportList;
