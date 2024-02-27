import React from "react";
import { Input } from "./ui/input";

const CustomInputButtonWhite = ({ placeholder, onClick, name }) => {
  return (
    <Input
      name={name}
      className=" w-[400px] border-white border-b-primary placeholder:text-primary "
      placeholder={placeholder}
      onChange={(e) => onClick(e)}
    />
  );
};

export default CustomInputButtonWhite;
