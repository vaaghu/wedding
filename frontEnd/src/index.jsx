import React from "react";
import ReactDOM from "react-dom/client";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import * as serviceWorkerRegistration from "@utils/serviceWorkerRegistration";

import Home from "@pages/home";
import Info from "@pages/info";
import SuccessComp from "@pages/success";
import ErrorComp from "@pages/error";
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
    <>
      <Routes>
        <Route path="/" element={<Home navigate={navigate} />} />
        <Route path="/info/*" element={<Info navigate={navigate} />} />
        <Route path="/success" element={<SuccessComp />} />
        <Route path="/*" element={<ErrorComp />} />
      </Routes>
    </>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);

// serviceWorkerRegistration.register();
