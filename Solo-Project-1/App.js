import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import About from "./src/components/About";
import Interests from "./src/components/Interests";

function App() {
  return (
    <div className="main-card">
      <Header />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
