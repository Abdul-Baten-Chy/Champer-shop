import Cards from "@/components/Cards";
import Filter from "@/components/Filter";
import SearchBar from "@/components/SearchBar";
import { useGetAllProductQuery } from "@/redux/Feature/Api/productApi";
import { Tproduct } from "@/Utills/type";
import Hero from "./Hero";

function Products() {
  const { data, isLoading, isError } = useGetAllProductQuery(undefined);
  if (isLoading) return <h2>Loading ...</h2>;
  if (isError) return <h2>Something went wrong</h2>;
  return (
    <div className="max-w-[1280px] mx-auto">
      <Hero></Hero>
      <h2 className="text-3xl text-center mr-16 pt-16">Availble Products</h2>
      <div className="flex mt-8 justify-between">
        <SearchBar></SearchBar>
        <Filter></Filter>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
        {data &&
          data?.data?.map((item: Tproduct) => (
            <Cards key={item._id} product={item}></Cards>
          ))}
      </div>
    </div>
  );
}
export default Products;
