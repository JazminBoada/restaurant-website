import React from "react";

const ReviewCard = (props) => {
  return (
    <article className="w-full  bg-white border-2 border-lightText p-5  rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] md:w-1/3 lg:w-1/4 md:border-none dark:bg-white dark:text-black">
      <p className="text-lightText">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum a nihil
        laboriosam aliquam eaque voluptates placeat repellat perferendis
        adipisci assumenda aliquid aut ipsum ex eos ut, veritatis recusandae
        voluptas molestiae.
      </p>
      <section className="flex flex-row justify-center items-center gap-4 mt-4">
        <img className="rounded-full w-1/4" src={props.profile} alt="profile" />
        <h3 className="font-semibold text-center text-xl pt-6">
          {props.name}{" "}
        </h3>
      </section>
    </article>
  );
};

export default ReviewCard;
