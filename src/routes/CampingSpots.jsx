import { Link } from "react-router-dom";

export default function Step2(props) {
  return (
    <section className="steps">
      <div className="heading-wrapper">
        <h1>Step 2</h1>
        <p>Please pick a camping spot </p>
      </div>
      <article className="map">
        <div id="nilfheim"></div>
        <div id="hellheim"></div>
        <div id="alfheim"></div>
        <div id="svartheim"></div>
        <div id="muspelheim"></div>
        <div id="midgaard-scene"></div>
        <div id="vanaheim-scene"></div>
        <div id="jotunheim-scene"></div>
      </article>

      <div className="next-step">
        <Link to="/booking/additional">Next</Link>
      </div>
    </section>
  );
}
