import { Link, Route, Routes } from "react-router-dom";

import { useRef, useState, useEffect } from "react";

import { gsap } from "gsap";

import Home from "./routes/Home";
import Booking from "./routes/Booking";

import logo from "./images/logo_light.svg";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  function ToggleBurgermenu() {
    setMenuOpen((old) => !old);
  }

  const menuRef = useRef();
  useEffect(() => {
    gsap.from(menuRef.current, { x: 1500 });
    gsap.to(menuRef.current, { duration: 1, x: 0 });
  });

  return (
    <div className="App">
      <section id="navigation">
        <nav>
          <div id="logo_wrapper">
            <Link to="/">
              {" "}
              <img src={logo} className="logo" alt="" />
            </Link>

            <p>8/8-14/8</p>
          </div>
          <div id="menu" ref={menuRef} className={menuOpen ? null : "inactive"}>
            <ul>
              <li>
                <Link
                  id="header_link"
                  className="nav-link"
                  to="/booking"
                  onClick={ToggleBurgermenu}
                >
                  {" "}
                  <p className="link-p">BUY TICKETS</p>{" "}
                </Link>
              </li>
            </ul>
          </div>
          <div id="burgermenu" onClick={ToggleBurgermenu}>
            <span id="bar1" className={menuOpen ? "active1" : null}></span>
            <span id="bar2" className={menuOpen ? "active2" : null}></span>
            <span id="bar3" className={menuOpen ? "active3" : null}></span>
          </div>
        </nav>
      </section>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="booking/*" element={<Booking />} />
      </Routes>
    </div>
  );
}

export default App;
