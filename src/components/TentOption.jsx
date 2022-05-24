import { useContext } from "react";
import { BasketContext } from "../contexts/basket";

export default function TentOption(props) {
  const { basket, setBasket } = useContext(BasketContext);

  function choose() {
    console.log("clicked");

    if (
      props.fullAmountOfPers >= props.ticketsinBasketNo ||
      props.add.pers > props.ticketsinBasketNo
    ) {
      alert("the number of tickets does not match the size of the tents");
    } else {
      if (basket.tentsBA.find((add) => add.id === props.add.id)) {
        setBasket((old) => {
          const mapped = old.tentsBA.map((add) => {
            if (add.id === props.add.id) {
              const copy = { ...add };

              copy.amount++;

              return copy;
            }

            return add;
          });
          return { ...old, tentsBA: mapped };
        });
      } else {
        // setBasket((oldState) => [...oldState, { ...props.ticket, amount: 1 }]);
        setBasket((oldState) => ({
          ...oldState,
          tentsBA: [...oldState.tentsBA, { ...props.add, amount: 1 }],
        }));
      }
    }
  }

  return (
    <article className="tent-option">
      <div
        className="button-and-product"
        style={
          props.add.type === "2 person tent"
            ? {
                border: "5px solid #20E3E3",
                boxShadow: "0px 0px 15px #5AFFFF",
                borderRadius: "5px",
                marginBlock: "2rem",
              }
            : {
                border: "5px solid #FB3CFF",
                boxShadow: "0px 0px 15px #FC61FF",
                borderRadius: "5px",
              }
        }
      >
        <p>{props.add.type}</p>
        <p>{props.add.price}</p>
        <button className="add" onClick={choose}>
          {/* not working */}
          {basket.tentsBA.amount > 0 ? "-" : "+"}
        </button>
      </div>
    </article>
  );
}
