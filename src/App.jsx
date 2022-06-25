import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main className="w-100 main">
          <Routes>
            <Route path="/" element={<Home/>}/>
            
          </Routes>
        </main>
      </BrowserRouter>

      <Footer />
    </>
  );
};

export default App;
