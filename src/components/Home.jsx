import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <section className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/hero.jpg')] bg-cover bg-no-repeat">
      <div className="w-full lg:w-2/3 space-y-5">
        <h1 className="text-white font-semibold text-6xl lg:text-8xl">
          Elevate Your Inner Foodie with Every Bite.
        </h1>
        <p className="text-white text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui saepe
          voluptatum at soluta fugiat voluptate velit harum commodi, quam iste
          quasi numquam provident quidem dolore.
        </p>
        <div>
          <Button title="Orden Now" />
        </div>
      </div>
    </section>
  );
};

export default Home;
