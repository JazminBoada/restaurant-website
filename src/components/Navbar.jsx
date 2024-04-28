import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { BiRestaurant, BiChevronDown } from "react-icons/bi";
import Button from "../layouts/Button";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const [theme, setTheme] = useState("light");
  const [icon, setIcon] = useState(<MdSunny size={28} />);

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
      setIcon(<FaMoon size={23} className="text-white" />);
    } else {
      document.querySelector("html").classList.remove("dark");
      setIcon(<MdSunny size={28} />);
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <header className="fixed w-full z-10">
      <div>
        <div className="flex flex-row justify-between p-5 md:px-32  bg-white shadow dark:bg-neutral-900 dark:text-white">
          <div className="flex flex-row items-center cursor-pointer">
            <span>
              <BiRestaurant size={32} />
            </span>
            <h1 className="text-xl font-semibold">Let's Foodie</h1>
          </div>

          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-bringhtColor transition-all cursor-pointer"
            >
              Home
            </Link>

            <div className="relative group">
              <div className="flex items-center gap-1">
                <Link
                  to="dishes"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-bringhtColor transition-all cursor-pointer"
                >
                  Dishes
                </Link>
                <BiChevronDown className="curser-pointer" size={25} />
              </div>

              <ul className="absolute hidden space-y-2 group-hover:block bg-white border border-gray-100 rounded-lg p-5 dark:bg-neutral-900 dark:text-white dark:border-0 ">
                <li className="hover:text-bringhtColor transition-all cursor-pointer">
                  Spicy
                </li>
                <li className="hover:text-bringhtColor transition-all cursor-pointer">
                  Tasty
                </li>
                <li className="hover:text-bringhtColor transition-all cursor-pointer">
                  Delicius
                </li>
              </ul>
            </div>

            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-bringhtColor transition-all cursor-pointer"
            >
              About
            </Link>
            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-bringhtColor transition-all cursor-pointer"
            >
              Menu
            </Link>
            <Link
              to="reviews"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-bringhtColor transition-all cursor-pointer"
            >
              Reviews
            </Link>

            <Button title="Login" />
          </nav>

          {/* Menu desplegable */}

          <div className="md:hidden flex items-center hover:text-bringhtColor transition-all">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </div>

        <div
          className={` ${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute backdrop-blur-md bg-black/30 text-white left-0 top-25 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-bringhtColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="dishes"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-bringhtColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Dishes
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-bringhtColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-bringhtColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Menu
          </Link>
          <Link
            to="reviews"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-bringhtColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Reviews
          </Link>
          <Button title="Login" />
        </div>
        <button
          className="absolute right-12 md:size-9 md:right-5 top-6 bg-transparent "
          onClick={handleChangeTheme}
        >
          {icon}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
