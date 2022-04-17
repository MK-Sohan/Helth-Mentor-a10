import React from "react";
import Serviceshooks from "../../../Hooks/Serviceshooks";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = Serviceshooks();
  return (
    <div>
      <div className="service-header">
        <h1 className="service-title">My All Services</h1>
        <p className="service-describe">
          Now a days lots of peoples are suffering different kind of mental
          diseases. But they don't know how to cout it off from their life.{" "}
          <br /> As a personal helth trainer I will help you how to come out
          from this type of mental issuses.
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
