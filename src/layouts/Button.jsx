import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="px-6 py-1 border-2 border-bringhtColor text-bringhtColor hover:bg-bringhtColor hover:text-white transition-all rounded-full text">
        {props.title}
      </button>
    </div>
  );
};

export default Button;
