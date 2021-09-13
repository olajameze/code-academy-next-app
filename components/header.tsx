import React from "react";

const Header: React.FC = ({ children }) => {
  return (
    <header
      className="h-20 px-10 text-bold bg-purple-600 opacity-0.5 text-white w-full text-center sticky top-0 flex items-center justify-between"
    >
      <span>Gomez Inc</span>

      <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-blue-600 ">
        <span className="material-icons items-center">face</span>
      </div>
    </header>
  );
};

export default Header;
