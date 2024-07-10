import { useState } from "react";

const DetailsPage = () => {
  const [selectedSize, setSelectedSize] = useState("41");
  const sizes = ["40.5", "41", "42", "43", "43.5", "44", "44.5", "45", "46"];

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img
              src="https://i.ibb.co/56pT30v/imgCard7.jpg"
              alt="Reebok Zig Kinetica 3"
              className="w-full rounded-lg"
            />
            <div className="flex space-x-2 mt-4">
              {/* Thumbnails */}
              <img
                src="https://i.ibb.co/56pT30v/imgCard7.jpg"
                alt="Reebok Zig Kinetica 3"
                className="w-16 h-16 rounded-lg cursor-pointer"
              />
              <img
                src="https://i.ibb.co/56pT30v/imgCard7.jpg"
                alt="Reebok Zig Kinetica 3"
                className="w-16 h-16 rounded-lg cursor-pointer"
              />
              <img
                src="https://i.ibb.co/56pT30v/imgCard7.jpg"
                alt="Reebok Zig Kinetica 3"
                className="w-16 h-16 rounded-lg cursor-pointer"
              />
              <img
                src="https://i.ibb.co/56pT30v/imgCard7.jpg"
                alt="Reebok Zig Kinetica 3"
                className="w-16 h-16 rounded-lg cursor-pointer"
              />
              <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-lg cursor-pointer">
                +4
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Shoes Reebok Zig Kinetica 3</h2>
            <p className="text-gray-500 mb-4">By Reebok</p>
            <div className="flex items-center mb-4">
              <span className="text-yellow-500">★★★★☆</span>
              <span className="ml-2 text-gray-500">(42 reviews)</span>
            </div>
            <p className="text-3xl font-bold mb-4">$199.00</p>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Color</h3>
              <div className="flex space-x-2">
                <div className="w-8 h-8 bg-white border border-gray-300 rounded-full cursor-pointer"></div>
                <div className="w-8 h-8 bg-gray-300 border border-gray-300 rounded-full cursor-pointer"></div>
                <div className="w-8 h-8 bg-black border border-gray-300 rounded-full cursor-pointer"></div>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Size</h3>
              <div className="grid grid-cols-4 gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`border border-gray-300 rounded-lg p-2 ${
                      selectedSize === size ? "bg-black text-white" : "bg-white"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <button className="w-full bg-black text-white py-3 rounded-lg">
              Add to cart
            </button>
            <p className="text-gray-500 mt-4">
              Free delivery on orders over $30.00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
