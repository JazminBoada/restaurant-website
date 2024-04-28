import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-orange-700 text-white dark:bg-neutral-800 dark:text-white">
      <section className="flex flex-col justify-evenly pt-8 px-5 items-center text-center md:flex-row md:pb-4 md:text-start">
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-xl pb-4 pt-5 md:pt-8">
            Let's Foodie
          </h1>
          <p className="text-sm">
            Indulge in a symphony of flavors, where each plate is a canvas for
            culinary excellence.
          </p>
        </div>

        <div>
          <h1 className="font-semibold text-xl pb-4 pt-5 md:pt-8">Links</h1>
          <nav className="flex flex-col gap-2 md:flex-row">
            <a
              className="hover:text-black transition-all cursor-pointer dark:hover:text-bringhtColor"
              href="/"
            >
              Dishes
            </a>
            <a
              className="hover:text-black transition-all cursor-pointer dark:hover:text-bringhtColor"
              href="/"
            >
              About
            </a>
            <a
              className="hover:text-black transition-all cursor-pointer dark:hover:text-bringhtColor"
              href="/"
            >
              Menu
            </a>
            <a
              className="hover:text-black transition-all cursor-pointer dark:hover:text-bringhtColor"
              href="/"
            >
              Reviews
            </a>
          </nav>
        </div>

        <div>
          <h1 className="font-semibold text-xl pb-4 pt-5 ">Social Media</h1>
          <div className="flex flex-row gap-2 text-2xl cursor-pointer justify-center md:justify-start">
            <AiFillFacebook className="hover:text-black transition-all dark:hover:text-bringhtColor" />
            <AiFillInstagram className="hover:text-black transition-all dark:hover:text-bringhtColor" />
            <IoLogoWhatsapp className="hover:text-black transition-all dark:hover:text-bringhtColor" />
          </div>
        </div>
      </section>
      <div className="text-sm pt-8 text-center">
        <p>Copyright &copy; 2024</p>
      </div>
    </div>
  );
};

export default Footer;
