export default function BICampingSpot(props) {
  console.log(props.area);
  return (
    <li>
      <p>{props.area}</p>
      <p>{props.bookingfee}</p>
    </li>
  );
}
