import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import { Box, Button, Chip, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
];
const ClassificationForm = ({ handleNext, handleBack, handleReset }) => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Autocomplete
            fullWidth
            options={top100Films}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => (
              <TextField {...params} label="Combo box" margin="none" />
            )}
            renderOption={(props, option) => (
              <li {...props} key={option.title}>
                {option.title}
              </li>
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Autocomplete
            fullWidth
            multiple
            limitTags={3}
            options={top100Films}
            getOptionLabel={(option) => option.title}
            defaultValue={top100Films.slice(0, 8)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Multiple Select"
                placeholder="Favorites"
              />
            )}
            renderOption={(props, option) => (
              <li {...props} key={option.title}>
                {option.title}
              </li>
            )}
            renderTags={(selected, getTagProps) =>
              selected.map((option, index) => (
                <Chip
                  {...getTagProps({ index })}
                  key={option.title}
                  label={option.title}
                  size="medium"
                  variant="filled"
                />
              ))
            }
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          marginTop: 4,
          gap: 4,
        }}
      >
        <Button
          onClick={handleNext}
          color="inherit"
          variant="outlined"
          size="large"
          sx={{
            minWidth: "244px",
          }}
        >
          Upload Data information
        </Button>
      </Box>
    </>
  );
};

export default ClassificationForm;
