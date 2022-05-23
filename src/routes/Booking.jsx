import Basket from "../components/Basket";

import Breadcrumb from "../components/Breadcrumb";

import Tickets from "./Tickets";
import CampingSpots from "./CampingSpots";
import Additionals from "./Additionals";
import Information from "./Information";
import Payment from "./Payment";

import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import { useContext } from "react";
import { BasketContext } from "../contexts/basket";

export default function Booking() {
  const [campingData, setCampingData] = useState([]);
  const [ticketNo, setTicketNo] = useState(0);

  const tickets = [
    {
      id: 1,
      type: "Regular",
      price: 799,
      productType: "ticket",
    },
    {
      id: 2,
      type: "VIP",
      price: 1299,
      productType: "ticket",
    },
  ];

  const additionals = [
    {
      type: "2 person tent",
      productType: "tent",
      price: 399,
      id: 1,
    },
    {
      type: "3 person tent",
      productType: "tent",
      price: 599,
      id: 2,
    },
    { type: "go green", productType: "gogreen", price: 249, id: 3 },
  ];

  useEffect(
    () => {
      //use effect gør at den kun kalder en enkelt gang, ellers ville den loope, da man ville kalde funktionen getproducts data(array) ville ændre sig og derved kalde setproducts igen
      async function getCampingData() {
        const res = await fetch(
          "https://hwaiting.herokuapp.com/available-spots"
        );
        const data = await res.json();

        let fullCampingData = data.map((b) => {
          b.price = 99;
          b.productType = "camping";
          return b;
        });
        setCampingData(fullCampingData);

        let availableArr = fullCampingData.map(({ available, ...rest }) => {
          return available;
        });
        let ticketNumber = 0;
        for (let i = 0; i < availableArr.length; i++) {
          ticketNumber += availableArr[i];
        }
        setTicketNo(ticketNumber);
      }

      getCampingData();
    },
    [
      //tomt array hvor man kan putte variables ind som hvis ændrede sig ville køre funktionen igen
    ]
  );

  const { basket } = useContext(BasketContext);
  //finding number of tickets in basket
  let ticketAmount = basket.tickets.map(({ amount, ...rest }) => {
    return amount;
  });
  let ticketsinBasketNo = 0;

  for (let i = 0; i < ticketAmount.length; i++) {
    ticketsinBasketNo += ticketAmount[i];
  }

  return (
    <section id="booking">
      {/* <Timer></Timer> */}
      <Breadcrumb></Breadcrumb>

      <Routes>
        <Route
          path=""
          element={
            <Tickets
              ticketNo={ticketNo}
              ticketData={tickets}
              dataCamping={campingData}
              ticketsinBasketNo={ticketsinBasketNo}
            />
          }
        />
        <Route
          path="campingspots"
          element={
            <CampingSpots
              ticketsinBasketNo={ticketsinBasketNo}
              dataCamping={campingData}
            />
          }
        />
        <Route
          path="additional"
          element={<Additionals additionals={additionals} />}
        />
        <Route path="information" element={<Information />} />
        <Route path="payment" element={<Payment />} />
      </Routes>
      <Basket
        additionals={additionals}
        ticketNo={ticketNo}
        ticketData={tickets}
        dataCamping={campingData}
        ticketsinBasketNo={ticketsinBasketNo}
      ></Basket>
    </section>
  );
}
