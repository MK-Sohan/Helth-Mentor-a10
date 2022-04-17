import React from "react";
import Serviceshooks from "../../../Hooks/Serviceshooks";
import Service from "../Service/Service";
import image from "../../../banner/Heart-beat.png";
import "./Services.css";

const Services = () => {
  const [services, setServices] = Serviceshooks();
  return (
    <div>
      <div className="why-choosing-us">
        <h1 className="text-center mt-5">Why Choosing Health Coach</h1> <br />
        <img src={image} alt="" />
        <p className="text-center ">
          We handpick the best coaches and health experts from across the
          country to make sure you get the most personalized health care you{" "}
          <br />
          deserve between those doctor visits.
        </p>
      </div>
      <div className="service-header">
        <h1 className="service-title">My All Services</h1>
        <p className="service-describe">
          Now a days lots of peoples are suffering different kind of mental
          diseases. But they don't know how to cout it off from their life.{" "}
          <br /> As a personal helth Coach I will help you how to come out from
          this type of mental issuses.
        </p>
      </div>
      <div className="main">
        <div className="services">
          {services?.map((service) => (
            <Service service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
