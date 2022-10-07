import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <div>
      <Nav></Nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer></Footer>

      </div>
    </div>

  );
}

export default App;