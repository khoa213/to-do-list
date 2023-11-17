import React from "react";
import { BrowserRouter ,Route,Link, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </BrowserRouter>
      


    
  );
}

export default App;
