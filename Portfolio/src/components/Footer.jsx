import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Reg Dev
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Building innovative dreams, one line at a time. Let's create
              something amazing together.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">
              © {currentYear} Reg Dev. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Built with React & TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
