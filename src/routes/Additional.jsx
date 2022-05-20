import { Link } from "react-router-dom";
import Tent1 from "../components/additional-components/Tent1";
import Tent2 from "../components/additional-components/Tent2";
import GoGreen from "../components/additional-components/GoGreen";

export default function Step3(props) {
  return (
    <section id="additional" className="steps">
      <div className="heading-wrapper">
        <h1>Step 3</h1>
        <p>Additionals?</p>
      </div>

      <div className="options-wrapper">
        <section className="prepared-tents">
          <h3>Prepared Tents</h3>

          <Tent1 />
          <Tent2 />
        </section>

        <section className="go-green">
          <button className="add">+</button>
          <GoGreen />
        </section>
      </div>

      <div className="next-step">
        <Link to="/booking/information">Next</Link>
      </div>
    </section>
  );
}
