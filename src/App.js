import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./routes/Home";
import Checker from "./routes/Checker";
import About from './routes/About';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/checker" element={<Checker/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
