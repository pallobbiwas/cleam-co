import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AdminRoute from "./Authentication/AdminRoute";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import AddAdmin from "./pages/Dashboard/AddAdmin";
import AddProduct from "./pages/Dashboard/AddProduct";
import Dashboard from "./pages/Dashboard/Dashboard";
import Services from "./pages/Services";
import PrivateRoute from "./routes/PrivateRoute";
import { publicRoute } from "./routes/publicRoutes";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Navbar>
      <Routes>
        {publicRoute.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
        <Route element={<PrivateRoute />}>
          <Route path="/services" element={<Services></Services>}></Route>
          <Route path="/about" element={<About></About>}></Route>
        </Route>

        <Route element={<AdminRoute />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route
              path="/dashboard/add-product"
              element={<AddProduct />}
            ></Route>
            <Route path="/dashboard/add-admin" element={<AddAdmin />}></Route>
          </Route>
        </Route>
      </Routes>
    </Navbar>
  );
}

export default App;
