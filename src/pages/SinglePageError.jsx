import React from "react";
import { useRouteError } from "react-router-dom";

function SinglePageError() {
  const error = useRouteError();
  return (
    <div>
      <h1>SinglePageError</h1>
      <p>Your error was {error.message}</p>
    </div>
  );
}

export default SinglePageError;
