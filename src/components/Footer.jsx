import React from "react";
import { PiPhoneCallFill } from "react-icons/pi";
const Footer = () => {
  return (
    <>
      <div className="bg-primary flex justify-center  p-16">
        <div className=" container flex-col  items-center   justify-center max-w-[1366px] mx-auto  ">
          <div className="flex justify-center text-sm font-bold text-main">
            Call 24 Hour Service Available
          </div>
          <div className=" flex justify-center text-center text-2xl font-bold text-main">
            Call Now & Book Your Taxi <br />
            For Your Next Ride
          </div>
          <div className=" flex items-center gap-1 justify-center text-center text-xl font-bold text-main">
            <PiPhoneCallFill /> (021) 111 444 90
          </div>
        </div>
      </div>
      <div className="bg-secondary flex justify-center ">
        <div className=" container flex-col  items-center   justify-center max-w-[1366px] mx-auto h-[250px]  "></div>
      </div>
    </>
  );
};

export default Footer;
