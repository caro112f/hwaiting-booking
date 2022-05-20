import { useContext } from "react";
import { BasketContext } from "../contexts/basket";

export default function Spot(props) {
  //console.log(props.spot);

  const { basket, setBasket } = useContext(BasketContext);

  function choose() {
    if (basket.find((spot) => spot.productType === props.spot.productType)) {
      alert("stop right there criminal scum");
      //gem old state med tickets
      //fjerne old state som indeholder spot
      //tage hele state filtrere gamle spot fra, tag oldstate uden det gamle og add new spot
      /*      setBasket((old) =>
        old.map((item) => {
          if (!item.productType === props.productType) {
            const copy = { ...item };

            // copy.starred = !copy.starred;
            return copy;
          }
          return item;
        })
      ); */
      setBasket((oldState) => [{ ...props.spot, amount: 1 }]);
      // setBasket((old) => !old);
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
