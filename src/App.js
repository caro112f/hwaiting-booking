import { Link, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Step1 from "./routes/Step1";
import Step2 from "./routes/Step2";
import Step3 from "./routes/Step3";
import Step4 from "./routes/Step4";
import Step5 from "./routes/Step5";
import Congrats from "./routes/Congrats";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <Link to="/Home">Home</Link>
        </ul>
      </nav>
      <section>
        {" "}
        <Link id="header_link" to="/Step1">
          <button>BUY TICKETS</button>
        </Link>
      </section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="step1" element={<Step1 />} />
        <Route path="step2" element={<Step2 />} />
        <Route path="step3" element={<Step3 />} />
        <Route path="step4" element={<Step4 />} />
        <Route path="step5" element={<Step5 />} />
        <Route path="congrats" element={<Congrats />} />
      </Routes>
    </div>
  );
}

export default App;
