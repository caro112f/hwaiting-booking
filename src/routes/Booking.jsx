import Basket from "../components/Basket";
import { BasketProvider } from "../contexts/basket";

import Breadcrumb from "../components/Breadcrumb";

import Tickets from "./Tickets";
import CampingSpots from "./CampingSpots";
import Additional from "./Additional";
import Information from "./Information";
import Payment from "./Payment";

import { Routes, Route } from "react-router-dom";

export default function Booking() {
  return (
    <section id="booking">
      {/* <Timer></Timer> */}
      <Breadcrumb></Breadcrumb>

      <BasketProvider>
        <Basket></Basket>

        <Routes>
          <Route path="" element={<Tickets />} />
          <Route path="campingspots" element={<CampingSpots />} />
          <Route path="additional" element={<Additional />} />
          <Route path="information" element={<Information />} />
          <Route path="payment" element={<Payment />} />
        </Routes>
      </BasketProvider>
    </section>
  );
}
