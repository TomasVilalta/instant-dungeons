import { useState } from "react";
import "./App.css";
import Header from "../Header";
import Hero from "../Hero";
import { Toaster } from "sonner";
import Footer from "../Footer/Footer";

function App() {
  return (
    <>
      <Toaster duration={3000} />
      <div className="content">
        <Header />
        <Hero />
      </div>
      <Footer />
    </>
  );
}

export default App;
