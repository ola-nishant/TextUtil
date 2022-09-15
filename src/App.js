import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Form from "./TextArea";
import About from "./about";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // states
  const [appMode, setAppMode] = useState("light");

  // functions
  const toggleMode = () => {
    if (appMode === "dark") {
      setAppMode("light");
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#212529";
      document.title = "Textutils - light";
    } else {
      setAppMode("dark");
      document.body.style.backgroundColor = "#31373d";
      document.body.style.color = "#fff";
      document.title = "Textutils - dark";
    }
  };

  // jsx
  return (
    <Router>
      <div className="App">
        <Navbar
          title="TextUtil"
          about="About us"
          appMode={appMode}
          toggleMode={toggleMode}
        />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Form />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
