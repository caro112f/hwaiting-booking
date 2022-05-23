import { useContext } from "react";
import { BasketContext } from "../contexts/basket";

export default function GoGreen({ green }) {
  const { basket, setBasket } = useContext(BasketContext);
  console.log(green);

  // onclick set "added" to true and display info in basket
  // add remove function that sets "added" to false and automatically removes from basket

  function toggleGreen(props) {
    //console.log("clicked");

    if (
      (green.added === false && basket.gogreenBA.added === undefined) ||
      (green.added === false && basket.gogreenBA.added === false)
    ) {
      setBasket((oldState) => ({
        ...oldState,
        gogreenBA: { ...green, added: true },
      }));
    } else if (basket.gogreenBA.added === true) {
      setBasket((oldState) => ({
        ...oldState,
        gogreenBA: { ...green, added: false },
      }));
    }
  }

  return (
    /* 
    <div className="go-green-text">
      <h3>Go green</h3>
      <article>
        <h4>Green camping</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          tincidunt accumsan purus, vitae bibendum dolor blandit ut. Suspendisse
          non orci eget augue pharetra malesuada.{" "}
        </p>

        <div class="price">
          <p>249 DKK</p>
        </div>
      </article>
    </div> */

    <div className="go-green-text">
      <button className="add" onClick={toggleGreen}>
        {basket.gogreenBA.added ? "-" : "+"}
      </button>

      <h3>{green.type}</h3>

      <article>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          tincidunt accumsan purus, vitae bibendum dolor blandit ut. Suspendisse
          non orci eget augue pharetra malesuada.{" "}
        </p>
        <div className="price">
          <p>{green.price} DKK</p>
        </div>
      </article>
    </div>
  );
}
