import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Aboutpage from "./Pages/Aboutus";
import Book from "./Pages/Book";
import Gallery from "./Pages/Gallery";
import Homepage from "./Pages/Homepage";
import { useState} from "react";
import facebook from './Static/Pics/facebook.png'

import map from './Static/Pics/map.png'
import phone from './Static/Pics/phone.png'
import booking from "./Static/Pics/booking.png"







function App() {
  
  const [burger, setBurger] = useState(false);
  const [state, setState] = useState(1);

  return (

    <>
      <div className="App">
        <div className="Appdiv">
          <header>
            <div className="mojo">
              <h1><Link style={{color: "black"}} onClick={() => {
                    setState(1);
                  }}  to="/">
                    MOJO
                  </Link></h1>
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
                   <p onClick={() => {  window.open(
                    "https://www.facebook.com/profile.php?id=100063725663358",
                    "_blank"
                  ) }}><img alt="poto" src={facebook}/> Reach us on Facebook</p>
                   <p onClick={() => {  window.open(
                    "https://www.booking.com/hotel/ge/boutique-mojo.en-gb.html?label=gen173nr-1BCAEoggI46AdIM1gEaDuIAQGYAQm4ARfIAQzYAQHoAQGIAgGoAgO4As-CrKUGwAIB0gIkOGY1YmRjZmUtNTIyMy00OWFkLTg3MDktOTk2YzFjNjVmNjM52AIF4AIB&sid=378232d885f5615cc862e87195c78c27&aid=304142&ucfs=1&arphpl=1&checkin=2023-08-05&checkout=2023-08-06&dest_id=5007896&dest_type=hotel&group_adults=1&req_adults=1&no_rooms=1&group_children=0&req_children=0&hpos=1&hapos=1&sr_order=popularity&srpvid=a7bb847d93f60193&srepoch=1688928637&all_sr_blocks=500789607_246519389_2_0_0&highlighted_blocks=500789607_246519389_2_0_0&matching_block_id=500789607_246519389_2_0_0&sr_pri_blocks=500789607_246519389_2_0_0__17802&from=searchresults#hotelTmpl",
                    "_blank"
                  ) }}><img alt="poto" style={{width: "40px", height: "30px"}} src={booking}/>  Find us in Booking.com</p>

              </div>
              <div className="dets">
              <p><img alt="poto" src={map}/> Petre Kavtaradze 1 turn #7, Tbilisi, Georgia</p>
                   <p><img alt="poto" src={phone}/>  +995322440405</p>
              </div>
            </div>
            </footer>
          
        </div>
      </div>
    </>
  );
}

export default App;
