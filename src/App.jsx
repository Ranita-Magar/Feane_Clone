import React from "react";
import { Navbar } from "./components/Navbar";
import { Menu } from "./components/Menu";
// import { About } from "./components/About";
import { BookTable } from "./components/BookTable";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      {/* 
       <BookTable />
       <Navbar />
       */}
      <Menu />
      <Footer />
    </>
  );
}

export default App;
