import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
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
    </div>
  );
}

export default App;
