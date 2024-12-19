import React from "react";
import Wrapper from "../assets/wrappers/ErrorPage";
import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <Wrapper>
        <div className="error-page">
          <img src={img} alt="not found" />
          <h1>404</h1>
          <h3>Sorry, the page you tried cannot be found.</h3>
          <Link to="/" className="btn">
            Back Home
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div className="error-page">
        <img src={img} alt="not found" />
        <h1>500</h1>
        <h3>Sorry, something went wrong on our end.</h3>
        <Link to="/" className="btn">
          Back Home
        </Link>
      </div>
    </Wrapper>
  );
}

export default ErrorPage;
