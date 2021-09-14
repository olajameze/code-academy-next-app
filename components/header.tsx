import React from "react";

const Header: React.FC = ({ children }) => {
  return (
    <header
      className="h-20 px-10 text-bold bg-purple-600 opacity-0.5 text-white w-full text-center sticky top-0 flex items-center justify-between"
    >
      <span>Gomez Inc</span>

      <form>
        <input className="text-gray-600 focus-within:text-gray-600 rounded-full border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ..." />

        <button className="rounded-full border-4 border-opacity-50 border-indigo-500 br-opacity-50 bg-blue-400 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ...">
          Search
        </button>
      </form>

      <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-blue-600 ">
        <span className="material-icons items-center">face</span>
      </div>

    </header>

  );
};

export default Header;
