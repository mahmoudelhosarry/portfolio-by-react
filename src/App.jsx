import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function toTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  return;
}

function App() {
  const [apperance, setapperance] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setapperance(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div className="bg-backgroundColor w-full md:w-4/5 mx-auto">
      <Header />
      <Hero />
      <div className="border1"></div>
      <Main />
      <div className="border1"></div>
      <Contact />
      <div className="border1"></div>
      <Footer />
      <button
        style={{ opacity: apperance ? "1" : "0" }}
        onClick={toTop}
        className="fixed bottom-7 right-[3%] "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          viewBox="0 0 24 24"
          fill="#a16207"
          id="arrow"
        >
          <path d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-15l5 5h-4v5h-2v-5H7l5-5z"></path>
        </svg>
      </button>
    </div>
  );
}

export default App;
