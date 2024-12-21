import React from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("search") | "";
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  const jamb1 = "pp";
  return { drinks: response.data.drinks, searchTerm, jamb1 };
};

function LandingPage() {
  const jambo = useLoaderData();
  const { drinks, searchTerm } = useLoaderData();
  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
}

export default LandingPage;
