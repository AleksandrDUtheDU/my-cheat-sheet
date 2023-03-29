import { StyledEngineProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./pages/AppRoute";

function App() {
  return (
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <AppRoute />
      </StyledEngineProvider>
    </BrowserRouter>
  );
}

export default App;
