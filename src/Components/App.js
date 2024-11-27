import React from "react";
import NavBar from "./NavBar";
import Main from "./Main";
import "../style/App.css";
import Footer from "./Footer";

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
