import { Link } from "react-router-dom";
import GoGreen from "../components/GoGreen";
import TentOption from "../components/TentOption";

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

          {props.additionals.map((a) => (
            <TentOption add={a} key={a.id} />
          ))}
          <GoGreen green={props.gogreen} key={props.gogreen.id}></GoGreen>
        </section>

        <section className="go-green">
          <button className="add">+</button>
        </section>
      </div>

      <div className="next-step">
        <Link to="/booking/information">Next</Link>
      </div>
    </section>
  );
}
