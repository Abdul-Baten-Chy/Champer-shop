import { Button } from "./ui/button";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Filter({
  category,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  setCategory,
}: any) {
  // const handleCategoryChange = (
  //   event: React.ChangeEvent<HTMLSelectElement>
  // ) => {
  //   const selectedCategory = event.target.value;
  //   setCategory(selectedCategory === "all" ? null : selectedCategory);
  // };

  // const handlePriceRangeChange = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   const { name, value } = event.target;
  //   console.log(name, value);

  //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //   setprice((prev: any) => ({
  //     ...prev,
  //     [name]: value === "" ? null : parseInt(value, 10),
  //   }));
  // };

  console.log(
    category,
    minPrice,

    maxPrice
  );
  const handleReset = () => {
    setCategory("");
    setMaxPrice("");
    setMinPrice("");
  };
  return (
    <div className="flex gap-4">
      {/* <select
        className="select select-primary w-full max-w-xs"
        onChange={(e) => handleCategoryChange(e)}
      >
        <option disabled selected>
          Select Category
        </option>
        <option>BackPack</option>
        <option>Footer</option>
        <option>Tent</option>
        <option>Walking Dead</option>
      </select>
      <select
        className="select select-primary w-full max-w-xs"
        onChange={(e) => handlePriceRangeChange(e)}
      >
        <option disabled selected>
          Select Price
        </option>
        <option>less than $25</option>
        <option>less than $50</option>
        <option>less than $100</option>
        <option>more than $100</option>
      </select> */}
      <div>
        <label>
          Category:
          <select
            className="border border-green-300"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All</option>
            <option value="Footwear">Footwear</option>
            <option value="Backpacks">Backpacks</option>
            <option value="Champing">Champing</option>
            <option value="Equipments">Equipments</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Min Price:
          <input
            className="border border-green-300"
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Max Price:
          <input
            className="border border-green-300"
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </label>
      </div>
      <div>
        <Button onClick={handleReset}>Reset</Button>
      </div>
    </div>
  );
}

export default Filter;
