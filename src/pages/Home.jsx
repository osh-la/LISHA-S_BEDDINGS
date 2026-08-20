import Hero from "../components/homeComponents/Hero";
import About from "../components/homeComponents/About";
import Categories from "../components/homeComponents/categories";
import History from "../components/homeComponents/history";
import LookoutSection from "../components/homeComponents/Cat";
import LifestyleGallery from "../components/homeComponents/lifestylegallery";
import StatementSection from "../components/homeComponents/statement";
import Values from "../components/homeComponents/values";
const Home = () => {
  return (
    <section className="">
      <Hero />
      <About />
      {/* <Categories /> */}
      {/* <History /> */}
      <LookoutSection/>
   <LifestyleGallery/>   
   <StatementSection/>
   <Values/>
    </section>
  );
};

export default Home;
