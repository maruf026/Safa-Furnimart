import Products from "../shop/Products";
import Expriences from "./Experience";
import Hero from "./Hero";
import Materials from "./Materials";
import Testimonials from "./Testimonials";
import ChooseUs from "./WhyChoose";

function Home() {
  return (
    <div>
      <Hero />
      <Products headline="Best Selling Product" />
      <ChooseUs />

      <Expriences />
      <Materials />
      <Testimonials/>
    </div>
  );
}

export default Home;
