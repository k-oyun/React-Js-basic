import { useState, useEffect } from "react";
import Movie from "./components/Movie";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

//router 사용을 위한 import
import{ BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>

  );
  
}

export default App;
