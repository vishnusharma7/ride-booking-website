import React, { useState } from "react";
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
      <div className="bg-secondary flex items-center justify-center p-4 h-[600px]">
        <div className="container flex-col  items-center py-8 justify-center max-w-[1366px] mx-auto">
          <div className="flex mb-16 text-white font-bold text-2xxl items-center justify-center">
            Enjoy Your Comfortable Ride in Affordable Price
          </div>

          <div className="flex mb-[-25px] space-x-20 justify-center bg-white w-fit py-4 px-8 rounded-md mx-auto  drop-shadow-md">
            <div className="flex gap-2 items-center justify-center text-main  ">
              <GiJourney />
              One-Way-Trip
            </div>
            <div className="flex gap-2 items-center justify-center text-main">
              {" "}
              <GiJourney />
              Round Trip
            </div>
            <div className="flex gap-2 items-center justify-center text-main">
              {" "}
              <GiJourney />
              Hourly Rental
            </div>
          </div>

          <div className="flex w-fit bg-white px-10 py-14 rounded-md mx-auto cursor-pointer">
            <div className="flex gap-2 flex-wrap justify-center items-center border rounded-md">
              <div className="flex gap-2 flex-nowrap ">
                <div className="p-2 ">
                  <p className="text-sm ">FROM</p>
                  <Select
                    className="font-bold"
                    value={fromCity}
                    onChange={(selectedOption) => setFromCity(selectedOption)}
                    options={cityOptions}
                    styles={{
                      control: (provided) => ({
                        ...provided,
                        border: "none", // Removes the border
                      }),
                    }}
                  />
                </div>
                <div className="flex items-center ">
                  <LuArrowLeftRight />
                </div>
                <div className="p-2 pr-8 border-r-2">
                  <p className="text-sm ">TO</p>
                  <Select
                    className="cursor-pointer font-bold"
                    value={toCity}
                    onChange={(selectedOption) => setToCity(selectedOption)}
                    options={cityOptions}
                    styles={{
                      control: (provided) => ({
                        ...provided,
                        border: "none", // Removes the border
                      }),
                    }}
                  />
                </div>
              </div>
              <div className="p-2  border-r-2">
                <p className="text-sm ">PICKUP DATE</p>
                <DatePicker
                  className="cursor-pointer font-bold"
                  selected={pickupDate}
                  onChange={(date) => setPickupDate(date)}
                  dateFormat="dd MMM yyyy"
                />
              </div>
              <div className="p-2  pr-8 border-r-2">
                <p className="text-sm ">RETURN DATE</p>
                <div className="text-sm font-bold">
                  Add return date <br /> For bigger discount
                </div>
              </div>
              <div className="p-2  pr-8 ">
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
            className="flex w-fit  bg-primary rounded-md font-bold  p-4 text-main uppercase mx-auto cursor-pointer   transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 mt-[-25px]"
            onClick={handleLetsRideClick}
          >
            Let's ride
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
      <div className="bg-white flex justify-center p-4">
        <div className="container flex-col space-y-8 items-center py-8 justify-center max-w-[1366px] mx-auto">
          <div className="flex text-main font-bold text-2xl items-center justify-center">
            Popular Packages
          </div>
          <div className="flex justify-center gap-8 flex-wrap  ">
            <div className="flex-col max-w-[340px] border rounded-lg">
              <img src="/src/assets/image-1.png" alt="" />
              <div className="flex-col gap-1 p-2">
                <div>Cabs From Agra To</div>
                <div className="flex justify-between">
                  <p>New Delhi</p>
                  <p>552km (6hr 53)</p>
                </div>
                <div className="flex justify-between">
                  <p>New Delhi</p>
                  <p>552km (6hr 53)</p>
                </div>
                <div className="flex justify-between">
                  <p>New Delhi</p>
                  <p>552km (6hr 53)</p>
                </div>
                <div className="flex justify-between">
                  <p>New Delhi</p>
                  <p>552km (6hr 53)</p>
                </div>
                <div className="flex justify-between">
                  <p>New Delhi</p>
                  <p>552km (6hr 53)</p>
                </div>
              </div>
            </div>
            <div className="flex-col max-w-[340px] border rounded-lg">
              <img src="/src/assets/image-1.png" alt="" />
              <div className="flex-col gap-1 p-2">
                <div>Cabs From Agra To</div>
                <div className="flex justify-between">
                  <p>New Delhi</p>
                  <p>552km (6hr 53)</p>
                </div>
                <div className="flex justify-between">
                  <p>New Delhi</p>
                  <p>552km (6hr 53)</p>
                </div>
                <div className="flex justify-between">
                  <p>New Delhi</p>
                  <p>552km (6hr 53)</p>
                </div>
                <div className="flex justify-between">
                  <p>New Delhi</p>
                  <p>552km (6hr 53)</p>
                </div>
                <div className="flex justify-between">
                  <p>New Delhi</p>
                  <p>552km (6hr 53)</p>
                </div>
              </div>
            </div>
            <div className="flex-col max-w-[340px] border rounded-lg">
              <img src="/src/assets/image-1.png" alt="" />
              <div className="flex-col gap-1 p-2">
                <div>Cabs From Agra To</div>
                <div className="flex justify-between">
                  <p>New Delhi</p>
                  <p>552km (6hr 53)</p>
                </div>
                <div className="flex justify-between">
                  <p>New Delhi</p>
                  <p>552km (6hr 53)</p>
                </div>
                <div className="flex justify-between">
                  <p>New Delhi</p>
                  <p>552km (6hr 53)</p>
                </div>
                <div className="flex justify-between">
                  <p>New Delhi</p>
                  <p>552km (6hr 53)</p>
                </div>
                <div className="flex justify-between">
                  <p>New Delhi</p>
                  <p>552km (6hr 53)</p>
                </div>
              </div>
            </div>
            <div className="flex-col max-w-[340px] border rounded-lg">
              <img src="/src/assets/image-1.png" alt="" />
              <div className="flex-col gap-1 p-2">
                <div>Cabs From Agra To</div>
                <div className="flex justify-between">
                  <p>New Delhi</p>
                  <p>552km (6hr 53)</p>
                </div>
                <div className="flex justify-between">
                  <p>New Delhi</p>
                  <p>552km (6hr 53)</p>
                </div>
                <div className="flex justify-between">
                  <p>New Delhi</p>
                  <p>552km (6hr 53)</p>
                </div>
                <div className="flex justify-between">
                  <p>New Delhi</p>
                  <p>552km (6hr 53)</p>
                </div>
                <div className="flex justify-between">
                  <p>New Delhi</p>
                  <p>552km (6hr 53)</p>
                </div>
              </div>
            </div>
            <div className="flex-col max-w-[340px] border rounded-lg">
              <img src="/src/assets/image-1.png" alt="" />
              <div className="flex-col gap-1 p-2">
                <div>Cabs From Agra To</div>
                <div className="flex justify-between">
                  <p>New Delhi</p>
                  <p>552km (6hr 53)</p>
                </div>
                <div className="flex justify-between">
                  <p>New Delhi</p>
                  <p>552km (6hr 53)</p>
                </div>
                <div className="flex justify-between">
                  <p>New Delhi</p>
                  <p>552km (6hr 53)</p>
                </div>
                <div className="flex justify-between">
                  <p>New Delhi</p>
                  <p>552km (6hr 53)</p>
                </div>
                <div className="flex justify-between">
                  <p>New Delhi</p>
                  <p>552km (6hr 53)</p>
                </div>
              </div>
            </div>
            <div className="flex-col max-w-[340px] border rounded-lg">
              <img src="/src/assets/image-1.png" alt="" />
              <div className="flex-col gap-1 p-2">
                <div>Cabs From Agra To</div>
                <div className="flex justify-between">
                  <p>New Delhi</p>
                  <p>552km (6hr 53)</p>
                </div>
                <div className="flex justify-between">
                  <p>New Delhi</p>
                  <p>552km (6hr 53)</p>
                </div>
                <div className="flex justify-between">
                  <p>New Delhi</p>
                  <p>552km (6hr 53)</p>
                </div>
                <div className="flex justify-between">
                  <p>New Delhi</p>
                  <p>552km (6hr 53)</p>
                </div>
                <div className="flex justify-between">
                  <p>New Delhi</p>
                  <p>552km (6hr 53)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mb-[100px] justify-center items-center w-[100%] relative ">
      <img className="w-full opacity-100 " src="/src/assets/Image-2.png" alt="" />
  <div className="absolute inset-0 flex justify-center items-center">
    {/* Text content */}
    <div className="flex-col justify-center items-center z-10">
      <div className="text-2xl font-bold text-white">
        We Are Experienced Since 1992 Until Now
      </div>
    </div>
</div>

        <div className="flex w-fit  mt-[400px] bg-white px-10 py-14 rounded-md mx-auto border border-black  cursor-pointer absolute">
          <div className="flex space-x-[8em] flex-wrap justify-center items-center rounded-md">
            <div className="flex-col justify-center items-center">
              <div className="flex justify-center text-2xxl font-bold">
                124 <span className="text-primary">+</span>
              </div>
              <p>Yeats of Experience</p>
            </div>
            <div className="flex-col justify-center items-center">
              <div className="flex justify-center text-2xxl font-bold">
                124 <span className="text-primary">+</span>
              </div>
              <p>Yeats of Experience</p>
            </div>
            <div className="flex-col justify-center items-center">
              <div className="flex justify-center text-2xxl font-bold">
                124 <span className="text-primary">+</span>
              </div>
              <p>Yeats of Experience</p>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Home;
