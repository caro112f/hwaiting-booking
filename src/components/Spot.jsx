import { useContext } from "react";
import { BasketContext } from "../contexts/basket";

export default function Spot(props) {
  const { basket, setBasket } = useContext(BasketContext);

  function choose() {
    console.log("clicked");
    if (
      basket.campingSpot.find(
        (spot) => spot.productType === props.spot.productType
      )
    ) {
      setBasket((oldState) => ({
        ...oldState,
        campingSpot: [{ ...props.spot, amount: 1 }],
      }));
      // setBasket((old) => !old);
    } else {
      // setBasket((oldState) => ({...oldState, { ...props.spot, amount: 1 })});
      setBasket((oldState) => ({
        ...oldState,
        campingSpot: [{ ...props.spot, amount: 1 }],
      }));
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
