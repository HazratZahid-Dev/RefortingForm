import React from "react";
import { useNavigate } from "react-router-dom";

const Submit = () => {
  const navigate=useNavigate()
  const handleBack6=()=>{
    navigate('/')

  }
  return (
    <div className="w-[70%] m-auto rounded-md p-4 mt-4 border shadow-sm">
      <div className="flex">
        <div className="w-1/2">
          <div className="flex flex-col gap-y-2">
            <p className="font-semibold text-[#737475]">
              Address:{" "}
              <span className="text-sm font-normal">
                13 Manchester Road, Swindon, SN1 2AB
              </span>
            </p>
            <p className="font-semibold text-[#737475]">
              Title: <span className="text-sm font-normal">Lorem ipsum</span>
            </p>
            <p className="font-semibold text-[#737475]">
              Full Name:{" "}
              <span className="text-sm font-normal">Hazrat Zahid</span>
            </p>
            <p className="font-semibold text-[#737475]">
              Contact: <span className="text-sm font-normal">+44 12345678</span>
            </p>
            <p className="font-semibold text-[#737475]">
              Email:{" "}
              <span className="text-sm font-normal">aliakbar@hotmail.com</span>
            </p>
            <p className="font-semibold text-[#737475]">
              Issue:{" "}
              <span className="text-sm font-normal">
                {`  No Electricity > Entire Property > Main switch`}
              </span>
            </p>
          </div>
        </div>
        <div className="w-1/2">
          <h2 className="text-lg font-semibold text-[#737475]">Attachments:</h2>
          <div className="flex gap-x-3 justify-center">
            <div className="border w-16 h-16  rounded-md"></div>
            <div className="border w-16 h-16  rounded-md"></div>
            <div className="border w-16 h-16  rounded-md"></div>
          </div>
          <h2 className="text-lg font-semibold text-[#737475]">Description:</h2>
          <p className="text-sm text-[#737475]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet.
          </p>
          <div className="flex items-center gap-x-4 mt-2">
            <div>
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-green-500"
              />
            </div>
            <label className="text-sm text-[#737475]">
              I agree with the{" "}
              <span className="text-sm font-semibold text-[#737475]">
                Terms & Conditions
              </span>
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-around py-2 ">
        <button
          onClick={handleBack6}
          type="button"
          className="bg-[#FE1B1B] !outline-none text-white font-semibold px-12 py-2 rounded-md"
        >
          Cancel
        </button>
        <button
          // onClick={handleSubmit}
          type="button"
          className="bg-[#38BF67] !outline-none text-white font-semibold px-12 py-2 rounded-md"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Submit;
