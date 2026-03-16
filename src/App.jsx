import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Courses from "./pages/Courses";
import WhyUs from "./components/WhyUs";
import Results from "./pages/Results";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Courses />
      <WhyUs />
      <Results />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;