import React from "react";

const Button = ({ size, onClickFunction, text }) => {
  const handleClick = () => {
    onClickFunction(size);
  };

  return <button onClick={handleClick}>{text}</button>;
};

export default Button;
