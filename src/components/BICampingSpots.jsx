export default function BICampingSpot({ area, available, price, spots }) {
  //console.log(props.area);
  return (
    <li>
      <p>{area}</p>
      <p>{price}</p>
    </li>
  );
}
