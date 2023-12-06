import React from "react";
import { GiPikeman } from "react-icons/gi";

const About = () => {
  return (
    <>
      <div className=" flex items-center justify-center p-4 ">
        <div className="container flex-col  items-center py-8 justify-center max-w-[1366px] mx-auto">
          <div className="flex ">
            <div className="flex-col space-y-2 flex-1">
              <h1 className="text-2xxl font-bold">About Bombay Taxi Company</h1>
              <p>We have been providing the best transportation service for over 7 years. We offer one-way taxi, outstation taxi, local, corporate car hire, airport transfer and bus service</p>
              <p>Bombay Taxi Company is an experienced and ready-to-ride premium car rental service with the most affordable and competitive prices in India. We are always looking for new ideas to improve our service for new and long-term customers. Bombay Taxi Company is always at the forefront of improving customer service and adopting new ideas and features to make our customers happy while they are with us.</p>
            <p>We have a large fleet of company-owned vehicles & our tenant’s vehicles, Which are all highly maintained & with latest features which gives the best experience of the ride to our valuable customers.</p>
            </div>
            <div className="flex justify-center items-end flex-1 rounded-md">
              <img className="rounded-md" src="/src/assets/Image-3.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white flex justify-center p-4">
        <div className="container flex-col space-y-8 items-center py-8 justify-center max-w-[1366px] mx-auto">
          <div className="flex text-main font-bold text-2xl items-center justify-center">
            Why Choose Us?
          </div>
          <div className="flex gap-8 flex-wrap justify-center">
            <div className="flex-col p-4 justify-center items-center text-center ">
              <div className="flex  items-center justify-center bg-gray-200 hover:bg-secondary p-4 w-fit mx-auto rounded-full transition ease-in-out delay-150 text-main hover:text-white  cursor-pointer">
                <GiPikeman className=" " />
              </div>
              <p className="text-xl font-bold text-main">
                Professional Drivers.
              </p>
              <div className="text-base text-main">
                Experienced Staff & <br />
                Professionally trained <br />
                Chauffers
              </div>
            </div>
            <div className="flex-col p-4 justify-center items-center text-center ">
              <div className="flex items-center justify-center bg-gray-200 hover:bg-secondary p-4 w-fit mx-auto rounded-full transition ease-in-out delay-150 text-main hover:text-white  cursor-pointer">
                <GiPikeman className=" " />
              </div>
              <p className="text-xl font-bold text-main">
                Professional Drivers.
              </p>
              <div className="text-base text-main">
                Experienced Staff & <br />
                Professionally trained <br />
                Chauffers
              </div>
            </div>
            <div className="flex-col p-4 justify-center items-center text-center ">
              <div className="flex items-center justify-center bg-gray-200 hover:bg-secondary p-4 w-fit mx-auto rounded-full transition ease-in-out delay-150 text-main hover:text-white  cursor-pointer">
                <GiPikeman className=" " />
              </div>
              <p className="text-xl font-bold text-main">
                Professional Drivers.
              </p>
              <div className="text-base text-main">
                Experienced Staff & <br />
                Professionally trained <br />
                Chauffers
              </div>
            </div>
            <div className="flex-col p-4 justify-center items-center text-center ">
              <div className="flex items-center justify-center bg-gray-200 hover:bg-secondary p-4 w-fit mx-auto rounded-full transition ease-in-out delay-150 text-main hover:text-white  cursor-pointer">
                <GiPikeman className=" " />
              </div>
              <p className="text-xl font-bold text-main">
                Professional Drivers.
              </p>
              <div className="text-base text-main">
                Experienced Staff & <br />
                Professionally trained <br />
                Chauffers
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-8">
        <img className="w-[100%]" src="/src/assets/image-4.png" alt="" />
      </div>
    </>
  );
};

export default About;
