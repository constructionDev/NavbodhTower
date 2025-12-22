import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop"; 

// Import your pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

// Define light and dark themes
const lightTheme = {
  background: "#ffffff",
  text: "#333333",
  primary: "#4b5cff",
  primaryHover: "#3a4bcc",
  cardBackground: "#f8f8f8",
};

const darkTheme = {
  background: "#1e1e1e",
  text: "#f0f0f0",
  primary: "#4b5cff",
  primaryHover: "#3a4bcc",
  cardBackground: "#2a2a2a",
};

// Global styles
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    transition: all 0.3s ease;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

function App() {
  const [theme, setTheme] = useState("light"); // default theme

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Router>
             <ScrollToTop /> 
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
