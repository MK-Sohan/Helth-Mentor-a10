import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import Serviceshooks from "../../../Hooks/Serviceshooks";
import "./Service.css";

import { faCheck, faCoffee } from "@fortawesome/free-solid-svg-icons";

const Service = ({ service }) => {
  const { name, image, id, description } = service;
  //   console.log(service);
  const navigate = useNavigate();
  const gotocheckout = () => {
    navigate("/checkout");
  };
  return (
    <div className="full-container">
      <div className="service-container">
        <div className="service-img">
          <img src={image} alt="" />
        </div>
        <div>
          {" "}
          <h6>{name}</h6>
        </div>
        <div className="detail">{description} </div>
        <button onClick={gotocheckout} className="checkout-button">
          <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Checkout
        </button>
      </div>
    </div>
  );
};

export default Service;
