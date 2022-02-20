import React, { useState } from "react";
import { Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Edit({ oldRecipe, edit, onCancel, index }) {
  const [title, setTitle] = useState(oldRecipe.title);
  const [text, setText] = useState(oldRecipe.text);

  const handleSubmit = (e) => {
    e.preventDefault();
    edit(index, { title, text });
    onCancel();
  };
  const handlecancel = (event) => {
    event.preventDefault();
    setTitle(oldRecipe.title);
    setText(oldRecipe.text);
    onCancel();
  };
  return (
    <Box
      sx={{
        width: "80%",
        height: "50%",
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="left"
      >
        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          alignItems="left"
        >
          <TextField
            id="outlined-multiline-static"
            label="Title"
            color="secondary"
            multiline
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "45ch" },
            }}
          >
            <TextField
              id="outlined-multiline-static"
              label="Write your recipe "
              color="secondary"
              maxRows={2}
              minRows={2}
              multiline
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Box>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Button onClick={handleSubmit}>Save recipe</Button>
            <Button onClick={handlecancel}>Cancel</Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Edit;
