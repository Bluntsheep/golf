import React from "react";
import { Input } from "./ui/input";

const CustomInputButton = ({ placeholder, onClick, name }) => {
  return (
    <Input
      name={name}
      className="w-[270px]  bg-primary border-none rounded-[50px]"
      placeholder={placeholder}
      onChange={(e) => onClick(e)}
    />
  );
};

export default CustomInputButton;
