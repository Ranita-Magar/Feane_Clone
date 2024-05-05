import React from "react";
import Navbar from "./Navbar";
import BookTable from "./BookTable";
import Footer from "./Footer";
import Menu from "./Menu";
import CustomerReview from "./CustomerReview";
import SpecialOffers from "./SpecialOffers";

export default function Home() {
  return (
    <div>
      <Navbar />
      <SpecialOffers />
      <Menu />
      <BookTable />
      <CustomerReview />
      <Footer />
    </div>
  );
}
