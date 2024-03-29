import { appName } from "@/(config)/constants";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">© 2024 {appName} (confidential)
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
      </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;