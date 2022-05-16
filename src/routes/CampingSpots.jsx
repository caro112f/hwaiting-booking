import { Link } from "react-router-dom";

export default function Step2(props) {
  return (
    <section>
      <div className="heading-wrapper">
        <h1>Step 2</h1>
        <p>Please pick a camping spot </p>
      </div>
      <Link to="/booking/additional">Next</Link>
    </section>
  );
}
