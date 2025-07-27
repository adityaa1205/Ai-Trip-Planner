import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col items-center mx-56 gap-9 ">
      <h1 className="font-extrabold text-[60px] text-center mt-16">
        <span className="text-[#f56551]">
          Discover Your Next Adventure with Al:
        </span>{" "}
        Personalized Itineraries at Your Fingertips
      </h1>
      <p className="text-xl text-gray-500 text-center">
        Your personal trip planner and travel curator. creating custom
        itineraxes tailored to your interests and budget.
      </p>

      <Link to={"/create-trip"}>
        <Button>Get Started.. It's Free</Button>
      </Link>

      <img
        src="/landing2.png"
        alt=""
        className="w-[750px] rounded-2xl m-25 transition-transform duration-300 hover:scale-105 shadow-lg"
      />
    </div>
  );
};

export default Hero;
