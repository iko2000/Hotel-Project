import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Aboutpage from "./Pages/Aboutus";
import Book from "./Pages/Book";
import Gallery from "./Pages/Gallery";
import Homepage from "./Pages/Homepage";
import { useState } from "react";

function App() {
  const [burger, setBurger] = useState(false);
  const [state, setState] = useState(1);

  return (
    <>
      <div className="App">
        <div className="Appdiv">
          <header>
            <div className="mojo">
              <h1>HOTEL MOJO</h1>
            </div>

            <nav>
              <ul className={burger ? "ulresponsive" : "ul"}>
                <li  onClick={() => {
                  setState(1)
                }} className={state === 1 ? 'active' : ''}>
                  <Link to="/">HOME</Link>
                </li>
                <li onClick={() => {
                  setState(2)
                }} className={state === 2 ? 'active' : ''}>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li onClick={() => {
                  setState(3)
                }} className={state === 3 ? 'active' : ''}>
                  <Link to="/aboutus">About Us</Link>
                </li>
                <li onClick={() => {
                  setState(4)
                }} className={state === 4 ? 'active' : ''}>
                  <Link to="/book">BOOK NOW</Link>
                </li>
              </ul>
            </nav>
            <div
              onClick={() => {
                setBurger(!burger);
              }}
              className="burger"
            >
              <span> </span>
              <span> </span>
              <span> </span>
            </div>
          </header>
          <div className="body">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/aboutus" element={<Aboutpage />} />
              <Route path="/book" element={<Book />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
