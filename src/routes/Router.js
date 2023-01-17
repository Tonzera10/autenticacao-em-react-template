import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import { Viagens } from "../pages/Viagens";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/admin"} element={<AdminPage />} />
        <Route path={"/"} element={<HomePage />} />
        <Route path={"*"} element={<ErrorPage />} />
        <Route path={"/users/:id"} element={<UserPage />} />
        <Route path={"/trip"} element={<Viagens />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
