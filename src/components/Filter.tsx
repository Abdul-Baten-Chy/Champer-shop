function Filter() {
  return (
    <div className="flex gap-4">
      <select className="select select-primary w-full max-w-xs">
        <option disabled selected>
          Select Category
        </option>
        <option>BackPack</option>
        <option>Footer</option>
        <option>Tent</option>
        <option>Walking Dead</option>
      </select>
      <select className="select select-primary w-full max-w-xs">
        <option disabled selected>
          Select Price
        </option>
        <option>less than $25</option>
        <option>less than $50</option>
        <option>less than $100</option>
        <option>more than $100</option>
      </select>
    </div>
  );
}
export default Filter;
