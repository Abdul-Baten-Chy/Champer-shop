import { Button } from "@/components/ui/button";
import Hero from "./products/Hero";

function ProductMgt() {
  return (
    <>
      <Hero></Hero>
      <h2 className="text-3xl text-center mt-16 mb-16">
        Your Product management Page
      </h2>
      <div className="overflow-x-auto max-w-[1280px] mx-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th className="">Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>
                <Button className="bg-[#4a869e] px-6">Add</Button>
              </td>
              <td>
                <Button className="bg-[#4a869e] px-6">Edite</Button>
              </td>
              <th>
                <Button className="bg-[#F26B4E] px-6">Delete</Button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
export default ProductMgt;
