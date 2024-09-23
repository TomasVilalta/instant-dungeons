import { useState } from "react";
import "./App.css";
import Header from "../Header";
import Hero from "../Hero";
import { Toaster } from "sonner";
import Footer from "../Footer/Footer";
import Drawer from "../Drawer";

function App() {
  return (
    <>
      <Toaster duration={3000} />
      <div className="content-wrapper">
        <Header />
        <div className="content">
          <Hero />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
