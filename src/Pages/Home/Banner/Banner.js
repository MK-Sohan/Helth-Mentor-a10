import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../banner/doc-3 .jpg";
import banner2 from "../../../banner/yoga1.jpg";
import banner3 from "../../../banner/holding-frouit.jpg";
const Banner = () => {
  return (
    <div>
      <Carousel className="mt-2">
        <Carousel.Item>
          <img
            style={{ height: "890px" }}
            className="d-block w-100"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>
              Hi I am MK.Sohan <br /> Your Personal Helth Advisor
            </h3>
            <p>Unlock Your Potential With Good Nutrition</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "890px" }}
            className="d-block w-100 "
            src={banner2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>
              {" "}
              Hi I am MK.Sohan <br /> Your Personal Helth Advisor
            </h3>
            <p>Unlock Your Potential With Good Nutrition.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "890px" }}
            className="d-block w-100"
            src={banner3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>
              {" "}
              Hi I am MK.Sohan <br /> Your Personal Helth Advisor
            </h3>
            <p>Unlock Your Potential With Good Nutrition.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
