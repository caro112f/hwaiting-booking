import { Link } from "react-router-dom";
import GoGreen from "../components/GoGreen";
import TentOption from "../components/TentOption";

export default function Step3(props) {
  function freezeTents() {
    props.setFreezeTents(true);
  }
  return (
    <section id="additional" className="steps">
      <div className="heading-wrapper">
        <h1 className="h1margin">
          Step 3 <span className="fullsteps">/ 5</span>
        </h1>
        <p>Additionals?</p>
      </div>
      <div className="next-step" id="extrapadding">
        <Link to="/booking/information" onClick={freezeTents}>
          Next
        </Link>
      </div>
      <div className="options-wrapper">
        <section className="prepared-tents">
          <h3 className="tents-headline">Prepared Tents</h3>
          <div className="tents-container">
            {props.additionals.map((a) => (
              <TentOption
                add={a}
                key={a.id}
                ticketsinBasketNo={props.ticketsinBasketNo}
                fullAmountOfPers={props.fullAmountOfPers}
              />
            ))}
          </div>
        </section>

        <section className="go-green">
          <h3 className="tents-headline">Green Camping</h3>

          <GoGreen green={props.gogreen} key={props.gogreen.id}></GoGreen>
        </section>
      </div>
    </section>
  );
}
