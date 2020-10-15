import { Avatar } from "@material-ui/core";
import React from "react";
import "./FeedBackCard.css";
function FeedBackCard({ feedbackdata }) {
  return (
    <div className="card col-md-4 my-3 feed">
      <div className="card-body ">
        <div className="d-flex align-items-center">
          <div>
            {feedbackdata.img ? (
              <img src={feedbackdata.img} style={{ height: "80px" }} alt="" />
            ) : (
              <Avatar />
            )}
          </div>
          <div className="ml-3">
            <h5>{feedbackdata.name}</h5>
            <h6>{feedbackdata.position}</h6>
          </div>
        </div>
        <p className="card-text" style={{ lineHeight: "2rem" }}>
          {feedbackdata.des}
        </p>
      </div>
    </div>
  );
}

export default FeedBackCard;
