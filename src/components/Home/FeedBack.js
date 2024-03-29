import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import FeedBackCard from "./FeedBackCard";

function FeedBack() {
  const [allreview, setAllreview] = useState([]);

  useEffect(() => {
    fetch("https://creative-agency-server-1c0w.onrender.com/getallreviews")
      .then((res) => res.json())
      .then((data) => {
        setAllreview(data);
      });
  }, [allreview]);
  return (
    <div className="feedback mb-5">
      <div className="container">
        <h2 className="text-brand text-center mb-3">
          Clients <span style={{ color: "#97ac84" }}>Feedback</span>
        </h2>

        <div className="row">
          {allreview.length === 0 ? (
            <CircularProgress className="mx-auto" />
          ) : (
            allreview.map((feedbackdata) => (
              <FeedBackCard
                key={feedbackdata._id}
                feedbackdata={feedbackdata}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default FeedBack;
