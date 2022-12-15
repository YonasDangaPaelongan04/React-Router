import "./App.css";
import React from "react";
// import Routes from "./routes/Router";
import { Routes, Route, Switch } from "react-router-dom";
import Main from "./view/Main";
import About from "./view/About";
import Contact from "./view/Contact";
import Detail from "./view/Detail";
import NotFound from "./view/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail/: id" element={<Detail />} />
        <Route element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
