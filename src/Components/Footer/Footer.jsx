import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-gray-400">
          <span className="text-blue-500 font-semibold">pointrack</span>
          <span> copyright &copy; 2024</span>
        </div>
        <div className="flex space-x-4 text-gray-400">
          <a href="#" className="hover:text-blue-600">
            Terms of service
          </a>
          <a href="#" className="hover:text-blue-600">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
