import React from "react";
import DishesCard from "../layouts/DishesCard";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img5 from "../assets/img/img5.jpg";
import img6 from "../assets/img/img6.jpg";

const Dishes = () => {
  return (
    <section className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 dark:bg-neutral-900 dark:text-white mt-0 pt-0">
      <h1 className="font-semibold text-center text-5xl pt-20 pb-16 relative">
        Our Dishes
        <span className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-40 h-2 bg-bringhtColor"></span>
      </h1>
      <div className="flex flex-col md:flex-row flex-wrap gap-8 justify-center items-center">
        <DishesCard img={img1} title="Pesto Noodles" price="$10.99" />
        <DishesCard img={img2} title="Chicken" price="$12.99" />
        <DishesCard img={img3} title="Tomato Sauce Noodles" price="$10.99" />
        <DishesCard img={img4} title="Nachos" price="$11.99" />
        <DishesCard img={img5} title="Vegetables" price="$10.99" />
        <DishesCard img={img6} title="Caesar Salad" price="$8.99" />
      </div>
    </section>
  );
};

export default Dishes;
