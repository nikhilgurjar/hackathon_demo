import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "./theme/theme-provider";
import DataGrid from "./components/Datagrid";
import FileInput from "./components/Form/FileInput";
import { useState } from "react";
import ClassificationForm from "./components/Form/ClassificationForm";
import { Box, Button } from "@mui/material";

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
];

function getStepContent(activeStep, handleNext, handleBack, handleReset) {
  console.log(activeStep);
  switch (activeStep) {
    case 0:
      return (
        <FileInput
          handleNext={handleNext}
          handleBack={handleBack}
          handleReset={handleReset}
        />
      );
    case 1:
      return (
        <ClassificationForm
          handleNext={handleNext}
          handleBack={handleBack}
          handleReset={handleReset}
        />
      );
    case 2:
      return <DataGrid />;
    default:
      return "Unknown step";
  }
}
function App() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <ThemeProvider>
        <DataGrid />
        {getStepContent(activeStep, handleNext, handleBack, handleReset)}
        {activeStep != 0 && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              marginTop: 20,
              marginBottom: 20,
              gap: 4,
            }}
          >
            <Button
              onClick={handleBack}
              color="inherit"
              variant="outlined"
              size="large"
              sx={{
                minWidth: "244px",
              }}
            >
              Back
            </Button>
            <Button
              onClick={handleBack}
              color="inherit"
              variant="outlined"
              size="large"
              sx={{
                minWidth: "244px",
              }}
            >
              Reset
            </Button>
          </Box>
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
