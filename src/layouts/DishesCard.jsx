import React from "react";
import Button from "./Button";

const DishesCard = (props) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg dark:bg-white dark:text-black">
      <img className="rounded-xl" src={props.img} alt="img" />
      <div className="space-y-4">
        <h3 className="font-semibold text-start text-3xl md:text-2xl pt-6">
          {props.title}
        </h3>
        <div className="flex flex-row items-center justify-between font-semibold gap-4 flex-wrap">
          <h3 className="text-start text-2xl">{props.price}</h3>
          <Button className="text-end" title="Order" />
        </div>
      </div>
    </div>
  );
};

export default DishesCard;
