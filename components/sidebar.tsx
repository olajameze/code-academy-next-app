
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
                    <div className="bg-purple-600 w-60 max-h-screen flex flex-col">
                        <div className="flex">
                            <div>
                                Navigation
                            </div>
                            <button>
                                <FaIcons.FaBars onClick={showSidebar} />
                            </button>
                        </div>

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
    );
};

export default Navbar;

