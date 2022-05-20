import { useContext } from "react";
import { BasketContext } from "../contexts/basket";

export default function Spot(props) {
  console.log(props.spot);

  const { basket, setBasket } = useContext(BasketContext);

  function choose() {
    console.log("hi im clicked");
    if (basket.find((spot) => spot.area === props.spot.area)) {
      console.log("in basket already");

      setBasket((old) =>
        old.map((spot) => {
          if (spot.area === props.spot.area) {
            const copy = { ...spot };

            copy.amount++;

            return copy;
          }

          return spot;
        })
      );
    } else {
      setBasket((oldState) => [...oldState, { ...props.spot, amount: 1 }]);
    }
  }
  return (
    <div
      className="campingspot"
      onClick={choose}
      style={
        props.spot.available > 1
          ? { border: "5px solid #20E3E3", boxShadow: "0px 0px 15px #5AFFFF" }
          : { border: "5px solid #FB3CFF", boxShadow: "0px 0px 15px #FC61FF" }
      }
    >
      <h3>{props.spot.area}</h3>
      <p>{props.spot.fee}DKK</p>
    </div>
  );
}
