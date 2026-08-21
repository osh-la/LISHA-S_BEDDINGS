import Hero from "../components/homeComponents/Hero";
import About from "../components/homeComponents/About";
import Categories from "../components/homeComponents/categories";
import History from "../components/homeComponents/history";
import LifestyleGallery from "../components/homeComponents/lifestylegallery";
import StatementSection from "../components/homeComponents/statement";
import Values from "../components/homeComponents/values";
import PricingArchitecture from "../components/homeComponents/pricing";
import CatSection from "../components/homeComponents/Cat";
const Home = () => {
  return (
    <section className="">
      <Hero />
      <About />
      {/* <Categories /> */}
      {/* <History /> */}
      <CatSection/>
      <PricingArchitecture/>
   <LifestyleGallery/>   
   <StatementSection/>
   <Values/>
    </section>
  );
};

export default Home;
