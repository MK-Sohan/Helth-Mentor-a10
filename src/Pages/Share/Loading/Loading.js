import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div
      style={{ marginTop: "200px" }}
      className="d-flex justify-content-center align-items-center"
    >
      <Spinner animation="border" />
    </div>
  );
};

export default Loading;
