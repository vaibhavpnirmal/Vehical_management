import React from "react";
import { VscArrowSwap } from "react-icons/vsc";
const Singlecard = ({
  month,day,
  form,
  to,
  startTime,
  endTime,
  name,
  licenseNumber,
  contact,
}) => {
  return (
    <div className="py-8 px-4 lg:w-1/3 border-2 bg-gradient-to-r from-yellow-500 via-red-500 ... ">
      <div className="h-full flex items-start">
        <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
          <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
            {month}
          </span>
          <span className="font-medium text-lg text-gray-800 title-font leading-none">
            {day}
          </span>
        </div>
        <div className="flex-grow pl-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
            Journey
          </h2>
          <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
            {form} <VscArrowSwap></VscArrowSwap> {to}
          </h1>
          <p className="leading-relaxed mb-5 flex flex-col">
           <h3><b>Time:</b></h3> 
          <h3>{startTime}</h3> 
          <h3>{endTime}</h3> 
          </p>
          <h1><b>Driver</b></h1>
          <a className="inline-flex items-center">
            <img
              alt="blog"
              src="https://dummyimage.com/103x103"
              className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
            />
            <span className="flex-grow flex flex-col pl-3">
              <span className="title-font font-medium text-gray-900">
                
                {name}
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Singlecard;
