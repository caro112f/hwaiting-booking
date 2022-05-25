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
  const [reservationData, setReservationData] = useState();
  console.log(reservationData);
  const tickets = [
    {
      id: 1,
      type: "Regular Ticket",
      price: 799,
      productType: "ticket",
    },
    {
      id: 2,
      type: "VIP Ticket",
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
      pers: 2,
    },
    {
      type: "3 person tent",
      productType: "tent",
      price: 599,
      id: 2,
      pers: 3,
    },
  ];

  const gogreen = {
    type: "Go Green",
    productType: "gogreen",
    price: 249,
    id: 3,
    added: false,
  };

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

  //check how many tents are selected
  let tentsAmount = basket.tentsBA.map(({ amount, ...rest }) => {
    return amount;
  });

  //check how many persons that tent can fit so we can compare it to number of tickets
  let persAmount = basket.tentsBA.map(({ pers, ...rest }) => {
    return pers;
  });
  let allPersInBasketNo = 0;

  for (let i = 0; i < persAmount.length; i++) {
    allPersInBasketNo += persAmount[i];

    /*  console.log("det er mig du skal kigge på", allPersInBasketNo);
      console.log("juhu, det er mig", tentsAmount); */
  }

  let fullAmountOfPers = tentsAmount * allPersInBasketNo;

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
              reservationData={reservationData}
              setReservationData={setReservationData}
            />
          }
        />
        <Route
          path="additional"
          element={
            <Additionals
              additionals={additionals}
              gogreen={gogreen}
              ticketsinBasketNo={ticketsinBasketNo}
              fullAmountOfPers={fullAmountOfPers}
            />
          }
        />
        <Route path="information" element={<Information />} />
        <Route path="payment" element={<Payment />} />
      </Routes>
      <Basket
        gogreen={gogreen}
        additionals={additionals}
        ticketNo={ticketNo}
        ticketData={tickets}
        dataCamping={campingData}
        ticketsinBasketNo={ticketsinBasketNo}
        reservationData={reservationData}
      ></Basket>
    </section>
  );
}
