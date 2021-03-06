import React from "react";
import { Carousel, Item, Caption } from "react-bootstrap";
import carousel1 from "../../images/carousel-1.png";
import carousel2 from "../../images/carousel-2.png";
import carousel3 from "../../images/carousel-3.png";
import carousel4 from "../../images/carousel-4.png";
import carousel5 from "../../images/carousel-5.png";

function OurWork() {
  return (
    <div className="our-work bg-dark p-3">
      <div className="container">
        <h2 className="text-brand text-center mb-3">
          {" "}
          <span style={{ color: "#fff" }}>Here are some of</span>{" "}
          <span style={{ color: "#97ac84" }}>our Works</span>
        </h2>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 p-3"
              src={carousel1}
              alt="First slide"
              style={{ height: "350px" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 p-3"
              src={carousel2}
              alt="Third slide"
              style={{ height: "350px" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 p-3"
              src={carousel3}
              alt="Third slide"
              style={{ height: "350px" }}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default OurWork;
