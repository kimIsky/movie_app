import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './routes/About';
import Home from "./routes/Home";
import Nav from "./components/Nav";
import Detail from "./components/Detail";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element= {<Home />}></Route>
        <Route path="/about" element= {<About />}></Route>
        <Route path="/movie-detail/:id" element= {<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
