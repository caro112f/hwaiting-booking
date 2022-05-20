import Basket from "../components/Basket";
import { BasketProvider } from "../contexts/basket";

import Breadcrumb from "../components/Breadcrumb";

import Tickets from "./Tickets";
import CampingSpots from "./CampingSpots";
import Additional from "./Additional";
import Information from "./Information";
import Payment from "./Payment";

import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Booking() {
  const [campingData, setCampingData] = useState([]);
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
      }

      getCampingData();
    },
    [
      //tomt array hvor man kan putte variables ind som hvis ændrede sig ville køre funktionen igen
    ]
  );

  return (
    <section id="booking">
      {/* <Timer></Timer> */}
      <Breadcrumb></Breadcrumb>

      <BasketProvider>
        <Routes>
          <Route
            path=""
            element={<Tickets ticketData={tickets} dataCamping={campingData} />}
          />
          <Route
            path="campingspots"
            element={<CampingSpots dataCamping={campingData} />}
          />
          <Route path="additional" element={<Additional />} />
          <Route path="information" element={<Information />} />
          <Route path="payment" element={<Payment />} />
        </Routes>
        <Basket ticketData={tickets} dataCamping={campingData}></Basket>
      </BasketProvider>
    </section>
  );
}
