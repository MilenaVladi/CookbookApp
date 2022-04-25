import "./App.css";
import InputRecipe from "./InputRecipe";
import { Grid } from "@mui/material";
import DisplayRecipe from "./DisplayRecipe";
import React, { useState } from "react";

// Rezepte
const initialRecipes = [
  {
    text: `   
  What you need: 

  1. cayenne pepper
  2. onion powder
  3. garlic powder
  4. smoked paprika
  5. kosher salt.

  What you do: 

  1. combine the ingredients for the homemade rub
  2. brush the salmon with butter
  3. sprinkle with the rub 
  4. bake
  5. brush with maple syrup
  6. broil`,
    title: "Spicy maple glazed salmon 🍲",
  },
  {
    text: `
  What you need: 

1/2 cup Honey
1/4 cup Soy Sauce
3 cloves Garlic minced
1 small Lemon Juice from lemon
1 pound Large Shrimp peeled and deveined
2 Tablespoons Butter
Green Onions for garnish

What you do: 

1. In a small bowl whisk honey, soy sauce, garlic and lemon. Add half of the sauce to the shrimp and let marinate for 30 minutes.

2. In a medium sized skillet add the butter. Add the shrimp and save marinade. Season with salt and pepper.

3. Turn the heat to medium high. Cook until the shrimp turns pink about 2 minutes each side.

4. Add the reserved marinade and pour over shrimp. Cook until the sauce starts to thicken and coats the shrimp. Garnish with green onions.`,
    title: "Sticky honey garlic butter shrimp🍤",
  },
];
export default function App() {
  const [recipes, setRecipes] = useState(initialRecipes);

  const addRecipe = (title, text) => {
    const clonedCurrentState = [...recipes];
    clonedCurrentState.push({ text, title });
    setRecipes(clonedCurrentState);
  };

  const deleteRecipe = (i) => {
    const clonedCurrentState = [...recipes];
    clonedCurrentState.splice(i, 1);
    setRecipes(clonedCurrentState);
  };
  const editRecipe = (i, newRecipe) => {
    console.log(i, newRecipe);
    const clonedCurrentState = [...recipes];
    clonedCurrentState[i] = newRecipe;
    setRecipes(clonedCurrentState);
  };

  return (
    <div className="App">
      <header className="App-header"></header>

      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <InputRecipe addRecipe={addRecipe} />

        <DisplayRecipe
          deleteRecipe={deleteRecipe}
          editRecipe={editRecipe}
          recipes={recipes}
        />
      </Grid>
    </div>
  );
}
