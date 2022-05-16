import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
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
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </Navbar>
  );
}

export default App;
