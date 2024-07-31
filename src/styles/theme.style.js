import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
    h1: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: "40px",
      fontWeight: 600,
    },
    h2: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: "32px",
      fontWeight: 500,
    },
    h3: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: "24px",
      fontWeight: 500,
    },
    h4: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: "20px",
      fontWeight: 500,
    },
    h5: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: "16px",
      fontWeight: 500,
    },
    h6: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: "14px",
      fontWeight: 500,
    },
    body1: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: "16px",
      fontWeight: 400,
    },
    body2: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: "14px",
      fontWeight: 400,
    },
    button: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: "14px",
      fontWeight: 500,
      textTransform: "none",
    },
    caption: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: "12px",
      fontWeight: 400,
    },
    overline: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: "12px",
      fontWeight: 400,
      textTransform: "uppercase",
    },
  },
});

export default theme;
