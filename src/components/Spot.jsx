import { useContext } from "react";
import { BasketContext } from "../contexts/basket";

export default function Spot(props) {
  const { setBasket } = useContext(BasketContext);

  function choose() {
    setBasket((oldState) => [
      ...oldState,
      { ...props.dataCamping, bookingfee: props.bookingfee },
    ]);
  }
  return (
    <div
      class="campingspot"
      onClick={choose}
      style={
        props.dataCamping.available > 1
          ? { border: "5px solid #20E3E3", boxShadow: "0px 0px 15px #5AFFFF" }
          : { border: "5px solid #FB3CFF", boxShadow: "0px 0px 15px #FC61FF" }
      }
    >
      <h3>{props.dataCamping.area}</h3>
    </div>
  );
}
