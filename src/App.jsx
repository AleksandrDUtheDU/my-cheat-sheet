import {
  ThemeProvider as ThemeProviderMi,
  StyledEngineProvider,
} from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./pages/AppRoute";

function App() {
  return (
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <ThemeProviderMi>
          <AppRoute />
        </ThemeProviderMi>
      </StyledEngineProvider>
    </BrowserRouter>
  );
}

export default App;
