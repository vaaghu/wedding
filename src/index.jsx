import React from "react";
import ReactDOM from "react-dom/client";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as serviceWorkerRegistration from "@utils/serviceWorkerRegistration";

import Home from "@pages/home";
import Info from "@pages/info";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<IndexComp />} />
      </Routes>
    </BrowserRouter>
  );
}

function IndexComp() {
  const navigate = useNavigate();
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home navigate={navigate} />} />
        <Route path="/info" element={<Info navigate={navigate} />} />
      </Routes>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <App />
  </div>
);

serviceWorkerRegistration.register();
