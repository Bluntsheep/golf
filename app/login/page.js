"use client";

import CustomInputButtonWhite from "@/components/CustomInputButtonWhite";
import { Button } from "@/components/ui/button";
import React from "react";

const Login = () => {
  return (
    <div className=" w-screen h-screen">
      <div className=" container bg-[#08141A] h-[40dvh] pl-32 pt-40">
        <h1 className="text-primary font-light text-5xl">My Account Login</h1>
      </div>
      <div className=" flex flex-col gap-4 p-20 items-center ">
        <div className=" border-l-primary/35 pl-10 border-l-2">
          <h3 className=" mb-6 text-secondary/80">Login to your account</h3>
          <div>
            <p className=" text-secondary/70 text-xs">User Email:</p>
            <CustomInputButtonWhite
              name="loginEmail"
              placeholder="User Email"
              onClick={null}
            />
          </div>
          <div className=" mt-6">
            <p className=" text-secondary/70 text-xs">Password:</p>
            <CustomInputButtonWhite
              name="loginPassword"
              placeholder="Password"
              onClick={null}
            />
          </div>
          <p className=" text-xs mt-4 hover:text-blue-500">
            <a href="login">Forgot Password?</a>
          </p>
          <Button className=" w-[300px] my-5">Login</Button>
          <p className=" text-secondary/40">
            Dont have a account{" "}
            <span>
              <a
                href="login"
                className="text-secondary/60 font-semibold hover:text-secondary">
                Sign Up
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
