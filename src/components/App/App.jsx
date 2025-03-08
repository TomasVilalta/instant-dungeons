import "./App.css";
import Header from "../Header";
import Hero from "../Hero";
import { Toaster } from "sonner";
import Footer from "../Footer/Footer";
import { GeminiConfigProvider } from "../../context/GeminiConfigContext";

function App() {
  return (
    <GeminiConfigProvider>
      <Toaster duration={3000} />
      <div className="content-wrapper">
        <Header />
        <div className="content">
          <Hero />
        </div>
        <Footer />
      </div>
    </GeminiConfigProvider>
  );
}

export default App;
