import React from "react";

const foods = [
  {
    name: "Salads",
    image: "/images/salad.jpg",
    rating: 199,
    price: 3.5,
    desc: "This is a great green salad that is very healthy. You can eat it with any meal."
  },
  {
    name: "Chicken Masala",
    image: "/images/chicken-masala.jpg",
    rating: 220,
    price: 4.0,
    desc: "This is a great chicken masala that is very healthy. You can eat it with any meal."
  },
  {
    name: "Mutton Kheema",
    image: "/images/mutton-kheema.jpg",
    rating: 112,
    price: 4.6,
    desc: "This is a great mutton kheema that is very healthy. You can eat it with any meal."
  },
  {
    name: "Beef Pasta",
    image: "/images/beef-pasta.jpg",
    rating: 180,
    price: 3.0,
    desc: "This is a great beef pasta that is very healthy. You can eat it with any meal."
  },
  {
    name: "Chicken Fry",
    image: "/images/chicken-fry.jpg",
    rating: 220,
    price: 4.0,
    desc: "This is a great chicken fry that is very healthy. You can eat it with any meal."
  },
  {
    name: "Special Dessert",
    image: "/images/dessert.jpg",
    rating: 189,
    price: 2.5,
    desc: "This is a great dessert that is very healthy. You can eat it with any meal."
  }
];

const RegularFood = () => {
  return (
    <section className="py-16 bg-white" id="regularfood">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">OUR REGULAR FOOD</h2>
          <p className="text-gray-600 text-sm md:text-base">
            This is our daily food list. Here you will find all kinds of food, choose your favorite and order.
          </p>
        </div>

        {/* Grid of foods */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {foods.map((food, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-5 text-center hover:shadow-xl transition"
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

              <p className="text-gray-600 text-sm mb-3">{food.desc}</p>

              <div className="flex justify-between items-center px-6">
                <span className="font-semibold">${food.price.toFixed(2)}</span>
                <button className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600 text-sm">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegularFood;
