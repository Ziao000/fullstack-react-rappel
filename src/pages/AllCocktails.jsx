import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllCocktails = () => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    (async () => {
      const cocktailsResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s");
      const cocktailsData = await cocktailsResponse.json();

      setCocktails(cocktailsData.drinks);
    })();
  }, []);

  return (
    <main>
      <h1>Tous les cocktails</h1>

      <section>
        <Grid container spacing={2}>
          {cocktails.map((cocktail) => (
            <Grid item key={cocktail.idDrink} xs={12} sm={6} md={4}>
              <article>
                <h2>{cocktail.strDrink}</h2>
                <Link to={`/cocktails/${cocktail.idDrink}`}>
                  <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} style={{ width: '100%' }} />
                </Link>
              </article>
            </Grid>
          ))}
        </Grid>
      </section>
    </main>
  );    
};

export default AllCocktails;
