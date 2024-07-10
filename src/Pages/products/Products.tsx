import Card from "@/components/Card";
import Filter from "@/components/Filter";
import SearchBar from "@/components/SearchBar";
import Hero from "./Hero";

function Products() {
  return (
    <div className="max-w-[1280px] mx-auto">
      <Hero></Hero>
      <h2 className="text-3xl text-center mr-16 pt-16">Availble Products</h2>
      <div className="flex mt-8 justify-between">
        <SearchBar></SearchBar>
        <Filter></Filter>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
}
export default Products;
