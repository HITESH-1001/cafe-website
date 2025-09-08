import React from "react";

const specialFoods = [
  {
    name: "Salads",
    image: "/images/salad.jpg",
    rating: 199,
    price: 2.5,
  },
  {
    name: "Egg Masala",
    image: "/images/egg-masala.jpg",
    rating: 180,
    price: 3.4,
  },
  {
    name: "Fried Fish",
    image: "/c1.png",
    rating: 220,
    price: 4.0,
  },
];

const SpecialMenu = () => {
  return (
    <section className="py-16 bg-white" id="specialmenu">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">SPECIAL MENU</h2>
          <p className="text-gray-600 text-sm md:text-base">
            Some of our special food menu is given here. These are what people order more. 
            If you want, you can order from here.
          </p>
        </div>

        {/* Food Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {specialFoods.map((food, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-5 text-center hover:shadow-xl transition w-64"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-green-500 overflow-hidden">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">{food.name}</h3>

              {/* Rating */}
              <div className="flex justify-center items-center mt-1 mb-2 text-yellow-500">
                {"★".repeat(5)}
                <span className="ml-2 text-gray-600 text-sm">({food.rating})</span>
              </div>

              {/* Price + Cart */}
              <div className="flex justify-between items-center px-4 mt-3">
                <span className="font-semibold text-green-600">${food.price.toFixed(2)}</span>
                <button className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m12-9l2 9m-6-5h.01" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === 0 ? "bg-green-500" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialMenu;
