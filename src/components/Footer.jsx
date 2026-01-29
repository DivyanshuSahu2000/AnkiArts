import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-300 bg-gray-300/70 py-5 mt-5 ">
      <div className="max-w-6xl mx-auto px-3 text-center space-y-2">
        <h3 className="text-lg font-medium text-gray-800">
          AnkiArts{" "}
          <span className=" text-sm font-normal text-gray-600">
            ♡ Your Walls, Our Canvas ♡
          </span>
        </h3>

        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} • Created & Designed by{" "}
          <span className="font-medium text-gray-800">Divyanshu Sahu</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
