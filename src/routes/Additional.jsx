import { Link } from "react-router-dom";

export default function Step3(props) {
  return (
    <section>
      <div className="heading-wrapper">
        <h1>Step 3</h1>
        <p>Additionals?</p>
      </div>
      <Link to="/booking/information">Next</Link>
    </section>
  );
}
