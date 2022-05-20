import { Link } from "react-router-dom";

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

          <article className="tent-option1">
            <div class="button-and-product">
              <button className="add">+</button>

              <p>2 person tent</p>
            </div>
            <p>399 DKK</p>
          </article>
          <article className="tent-option2">
            <div class="button-and-product">
              <button className="add">+</button>

              <p>3 person tent</p>
            </div>
            <p>599 DKK</p>
          </article>
        </section>

        <section className="go-green">
          <button className="add">+</button>
          <div className="go-green-text">
            <h3>Go green</h3>
            <article>
              <h4>Green camping</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                tincidunt accumsan purus, vitae bibendum dolor blandit ut.
                Suspendisse non orci eget augue pharetra malesuada.{" "}
              </p>

              <div class="price">
                <p>249 DKK</p>
              </div>
            </article>
          </div>
        </section>
      </div>

      <div className="next-step">
        <Link to="/booking/information">Next</Link>
      </div>
    </section>
  );
}
