import { useContext } from "react";
import { BasketContext } from "../contexts/basket";
import BasketItem from "./BasketItem";

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
        <ul>
          {basket.map((item) => {
            return <BasketItem key={item.id} {...item} />;
          })}
        </ul>
        <p className="totalprice">Total: ${sumWithInitial}</p>
      </div>
    </article>
  );
}
