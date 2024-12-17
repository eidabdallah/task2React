import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Start from "./components/Start.jsx";
export default function App() {
  return (
    <>
      <Navbar />
      <Start />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
