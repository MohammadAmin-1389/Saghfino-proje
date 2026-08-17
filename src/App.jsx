import React from "react";
import bckImage from "./assets/images/bck.png";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Landing/Home";

function App() {
  return <div>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  </div>;
}

export default App;
