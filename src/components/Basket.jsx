import { useContext } from "react";
import { BasketContext } from "../contexts/basket";
import BasketItem from "./BasketItem";
import Timer from "./Timer";

export default function Basket(props) {
  const { basket } = useContext(BasketContext);
  const initialValue = 0;
  const sumWithInitial = basket.reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue.amount * currentValue.price,
    initialValue
  );

  return (
    <article className="basket">
      <div>
        <Timer></Timer>
        <ul>
          {basket.map((item) => {
            return <BasketItem key={item.id} {...item} />;
          })}
        </ul>
        <hr />
        <p className="totalprice">Total: {sumWithInitial} DKK</p>
      </div>
    </article>
  );
}
