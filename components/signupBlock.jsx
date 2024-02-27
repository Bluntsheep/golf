"use client";
import React, { useRef } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const SignupBlock = () => {
  const signUpEmail = useRef(null);

  //todo set up post of email to db

  const handleClick = () => {
    console.log(signUpEmail.current.value);
  };

  return (
    <div className=" items-center text-center ">
      <p className=" text-primary mb-3">Subscribe | Newsletter</p>
      <Input
        type="text"
        ref={signUpEmail}
        className=" bg-gray-300 rounded-[5px]"
        placeholder="Email:"
      />

      <Button onClick={handleClick} className=" rounded-3xl max-w-[200px] mt-5">
        SIGN UP
      </Button>
    </div>
  );
};

export default SignupBlock;
