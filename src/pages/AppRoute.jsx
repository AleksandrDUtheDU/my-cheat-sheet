import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";

function Main() {
  return <h1>Оглавление</h1>;
}

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
