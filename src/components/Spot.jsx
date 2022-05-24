import { useContext } from "react";
import { BasketContext } from "../contexts/basket";

export default function Spot(props) {
  // console.log(props.ticketsinBasketNo);

  const { basket, setBasket } = useContext(BasketContext);

  function choose() {
    console.log("clicked");
    if (props.spot.available < props.ticketsinBasketNo) {
      alert(
        "Your number of tickets exceeds the number of available spots, please pick another camp"
      );
    } else {
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
  }
  return (
    <div
      className="campingspot"
      onClick={choose}
      // on click put reguest, gather basket data on ticket amount and camping choice, send data to a database

      //from Jonas slides:
      // const payLoad = {
      // 	  header: "This is awesome",
      // 	  body: "sure is",
      // 	};
      // 	const id = 49;
      // 	const postData = JSON.stringify(payLoad);

      // 	fetch(`/endpoint/${id}`, {
      // 	  method: "put",
      // 	  headers: {
      // 	    "Content-Type": "application/json",
      // 	  },
      // 	  body: postData,
      // 	})
      // 	  .then((res) => res.json())
      // 	  .then((d) => {
      // 	    console.log(d);
      // 	  });

      style={
        props.spot.available > 1
          ? { border: "5px solid #20E3E3", boxShadow: "0px 0px 15px #5AFFFF" }
          : { border: "5px solid #FB3CFF", boxShadow: "0px 0px 15px #FC61FF" }
      }
    >
      <h3>{props.spot.area}</h3>
      <p>Available: {props.spot.available}</p>
    </div>
  );
}
