
import React from 'react';
import { useState } from 'react';
import * as FaIcons from "react-icons/fa"

// import {
//     Nav,
//     NavLink,
//     Bars,
//     NavMenu,
//     NavBtn,
//     NavBtnLink,
// } from './NavbarElements';

//the behavour on the lhs of the colon is the the active behavour. line 27
//the term on the right is the default standard behavour.

const Navbar = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <div className="">



            <div className={sidebar ? 'active transform translate-x-0' : 'transform -translate-x-0'}>
                <div className="flex  space-x=8">
                    <div className="bg-purple-400 w-40 max-h-screen flex flex-col">
                        <div className="transition transform hover:-translate-y-1 motion-reduce:transition-none flex cursor-pointer rounded-full py-3 px-6 border-double border-4 border-blue-500 border-opacity-45 bg-red-500-opacity-75 hover:bg-blue-700 focus:outline-none focus:ring-2">
                            <div>
                                Menu
                            </div>

                            <button>
                                <FaIcons.FaBars onClick={showSidebar} />
                            </button>
                        </div>

                        <div className="font-normal md:font-bold rounded-md bg-red-500-opacity-75 border-solid border-4 border-blue-500 border-opacity-25 hover:bg-purple-500 text-center truncate text-white no-underline hover:underline">
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#products">Products</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#contact">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Navbar;

