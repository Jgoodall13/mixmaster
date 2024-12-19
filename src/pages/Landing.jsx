import React from "react";
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  return "something";
};

function LandingPage() {
  const data = useLoaderData();
  console.log(data);
  return <div>LandingPage</div>;
}

export default LandingPage;
