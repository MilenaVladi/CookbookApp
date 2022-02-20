import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import { Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

export default function InputRecipe({ addRecipe }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("Ingredients: ");

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe(title, text);
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
        alignItems="stretch"
      >
        <Paper elevation={6} />
        <Item>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
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
            <Button onClick={handleSubmit}>Add recipe</Button>
          </Grid>
        </Item>
      </Grid>
    </Box>
  );
}
