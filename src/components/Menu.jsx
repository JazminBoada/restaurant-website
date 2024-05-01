import React from "react";
import DishesCard from "../layouts/DishesCard";
import Button from "../layouts/Button";
import menu1 from "../assets/img/menu1.jpg";
import menu2 from "../assets/img/menu2.jpg";
import menu3 from "../assets/img/menu3.jpg";

const Menu = () => {
  return (
    <section className="p-10  flex flex-col justify-center items center lg:px-32 px-5 dark:bg-neutral-900 dark:text-white ">
      <h1 className="font-semibold text-center text-5xl  pb-16 relative">
        Special of the Day
        <span className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-40 h-2 bg-bringhtColor"></span>
      </h1>
      <div className="flex flex-wrap gap-8 justify-center">
        <DishesCard img={menu1} title="Chicken Wings" price="$16.99" />
        <DishesCard img={menu2} title="Chinese Rice" price="$15.99" />
      </div>
    </section>
  );
};

export default Menu;
