import { ThemeProvider } from "@mui/material";
import "./styles/App.css";
import theme from "./styles/theme.style";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./layout/Root.layout";
import AuthProvider from "./providers/AuthProvider.provider";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Router>
            <AppRoutes />
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
