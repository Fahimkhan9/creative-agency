import React from "react";

function ServieListCard({ reviewdata }) {
  return (
    <div className="card col-md-4 mt-2">
      <div className="card-body text-center">
        <h5 className="card-title">{reviewdata.service}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          Price:{reviewdata.price}
        </h6>
        <p className="card-text" style={{ lineHeight: "2rem" }}>
          Detail:{reviewdata.detail}
        </p>
      </div>
    </div>
  );
}

export default ServieListCard;
