import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blog-container">
      <h1> 1. Difference between authorization and authentication</h1>
      <p>
        {" "}
        Authentication is the process of verifying who someone is, and
        authorization is the process of verifying what specific applications,
        files, <br /> and data a user has access to.Authentication verifies who
        the user is.Authorization determines what resources a user can access.{" "}
        <br /> Authentication works through passwords, one-time pins, biometric
        information, and other information provided or entered by the user.{" "}
        <br />
        Authorization works through settings that are maintained by the
        organization.
      </p>{" "}
      <br />
      <h1>2. Why we using firebase?</h1>
      <p>
        With Firebase, it's simple to connect and use built in third party
        authentication ,we can authenticate using Google, Facebook,Github,
        Twitter, among others. It reduces development workload and time.If we
        want to make a authentication system from scratch we don't need to pay
        as high as developing from scratch.We can start on a free plan and use
        primary features . Firebase is a good choice if we want to deploy a
        working product on the cloud rapidly.
      </p>
      <h1>
        What other services does firebase provide other than authentication?
      </h1>
      <p>
        There is more third-party authentication provider like firebase.
        <li>Parse</li>
        <li>Back4app</li>
        <li>Kinvey</li>
        <li>Backendless </li>
        <li>Kuzzle </li>
      </p>
    </div>
  );
};

export default Blogs;
