import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./ServicesCard.css";
function ServicesCard({ servicedata }) {
  const history  = useHistory()
  return (
   
      <div onClick={() => history.push("/placeorder")} className="card col-md-4 my-3  border-0 service">

        <div className="card-body text-center  ">
        {servicedata.image ? (
          <img
            src={`data:image/png;base64,${servicedata.image.img}`}
            alt=""
            style={{ height: "100px" }}
          />
        ) : (
          <img src={servicedata.img} alt="" style={{ height: "100px" }} />
        )}
        <h5 className="card-title text-decoration-none" style={{ textDecoration: "none" }}>
          {servicedata.name}
        </h5>

        <p className="card-text text-decoration-none" style={{ lineHeight: "2rem" }}>
          {servicedata.des}
        </p>
      </div>
  
   
    </div>
 
  
  );
}

export default ServicesCard;

