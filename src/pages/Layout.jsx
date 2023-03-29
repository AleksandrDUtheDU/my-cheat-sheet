import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <header>
        <h1>ЗАГЛАВИЕ</h1>
      </header>
      <Outlet />
      <footer>
        <h2>Подвал</h2>
      </footer>
    </>
  );
}

export default Layout;
