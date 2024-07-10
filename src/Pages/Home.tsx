import WhoWeAre from "@/components/Animate";
import Categories from "@/components/Categoris";
import FAQ from "@/components/FAQ";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Subscribe from "@/components/Subscribe";

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
