import { Route, Routes } from "react-router";

import Layout from "./components/Layout/Layout";
import AboutPages from "./pages/AboutPages";
import HomePages from "./pages/HomePages";
import NotFound from "./pages/NotFound";
import React from "react";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePages />} />
          <Route path="/about" element={<AboutPages />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
