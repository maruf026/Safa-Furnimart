import { Link, NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";

import { useState } from "react";



const menuItems = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/shop",
    label: "Shop",
  },
  {
    path: "/about",
    label: "About",
  },
  {
    path: "/contact",
    label: "Contact",
  },
];
function NavItems({toggleMenu}) {
  return <ul className="flex flex-col md:flex-row md:space-x-8 gap-8">
    {
        menuItems.map((item, i)=>(
            <li onClick={toggleMenu} key={i}>
                <NavLink className={({ isActive}) =>
                      isActive
                        ? "text-primary font-bold"
                        
                       
                        : "hover:text-primary"
                    } to={item.path}>{item.label}</NavLink>
            </li>
        ))
    }
  </ul>;
}

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    function toggleMenu(){
        setIsOpen(prev=> !prev)
    }
  return (
    <header>
      <nav className="container max-w-screen-[1424px] mx-auto flex justify-between md:justify-around items-center py-6 px-4">
        {/* logo */}
        <Link className="font-bold" to="/">Safa</Link>

          {/* mobile menu */}
          <div onClick={toggleMenu} className="md:hidden text-xl cursor-pointer hover:text-primary">
            {
                isOpen? null  :  <FaBars/>
            }
          </div>
        {/*desktop menu items */}
        <div className="hidden md:flex"><NavItems/></div>

        {/* mobile menu items */}
        <div className={`fixed top-0 left-0 w-70 h-screen bg-black/80 flex flex-col items-center justify-center space-y-8 text-white transition-transform transform ${isOpen? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
            <div onClick={toggleMenu} className="absolute top-4 right-4 text-2xl cursor-pointer ">
                <MdOutlineClose/>
            </div>
            <NavItems toggleMenu={toggleMenu}/>
        </div>

        {/* cart icon */}
        <div className="hidden md:block cursor-pointer relative">
            <FaCartShopping className="text-xl"/>
            <sup className="absolute top-0 -right-3 bg-primary text-white h-5 w-5 rounded-full flex justify-center items-center text-xs">0</sup>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
