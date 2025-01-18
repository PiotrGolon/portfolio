"use client";
import { useState } from "react";
import MagicButtonUseToCopy from "./ui/magic-button-use-to-copy";
import { Vortex } from "./ui/vortex";
import { IoCopyOutline, IoCheckmarkOutline } from "react-icons/io5";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText("piotrek98golon@o2.pl");

    setCopied(true);

    const timeout = setTimeout(() => {
      setCopied(false);
    }, 5000);

    return () => clearTimeout(timeout);
  };

  return (
    <div className=" mx-auto rounded-md  h-[30rem] overflow-hidden px-5">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="gradient-text  text-2xl md:text-6xl font-bold text-center">
          Interested in my programming services?
        </h2>
        <p className="gradient-text text-sm md:text-2xl max-w-xl mt-6 text-center">
          Let&apos;s create something amazing together!
        </p>
        <MagicButtonUseToCopy
          icon={copied ? <IoCheckmarkOutline /> : <IoCopyOutline />}
          position="left"
          otherClasses="!bg-[#161a31] mt-8"
          handleClick={handleClick}
        >
          {copied ? "Email copied!" : "Copy an email"}
        </MagicButtonUseToCopy>
      </Vortex>
    </div>
  );
};

export default Footer;
