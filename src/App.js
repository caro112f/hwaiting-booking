import { Link, Routes, Route } from "react-router-dom";

import { useRef, useState, useEffect } from "react";

import { gsap } from "gsap";

import Home from "./routes/Home";
import Tickets from "./routes/Tickets";
import CampingSpots from "./routes/CampingSpots";
import Additional from "./routes/Additional";
import Information from "./routes/Information";
import Payment from "./routes/Payment";
import Congrats from "./routes/Congrats";

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
            <img alt="" />
          </div>
          <div id="menu" ref={menuRef} className={menuOpen ? null : "inactive"}>
            <ul>
              <li>
                <Link
                  id="header_link"
                  className="nav-link"
                  to="/Step1"
                  onClick={ToggleBurgermenu}
                >
                  <button>BUY TICKETS</button>
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
      <section>
        {" "}
        <Link id="h1-link" to="/Step1">
          <button>BUY TICKETS</button>
        </Link>
      </section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="step1" element={<Tickets />} />
        <Route path="step2" element={<CampingSpots />} />
        <Route path="step3" element={<Additional />} />
        <Route path="step4" element={<Information />} />
        <Route path="step5" element={<Payment />} />
        <Route path="congrats" element={<Congrats />} />
      </Routes>
    </div>
  );
}

export default App;
