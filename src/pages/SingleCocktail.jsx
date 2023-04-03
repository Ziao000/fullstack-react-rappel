import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const SingleCocktail = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await response.json();
      setCocktail(data.drinks[0]);
    })();
  }, [id]);

  if (!cocktail) {
    return <p>Loading...</p>;
  }

  const {
    strDrink,
    strDrinkThumb,
    strInstructions,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
  } = cocktail;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "24px",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width={{ xs: "100%", sm: "50%" }}
      >
        <motion.img
          src={strDrinkThumb}
          alt={strDrink}
          style={{ width: "100%", borderRadius: "8px", marginBottom: "16px" }}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        />
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/all-cocktails"
          style={{ alignSelf: "flex-start", marginBottom: "16px" }}
        >
          Retour à la liste
        </Button>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        width={{ xs: "100%", sm: "50%" }}
        paddingLeft={{ xs: 0, sm: "24px" }}
      >
        <Typography variant="h4" component="h2" marginBottom={2}>
          {strDrink}
        </Typography>
        <Typography variant="body1" component="p" marginBottom={2}>
          {strInstructions}
        </Typography>
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <Typography variant="h6" component="h3" marginBottom={1}>
            Ingredients
          </Typography>
          <ul style={{ marginBottom: 0 }}>
            <li>{strIngredient1}</li>
            <li>{strIngredient2}</li>
            <li>{strIngredient3}</li>
            <li>{strIngredient4}</li>
            <li>{strIngredient5}</li>
          </ul>
        </Box>
      </Box>
    </motion.div>
  );
};

export default SingleCocktail;
