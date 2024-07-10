import WhoWeAre from "./Animate";
import Categories from "./Categoris";
import FAQ from "./FAQ";
import FeaturedProducts from "./FeaturedProducts";
import Footer from "./Footer";
import Hero from "./Hero";
import Subscribe from "./Subscribe";

function Home() {
  return (
    <>
      <Hero></Hero>
      <Categories />
      <FeaturedProducts />
      <WhoWeAre></WhoWeAre>
      <Subscribe></Subscribe>
      <FAQ />
      <Footer></Footer>
    </>
  );
}
export default Home;
