import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";

import ArticleList from "./components/ArticleList";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ArticleList />} />
      </Routes>
    </>
  );
}

export default App;
