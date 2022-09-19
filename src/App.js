import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  return (
    <div>
      <Nav></Nav>

      <main>
        <Gallery></Gallery>
        <About></About>
        <Contact></Contact>
      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;