import { Grid, Button, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    (async () => {
      const cocktailsResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s");
      const cocktailsData = await cocktailsResponse.json();

      setCocktails(cocktailsData.drinks.slice(0, 6)); // only display first 6 cocktails
    })();
  }, []);

  return (
    <main>
      <h1>Blog cocktails</h1>

      <section>
        {cocktails.length === 0 && <p>Loading...</p>}
        <Grid container spacing={2}>
          {cocktails.map((cocktail) => (
            <Grid item key={cocktail.idDrink} xs={12} sm={6} md={4}>
              <article>
                <h2>{cocktail.strDrink}</h2>
                <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} style={{ width: '100%' }} />
              </article>
            </Grid>
          ))}
        </Grid>
      </section>

      <Box display="flex" justifyContent="center" marginTop={4}>
        <Button variant="contained" component={Link} to="/all-cocktails">
          Voir tous les cocktails
        </Button>
      </Box>
    </main>
  );
};

export default Home;
