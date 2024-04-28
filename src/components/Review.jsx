import React from "react";
import ReviewCard from "../layouts/ReviewCard";
import pic1 from "../assets/img/pic1.png";
import pic2 from "../assets/img/pic2.jpg";
import pic3 from "../assets/img/pic3.jpg";

const Review = () => {
  return (
    <section className="p-10  flex flex-col justify-center items-center md:px32 dark:bg-neutral-900">
      <h1 className="font-semibold text-center text-4xl pb-16 relative md:text-5xl dark:text-white">
        Custom Review
        <span className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-40 h-2 bg-bringhtColor"></span>
      </h1>

      <div className="flex flex-col gap-5 justify-center items-center mt-5 md:flex-row">
        <ReviewCard profile={pic1} name="Zara Robins" />
        <ReviewCard profile={pic2} name="Ross Geller" />
        <ReviewCard profile={pic3} name="Lara Aiden" />
      </div>
    </section>
  );
};

export default Review;
