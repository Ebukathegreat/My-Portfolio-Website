import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./page-components/Navbar";
import "./App.css";
import { useEffect } from "react";
//import Aos from "aos";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // animation happens only once
    });
  }, []);

  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
