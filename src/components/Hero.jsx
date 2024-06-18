"use client";

import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <>
      <h1 className="text-5xl pt-5 font-bold tracking-tighter">
        Hi, I'm Danish.
      </h1>
      <div
        className="pt-1"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "I'm a Software Developer",
            800, // wait 1s before replacing "Mice" with "Hamsters"
            "I'm a UI Designer",
            800,
            "I'm a Product Manager",
            800,
            "I'm a Operations Specialist",
            800,
          ]}
          wrapper="span"
          speed={70}
          style={{
            fontSize: "3.5em",
            display: "inline-block",
            letterSpacing: "-0.05em",
          }}
          repeat={Infinity}
        />
      </div>
    </>
  );
};

export default Hero;
