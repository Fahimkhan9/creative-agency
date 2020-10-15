import React, { useEffect, useState } from "react";
import AllServiceCard from "./AllServiceCard";

function AllService() {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    fetch("https://radiant-anchorage-14394.herokuapp.com/getallorders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, [allOrders]);
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email ID</th>
            <th scope="col">Service</th>
            <th scope="col">Details</th>
          </tr>
        </thead>
      </table>

      {allOrders.map((orderdata) => (
        <AllServiceCard key={orderdata._id} orderdata={orderdata} />
      ))}
    </div>
  );
}

export default AllService;
