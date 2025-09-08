import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-100 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Menu */}
        <div>
          <h3 className="text-lg font-bold mb-4">Menu</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><a href="#" className="hover:text-green-600">Home</a></li>
            <li><a href="#" className="hover:text-green-600">Why Choose</a></li>
            <li><a href="#" className="hover:text-green-600">Special Menu</a></li>
            <li><a href="#" className="hover:text-green-600">Regular Food</a></li>
            <li><a href="#" className="hover:text-green-600">Special Chef&apos;s</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-lg font-bold mb-4">Help</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><a href="#" className="hover:text-green-600">Privacy</a></li>
            <li><a href="#" className="hover:text-green-600">Terms & Condition</a></li>
            <li><a href="#" className="hover:text-green-600">Policy</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact</h3>
          <p className="text-sm text-gray-700">+123 456 789</p>
          <p className="text-sm text-gray-700">Info@Foodied.Com</p>
          <p className="text-sm text-gray-700">1245, New York, USA</p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-bold mb-4">Subscribe Our Newsletter</h3>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-r-md text-sm hover:bg-green-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
