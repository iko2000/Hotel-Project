import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Aboutpage from "./Pages/Aboutus";
import Book from "./Pages/Book";
import Gallery from "./Pages/Gallery";
import Homepage from "./Pages/Homepage";
import { useState } from "react";
import facebook from './Static/Pics/facebook.png'
import mail from './Static/Pics/mail.png'
import map from './Static/Pics/map.png'
import phone from './Static/Pics/phone.png'

import photo1 from "./Static/Pics/1.jpg"
import photo2 from "./Static/Pics/2.jpg"
import photo3 from "./Static/Pics/3.jpg"




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
                <li
                  onClick={() => {
                    setState(1);
                  }}
                  className={state === 1 ? "active" : "unactive"}
                >
                  <Link className={state === 1 ? "active" : "unactive"} to="/">
                    HOME
                  </Link>
                </li>
                <li
                  onClick={() => {
                    setState(2);
                  }}
                  className={state === 2 ? "active" : "unactive"}
                >
                  <Link
                    className={state === 2 ? "active" : "unactive"}
                    to="/gallery"
                  >
                    Gallery
                  </Link>
                </li>
                <li
                  onClick={() => {
                    setState(3);
                  }}
                  className={state === 3 ? "active" : "unactive"}
                >
                  <Link
                    className={state === 3 ? "active" : "unactive"}
                    to="/aboutus"
                  >
                    About Us
                  </Link>
                </li>
                <li
                  onClick={() => {
                    setState(4);
                  }}
                  className={state === 4 ? "active" : "unactive"}
                >
                  <Link
                    className={state === 4 ? "active" : "unactive"}
                    to="/book"
                  >
                    BOOK NOW
                  </Link>
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
          <footer>
            <div className="foot">
              <div className="socmedia">
                   <p><img src={facebook}/> Reach us on Facebook</p>
                   <p><img src={mail}/>  Reach us Via Email</p>

              </div>
              <div className="dets">
              <p><img src={map}/> Petre Kavtaradze 1 turn #7, Tbilisi, Georgia</p>
                   <p><img src={phone}/>  +995322440405</p>
              </div>
            </div>
            </footer>
        </div>
      </div>
    </>
  );
}

export default App;
