const Card = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg max-w-sm hover:scale-105 transition duration-700 ease-in">
      <div className="relative">
        <img
          src="https://i.ibb.co/56pT30v/imgCard7.jpg"
          alt="Sony Headphone"
          className="w-full h-auto rounded-t-lg"
        />
        <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md">
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </button>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-bold text-gray-800">Sony Headphone</h2>
        <p className="text-gray-600">
          WH-1000XM5 Wireless Industry Leading Noise Canceling Headphones
        </p>
        <div className="flex space-x-2 mt-2">
          <span className="w-5 h-5 rounded-full bg-gray-300 border-2 border-white shadow-inner cursor-pointer"></span>
          <span className="w-5 h-5 rounded-full bg-gray-800 border-2 border-white shadow-inner cursor-pointer"></span>
          <span className="w-5 h-5 rounded-full bg-indigo-700 border-2 border-white shadow-inner cursor-pointer"></span>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xl font-bold text-gray-800">$339</span>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition duration-300">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
