import React from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";


const theme = {
  colors: {
    body: '#050543',
    footer: '#003333'
  },
  mobile: '768px',
}

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <>
      <GlobalStyles />
        <Nav/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            {/* <Route path="/support" element={<Support />} /> */}
          </Routes>

        <Footer/>
      </>
    </ThemeProvider>
  );
}

export default App;