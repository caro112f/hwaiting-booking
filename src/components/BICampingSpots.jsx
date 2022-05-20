import { useContext } from "react";
import { BasketContext } from "../contexts/basket";

export default function BICampingSpot({ dataCamping }) {
  const { setBasket } = useContext(BasketContext);
  //console.log(props.area);
  return (
    <li>
      <p>{dataCamping.area}</p>
      <p>{dataCamping.price}</p>
    </li>
  );
}
