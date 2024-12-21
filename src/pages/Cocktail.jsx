import Wrapper from "../assets/wrappers/CocktailPage";
import { useLoaderData, Link, Navigate } from "react-router-dom";
import axios from "axios";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(`${cocktailSearchUrl}${id}`);
  return { id, data };
};

function CocktailPage() {
  const { id, data } = useLoaderData();
  const singleDrink = data.drinks[0];

  if (!data) return <Navigate to="/" />;
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;

  const validIngredents = Object.keys(singleDrink).filter((key) => {
    return key.startsWith("strIngredient") && singleDrink[key];
  });
  console.log(validIngredents);

  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn-back btn">
          Back Home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name: </span>
            {name}
          </p>
          <p>
            <span className="drink-data">category: </span>
            {category}
          </p>
          <p>
            <span className="drink-data">info: </span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass: </span>
            {glass}
          </p>
          <p>
            <span className="drink-data">instructions: </span>
            {instructions}
          </p>
          <p>
            <span className="drink-data">Ingredients: </span>
            {validIngredents.map((ingredient, index) => {
              return (
                <span key={index}>
                  {index + 1}. {singleDrink[ingredient]}
                  {index < validIngredents.length - 1 ? ", " : ""}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

export default CocktailPage;
