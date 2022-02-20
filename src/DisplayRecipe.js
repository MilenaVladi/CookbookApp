import React from "react";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

import Receipt from "./components/Receipt";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: "left",
  color: theme.palette.text.secondary,
  minWidth: "80vw",
}));

function DisplayRecipe({ recipes, deleteRecipe, editRecipe }) {
  return (
    <Box
      sx={{
        width: "80%",
        marginTop: "20px",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
      >
        <Paper elevation={6}>
          <Item>
            {recipes.map((myRecipe, index) => {
              return (
                <Receipt
                  index={index}
                  deleteRecipe={deleteRecipe}
                  editRecipe={editRecipe}
                  recipe={myRecipe}
                  key={index}
                ></Receipt>
              );
            })}
          </Item>
        </Paper>
      </Grid>
    </Box>
  );
}
export default DisplayRecipe;
