import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { AppContext } from "./context/AppContext";

function App() {
  const [count, setCount] = useState(0);
  const [ search, setSearch ] = useState("iron man");
  const [movies, setMovies] = useState([]);

  return (
    <div className="">
      <AppContext.Provider value={{search, setSearch, movies, setMovies }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
