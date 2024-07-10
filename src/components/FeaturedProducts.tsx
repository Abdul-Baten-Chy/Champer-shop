import { motion } from "framer-motion";
import Card from "./Card";
import { Button } from "./ui/button";
const FeaturedProducts = () => {
  return (
    <section className="bg-[#edf3f5] mt-10 py-12 ">
      <motion.div
        initial={{ opacity: 0, x: -300 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1,
          },
        }}
        className="container  flex flex-col items-center max-w-[1280px] mx-auto"
      >
        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center">
          Featured Products
        </h2>
        <p className="text-gray-600 mb-6 text-center">
          Unique & modern pottery made by our finest artisans.
        </p>
        <div className="grid mx-auto justify-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
        <Button className="mt-10 mx-10 bg-[#F26B4E]">See More</Button>
      </motion.div>
    </section>
  );
};

export default FeaturedProducts;
