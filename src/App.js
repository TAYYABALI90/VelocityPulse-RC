import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Features from "./components/features/Features";
import Blogs from "./components/blogs/Blogs";
import Review from "./components/review/Review";
import Faq from "./components/faq/Faq";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {

  return (

    <div className="App">

      <Hero />
      <About />
      <Services />
      <Features />
      <Blogs />
      <Review />
      <Faq />
      <Contact />
      <Footer />

    </div>

  );

}

export default App;