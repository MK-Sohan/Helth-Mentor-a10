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
          Fight against oppression amplify assistance; countries medicine new
          approaches The Elders Global South advocate organization <br /> equal
          opportunity of vaccine international vulnerable citizens
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
