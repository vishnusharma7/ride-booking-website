import React, { useState } from "react";
import img from "../assets/dirt-bike-01.jpg";
import { GiJourney } from "react-icons/gi";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { LuArrowLeftRight } from "react-icons/lu";
import { GiPikeman } from "react-icons/gi";

const Home = () => {
  const [fromCity, setFromCity] = useState({
    value: "mumbai",
    label: "Mumbai",
  });
  const [toCity, setToCity] = useState({ value: "pune", label: "Pune" });
  const [pickupDate, setPickupDate] = useState(new Date("2023-01-01"));
  const [pickupTime, setPickupTime] = useState("10:00");

  const cityOptions = [
    { value: "mumbai", label: "Mumbai" },
    { value: "pune", label: "Pune" },
    // Add more city options as needed
  ];

  const handleLetsRideClick = () => {
    // Perform actions when "Let's Ride" is clicked, e.g., navigate to the next page or send data to the server
    console.log("From City:", fromCity);
    console.log("To City:", toCity);
    console.log("Pickup Date:", pickupDate);
    console.log("Pickup Time:", pickupTime);
  };

  return (
    <>
      <div className="bg-secondary flex justify-center p-4">
        <div className="container flex-col space-y-4 items-center py-8 justify-center max-w-[1366px] mx-auto">
          <div className="flex text-white font-bold text-2xxl items-center justify-center">
            Enjoy Your Comfortable Ride in Affordable Price
          </div>

          <div className="flex space-x-8 justify-center bg-white w-fit p-2 rounded-md mx-auto">
            <div className="flex gap-2 items-center justify-center text-main  ">
              <GiJourney />
              One Way Trip
            </div>
            <div className="flex gap-2 items-center justify-center text-main">
              {" "}
              <GiJourney />
              One Way Trip
            </div>
            <div className="flex gap-2 items-center justify-center text-main">
              {" "}
              <GiJourney />
              One Way Trip
            </div>
          </div>

          <div className="flex w-fit bg-white px-10 py-12 rounded-md mx-auto cursor-pointer">
            <div className="flex gap-2 flex-wrap justify-center items-center border-2 rounded-md">
              <div className="flex gap-2 flex-nowrap ">
                <div className="p-2 pr-16 border-r-2">
                  <p className="text-sm ">FROM</p>
                  <Select
                    value={fromCity}
                    onChange={(selectedOption) => setFromCity(selectedOption)}
                    options={cityOptions}
                  />
                </div>
                <div className="flex items-center ">
                  <LuArrowLeftRight />
                </div>
                <div className="p-2 pr-16 border-r-2">
                  <p className="text-sm ">TO</p>
                  <Select
                    className="cursor-pointer"
                    value={toCity}
                    onChange={(selectedOption) => setToCity(selectedOption)}
                    options={cityOptions}
                  />
                </div>
              </div>
              <div className="p-2  border-r-2">
                <p className="text-sm ">PICKUP DATE</p>
                <DatePicker
                  className="cursor-pointer"
                  selected={pickupDate}
                  onChange={(date) => setPickupDate(date)}
                  dateFormat="dd MMM yyyy"
                />
              </div>
              <div className="p-2  pr-16 border-r-2">
                <p className="text-sm ">RETURN DATE</p>
                <div className="text-sm font-bold">
                  Add return date <br /> For bigger discount
                </div>
              </div>
              <div className="p-2  pr-16 ">
                <p className="text-sm">PICKUP TIME</p>
                <input
                  type="time"
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div
            className="flex w-fit bg-primary rounded-md  p-4 text-main uppercase mx-auto cursor-pointer   transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
            onClick={handleLetsRideClick}
          >
            {" "}
            Let's ride
          </div>
        </div>
      </div>
      <div className="bg-white flex justify-center p-4">
        <div className="container flex-col space-y-8 items-center py-8 justify-center max-w-[1366px] mx-auto">
          <div className="flex text-main font-bold text-2xl items-center justify-center">
            Why Choose Us?
          </div>
          <div className="flex gap-6 flex-wrap justify-center">
            <div className="flex-col justify-center items-center text-center ">
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
            <div className="flex-col justify-center items-center text-center ">
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
            <div className="flex-col justify-center items-center text-center ">
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
            <div className="flex-col justify-center items-center text-center ">
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
    </>
  );
};

export default Home;
