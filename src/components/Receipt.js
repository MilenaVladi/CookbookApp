import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

import Edit from "./Edit";

function Recipe({ recipe, deleteRecipe, editRecipe, index }) {
  const [isEditing, setIsEditing] = useState(false);

  const setEditingFalse = () => setIsEditing(false);

  const renderRecipe = () => {
    if (isEditing) {
      return (
        <Edit
          onCancel={setEditingFalse}
          oldRecipe={recipe}
          edit={editRecipe}
          index={index}
        />
      );
    }

    return (
      <>
        <h1>{recipe.title}</h1>
        <p>{recipe.text}</p>
        <IconButton aria-label="delete" onClick={() => deleteRecipe(index)}>
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="edit" onClick={() => setIsEditing(true)}>
          <EditIcon />
        </IconButton>
      </>
    );
  };

  return <div>{renderRecipe()}</div>;
}
export default Recipe;
