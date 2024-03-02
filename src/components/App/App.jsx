import { useState } from "react";
import "./App.css";
import Header from "../Header";
import Hero from "../Hero";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Toaster />
      <Header />
      <Hero />
    </>
  );
}

export default App;
