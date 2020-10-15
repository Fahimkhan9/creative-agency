import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import ServieListCard from "./ServieListCard";

function ServiceList() {
  const [allreview, setAllreview] = useState([]);
  const [loggedinuser, setLoggedinuser] = useContext(UserContext);

  useEffect(() => {
    fetch(`https://radiant-anchorage-14394.herokuapp.com/getorders?email=${loggedinuser.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAllreview(data);
      });
  }, [allreview]);

  return (
    <div className="container p-5" style={{ backgroundColor: "#f4f7fc" }}>
      <div className="row m-3">
        {allreview.map((reviewdata) => (
          <ServieListCard reviewdata={reviewdata._id} reviewdata={reviewdata} />
        ))}
        {allreview.length === 0 && (
          <p className="text-brand text-center mx-auto display-4">
            You have no orders{" "}
          </p>
        )}
      </div>
    </div>
  );
}

export default ServiceList;
