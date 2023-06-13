import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import ServicesCard from "./ServicesCard";
import Axios from "axios";

function Services() {
  const [allservices, setAllServices] = useState([]);

  useEffect(() => {
    Axios.get("https://creative-agency-server-1c0w.onrender.com/allservcies")
      .then((res) => {
        console.log(res.data)
        
        setAllServices(res.data)})
  }, [allservices]);

  return (
    <div className="services  mb-5">
      <div className="container">
        <h2 className="text-brand text-center mb-3">
          Provide Awesome <span style={{ color: "#97ac84" }}>services</span>
        </h2>
        <div className="row">
          {allservices.length === 0 ? (
            <CircularProgress className="mx-auto" />
          ) : (
            allservices.map((servicedata) => (
              <ServicesCard key={servicedata._id} servicedata={servicedata} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Services;
