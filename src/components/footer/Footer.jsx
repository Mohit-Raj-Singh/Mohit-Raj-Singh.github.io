import React from "react";
import SocialIcons from "../SocialIcons/SocialIcons";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 mt-4">
      <div className="mx-auto w-full">
        <div className="items-center justify-between px-4 py-6 bg-gray-100 dark:bg-gray-700">
          <span className="text-md lg:text-lg text-gray-500 dark:text-gray-300 px-8">
            Designed by Mohit Raj Singh
          </span>
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
