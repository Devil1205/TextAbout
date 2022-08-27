import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea';
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState({ message: "", type: "success" });
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.style.backgroundColor = "rgb(13 4 27 / 94%)";
      document.body.style.color = "white";
      showAlert("Enabled Dark Mode", "success");
    }
    else {
      setTheme("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Enabled Light Mode", "success");
    }
  }
  const showAlert = (message, type) => {
    setAlert({ message: message, type: type });
    setTimeout(() => {
      setAlert({ message: "" });
    }, 2000);
  }
  return (
    <>
      <Router>
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<TextArea title="Enter the text below to analyze" showAlert={showAlert} theme={theme} />}>
          </Route>
          <Route exact path="/about" element={<About theme={theme}/>}>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;
