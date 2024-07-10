import { Button } from "@/components/ui/button";

function Cart() {
  return (
    <div className="overflow-x-auto max-w-[1280px] mx-auto mt-16">
      <h2 className="text-center mb-10"> Your Added Product</h2>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th className="">Action</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Zemlak, Daniel and Leannon
              <br />
              <span className="badge badge-ghost badge-sm">
                Desktop Support Technician
              </span>
            </td>
            <td>Quantity</td>
            <td>
              <Button className="bg-[#4a869e] px-6">increase</Button>
            </td>
            <td>
              <Button className="bg-[#4a869e] px-6">Decrese</Button>
            </td>
            <th>
              <Button className="bg-[#F26B4E] px-6">Remove</Button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Cart;
