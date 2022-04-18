import React from "react";
import "./About.css";
import formal from "../../images/formal.jpg";
const About = () => {
  return (
    <div className="about-container">
      <div className="formal-image">
        <img src={formal} alt="" />
      </div>
      <div className="discription">
        <h1 className="name">Name:Md.Mahabubul Kobir</h1> <br />
        <div className="goal">
          <h3>My Goal:</h3>
          <p>
            I want to be a best web devloper who will not afried any kind of
            development related problem solving.I want to make my career in web
            devlopment sector{" "}
          </p>
          <h3>How I will work hard to achieve my goal?</h3>
          <p>
            I will compleat my present web devlopment course very seriously,then
            I will take a part in SCIC with a great markes.I will work hard to
            make my dream come true.I am practicing so hardly so that I can make
            myself better in this sector.I will preapair myself how to deal with
            different kind of coding related problems.I won't giv up untill I
            become a best web devloper.This is how I can make myself better in
            devlopment sector.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
