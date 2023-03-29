import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Main from "./Main";

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
      </Route>
    </Routes>
  );
}

export default AppRoute;
