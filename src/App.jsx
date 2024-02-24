import React, { useState } from "react";

import "./App.css";
import Events from "./Components/Events";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Components/NotFound.jsx";
import Home from "./Pages/Home.jsx";
// import Event from "./Components/Event.jsx";
const LazyLoading = React.lazy(() => import("./Components/Event.jsx"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/events" element={<Events />}>
          <Route
            path="/events/:name"
            element={
              <React.Suspense fallback="loading">
                <LazyLoading />
              </React.Suspense>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
