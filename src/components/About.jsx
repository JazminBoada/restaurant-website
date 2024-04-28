import React from "react";
import Button from "../layouts/Button";

const About = () => {
  return (
    <article className="flex flex-col items-center justify-center p-20 text-white lg:flex-row lg:px-32 bg-[url('./assets/img/picture1.jpg')] bg-cover bg-no-repeat text-center">
      <div className="space-y-8 lg:pt-14">
        <h1 className="font-semibold text-5xl">Why Choose Us?</h1>
        <p className="text-lg font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          itaque, aperiam quis sint alias harum odio, vero aspernatur inventore
          voluptas consectetur iusto nihil repellendus facilis repellat autem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem alias sequi vitae repellat est voluptas, magnam quidem!
        </p>
        <p className="text-lg hidden lg:block font-semibold">
          Fugiat iure quasi. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Repudiandae necessitatibus laudantium animi tempora! Provident
          dignissimos.
        </p>
        <div className="flex justify-center font-semibold">
          <Button title="Learn More" />
        </div>
      </div>
    </article>
  );
};
export default About;
