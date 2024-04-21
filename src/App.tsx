import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import throttle from "lodash/throttle";

import { HomePage } from "./pages/home";
import { LoginPage } from "./pages/login";
import { RegisterPage } from "./pages/register";
import { PricingPage } from "./pages/pricing";
import { SizeContext, SizeType } from "./contexts/SizeContext";
import "./App.css";

function App() {
  const [size, setSize] = useState<SizeType>("pc");

  useEffect(() => {
    const resizeHandler = throttle(() => {
      if (window.innerWidth <= 600) {
        setSize("mobile");
      } else if (window.innerWidth <= 768) {
        setSize("tablet");
      } else if (window.innerWidth <= 1024) {
        setSize("laptop");
      } else {
        setSize("pc");
      }
    }, 200);

    window.addEventListener("resize", resizeHandler);
    resizeHandler();

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <SizeContext.Provider value={size}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </SizeContext.Provider>
  );
}

export default App;
