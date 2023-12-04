import React from "react";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { GoSignIn } from "react-icons/go";
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
    <nav >
   
      <div className="bg-secondary flex justify-center  p-4">
        <div className="flex  items-center container  justify-between max-w-[1366px] mx-auto  ">
          <div>
            <a href="#" className="text-xs font-medium text-white">
              We provide the{" "}
              <span className="text-primary ">best Service & Discounts</span>{" "}
              for you
            </a>
          </div>
          <div className=" hidden md:flex justify-center items-center gap-2  ">
            <div className="flex gap-2">
              <CiMail className="text-white" />
              <div className="text-sm text-white hover:text-primary transition-all cursor-pointer">
                support@bombaytaxico.com
              </div>
            </div>
            <div className="flex gap-2">
              <IoCallOutline className="text-white" />
              <div className="text-sm text-white  hover:text-primary transition-all cursor-pointer">
                +91-6262-744-744
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:text-gray-300"
          >
            {isMenuOpen ? (
              <IoMdClose className="text-white" />
            ) : (
              <RiMenu3Fill className="text-white" />
            )}
          </button>
        </div>
      </div>
      <div className="bg-white flex justify-center  p-4 drop-shadow-2xl">
        <div className="flex  items-center container  justify-between max-w-[1366px] mx-auto  ">
        <a
          href="/"
          className="text-secondary font-bold cursor-pointer text-2xl"
        >
          Bombay Taxi Co<span className="text-primary">.</span>
        </a>
        <div className="flex gap-2 items-center uppercase font-bold cursor-pointer hover:text-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
          <GoSignIn className="text-secondary  " />
          Login
        </div>
      </div>
      </div>
      </nav>
    </>
  );
};

export default Header;
