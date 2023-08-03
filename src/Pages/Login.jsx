import React, { useRef, useState } from "react";
import dashboard from "../images/substraction.png";
import home from "../images/properties.png";
import entire from "../images/entire.png";
import chair from "../images/chair.png";
import none from "../images/none.png";
import Mainswitch from "../images/Mainswitch.png";

import { CiSearch } from "react-icons/ci";
import { AiOutlineExclamationCircle, AiOutlinePlus } from "react-icons/ai";
import siteLogo from "../images/siteLogo.png";
import Popover from "@mui/material/Popover";
import { BsThreeDots } from "react-icons/bs";

import LoginData from "../Config/LoginData";
import CategoriesData from "../Config/CategoryDetail";
const Login = () => {
  const [ria, setRia] = useState(true);
  const [address, setadress] = useState(false);
  const [findAddress, setfindAddress] = useState(true);
  const [form, setForm] = useState(false);
  const [describe, setDescribe] = useState(false);
  const [three, setThree] = useState(false);
  const [secondThree, setSecondThree] = useState(false);
  const [upload, setUpload] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [set, setSet] = useState();
  console.log(set);

  const handleRAI = () => {
    setRia(false);
    setadress(true);
  };
  //POpover
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFindAddress = () => {
    setfindAddress(false);
    setForm(true);

    // setadress(false);
  };

  const handleBack = () => {
    setfindAddress(true);
    setForm(false);
  };
  const handleBack1 = () => {
    setfindAddress(false);
    setForm(true);
    setNext(false);
  };
  const handleBack2 = () => {
    setfindAddress(false);
    setForm(false);
    setNext(true);
    setDescribe(false);
  };
  const handleBack3 = () => {
    setfindAddress(false);
    setForm(false);
    setNext(false);
    setDescribe(true);
    setThree(false);
  };
  const handleBack4 = () => {
    setfindAddress(false);
    setForm(false);
    setNext(false);
    setDescribe(false);
    setThree(true);
    setSecondThree(false);
  };
  const handleBack5 = () => {
    setfindAddress(false);
    setForm(false);
    setNext(false);
    setDescribe(false);
    setThree(false);
    setSecondThree(true);
    setUpload(false);
  };
  const handleBack6 = () => {
    setfindAddress(false);
    setForm(false);
    setNext(false);
    setDescribe(false);
    setThree(false);
    setSecondThree(false);
    setUpload(false);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [next, setNext] = useState(null);

  const handleNext = () => {
    setfindAddress(false);
    setForm(false);
    setNext(true);
  };

  const handleDescribe = () => {
    setfindAddress(false);
    setForm(false);
    setNext(false);
    setDescribe(true);
  };

  const handShowthree = () => {
    setfindAddress(false);
    setForm(false);
    setNext(false);
    setDescribe(false);
    setThree(true);
  };
  const handShowthreeSecond = () => {
    setfindAddress(false);
    setForm(false);
    setNext(false);
    setDescribe(false);
    setThree(false);
    setSecondThree(true);
  };
  const handShowUpload = () => {
    setfindAddress(false);
    setForm(false);
    setNext(false);
    setDescribe(false);
    setThree(false);
    setSecondThree(false);
    setUpload(true);
  };
  const handleSubmit = () => {
    setfindAddress(false);
    setForm(false);
    setNext(false);
    setDescribe(false);
    setThree(false);
    setSecondThree(false);
    setUpload(false);
    setSubmit(true);
  };

  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const waterLeakData = CategoriesData.filter(
    (item) => item.cate === "waterLeak"
  );
  const kitchenData = CategoriesData.filter((item) => item.cate === "kitchen");
  const whiteGoodsData = CategoriesData.filter(
    (item) => item.cate === "whiteGoods"
  );
  const garagData = CategoriesData.filter((item) => item.cate === "garag");
  const bathroomData = CategoriesData.filter(
    (item) => item.cate === "bathroom"
  );
  const alarmData = CategoriesData.filter((item) => item.cate === "alarm");
  const lostKeysData = CategoriesData.filter((item) => item.cate === "lostKey");
  const gardenData = CategoriesData.filter((item) => item.cate === "garden");
  const pestData = CategoriesData.filter((item) => item.cate === "pest");
  const wallData = CategoriesData.filter((item) => item.cate === "garden");
  const hallData = CategoriesData.filter((item) => item.cate === "hall");
  const windowData = CategoriesData.filter((item) => item.cate === "window");

  const [showdetail, setShowDetail] = useState(false);

  const handleCategory = () => {
    setShowDetail(true);
    setDescribe(true);
  };

  return (
    <div className="w-full">
      <div className="w-full">
        
        {/* {ria && (
          <div className="flex items-center justify-around px-12 py-12 ">
            <div className="w-56 ">
              <img src={siteLogo} className="w-full h-full"></img>
            </div>
            <div className="flex flex-col">
              <button
                type="button"
                onClick={handleRAI}
                className="bg-[#38bf67] !outline-none px-12 rounded-md text-white text-3xl py-2 font-bold font-[Roboto]"
              >
                Report an Issue
              </button>
              <button
                type="button"
                className="text-[#38bf67] mt-3 !outline-none border-2 border-[#38bf67] px-12 rounded-md  text-3xl py-2 font-bold font-[Roboto]"
              >
                Report an Issue
              </button>
            </div>
          </div>
        )} */}

        {address && (
          <>
            <div className="px-5">
             
              <div className="border  rounded-md shadow-sm px-12 py-4">
                {findAddress && (
                  <div>
                    <div className="border rounded-md  flex">
                      <input
                        type="text"
                        placeholder="Post Code "
                        className="px-3 py-2 w-full rounded-md"
                      ></input>
                      <div
                        onClick={handleClick}
                        className="flex items-center justify-center  border-l px-3"
                      >
                        <CiSearch className="text-xl" />
                      </div>
                      <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                      >
                        <div className="py-2 px-1">
                          <p className="hover:bg-[#407c1e] hover:text-white text-sm cursor-pointer px-2">
                            13 Manchester Road, Swindon, SN1 2AB{" "}
                          </p>
                          <p className="hover:bg-[#407c1e] hover:text-white text-sm cursor-pointer px-2">
                            13 Manchester Road, Swindon, SN1 2AB{" "}
                          </p>
                          <p className="hover:bg-[#407c1e] hover:text-white text-sm cursor-pointer px-2">
                            13 Manchester Road, Swindon, SN1 2AB{" "}
                          </p>
                          <p className="hover:bg-[#407c1e] hover:text-white text-sm cursor-pointer px-2">
                            13 Manchester Road, Swindon, SN1 2AB{" "}
                          </p>
                        </div>
                      </Popover>
                    </div>
                    <button
                      type="button"
                      onClick={handleFindAddress}
                      className="bg-[#38bf67] mt-3 !outline-none px-4 rounded-md text-white text-lg py-2 font-semibold font-[]"
                    >
                      Find Address
                    </button>
                    <br />
                    <button
                      type=""
                      className="text-blue-500 text-sm underline !outline-none mt-3"
                    >
                      Enter Detail Manuali
                    </button>
                  </div>
                )}
                {form && (
                 
                )}

                {next && (
                  <>
                    <input
                      type="text"
                      className="border rounded-md py-2 w-full px-3"
                      placeholder="Title "
                    ></input>
                    <div className="flex gap-x-4 mt-3">
                      <input
                        type="text"
                        className="border rounded-md py-2 w-full px-3"
                        placeholder="First Name "
                      ></input>
                      <input
                        type="text"
                        className="border rounded-md py-2 w-full px-3"
                        placeholder="Last Name "
                      ></input>
                    </div>
                    <div className="flex gap-x-4 mt-3">
                      <input
                        type="text"
                        className="border rounded-md py-2 w-full px-3"
                        placeholder="Contact "
                      ></input>
                      <input
                        type="email"
                        className="border rounded-md py-2 w-full px-3"
                        placeholder="Email "
                      ></input>
                    </div>
                    <div className="flex justify-between mt-3">
                      <button
                        onClick={handleBack1}
                        type="button"
                        className="bg-[#FE1B1B] !outline-none text-white font-semibold px-12 py-2 rounded-md"
                      >
                        Back
                      </button>
                      <button
                        onClick={handleDescribe}
                        type="button"
                        className="bg-[#38BF67] !outline-none text-white font-semibold px-12 py-2 rounded-md"
                      >
                        Next
                      </button>
                    </div>
                  </>
                )}
                {describe && (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-8 gap-4">
                      {LoginData.map((item, index) => (
                        <div
                          key={index}
                          className={`border w-28 h-28 flex py-2 items-center justify-center shadow-sm rounded-md ${
                            activeIndex === index
                              ? "bg-green-200 border-2 border-green-600"
                              : "hover:bg-green-200 hover:border-2 hover:border-green-600"
                          }`}
                          onClick={() => setActiveIndex(index)}
                        >
                          <div
                            onClick={handleCategory}
                            className="flex flex-col justify-center items-center"
                          >
                            <div className="w-14 flex items-center justify-center h-14">
                              <img
                                src={item.img}
                                alt="item"
                                className="object-fill"
                              />
                            </div>
                            <p
                              className={`text-[#737475] text-center font-semibold font-[Roboto] text-sm ${
                                activeIndex === index ? "text-green-600" : ""
                              }`}
                            >
                              {item.text}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {showdetail && (
                      <div className="flex items-center gap-x-6">
                        {waterLeakData.map((item) => (
                          <div className="w-32 rounded-md bg-slate-100 h-32 border flex flex-col items-center hover:bg-green-200 hover:border-2 hover:border-green-600 justify-center">
                            <img src={item.icons} className=" w-16 h-12  " />
                            <p className="text-sm text-center font-semibold text-[#737475]">
                              {item.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex justify-around mt-4">
                      <button
                        onClick={handleBack2}
                        type="button"
                        className="bg-[#FE1B1B] !outline-none text-white font-semibold px-12 py-2 rounded-md"
                      >
                        Back
                      </button>
                      <button
                        onClick={handShowthree}
                        type="button"
                        className="bg-[#38BF67] !outline-none text-white font-semibold px-12 py-2 rounded-md"
                      >
                        Next
                      </button>
                    </div>
                  </>
                )}

                {three && (
                  <>
                    {/* <div className="flex items-center gap-x-6">
                      <div className="w-32 rounded-md bg-slate-100 h-32 border flex flex-col items-center hover:bg-green-200 hover:border-2 hover:border-green-600 justify-center">
                        <div className="p-1 bg-white rounded-full">
                          <img
                            src={home}
                            className=" object-none  h-16 w-16 "
                          />
                        </div>
                        <p className="text-xs  text-[#737475] py-2 font-semibold ">
                          Entire Property
                        </p>
                      </div>
                      <div className="w-32 rounded-md h-32 border flex flex-col items-center hover:bg-green-200 hover:border-2 hover:border-green-600 justify-center">
                        <div className="p-1 bg-white  h-16 w-16 flex items-center justify-center ">
                          <img src={entire} className=" w-16 h-12  " />
                        </div>
                        <p className="text-xs font-semibold text-[#737475] py-2 ">
                          Part Property
                        </p>
                      </div>
                      <div className="w-32 rounded-md  h-32 border flex flex-col items-center hover:bg-green-200 hover:border-2 hover:border-green-600 justify-center">
                        <div className="p-1 ">
                          <BsThreeDots className="text-3xl text-[#737475]" />
                        </div>
                        <p className="text-xs font-semibold text-[#737475] mt-4 ">
                          Others
                        </p>
                      </div>
                    </div> */}
                    <div className="flex items-center gap-x-6">
                      {waterLeakData.map((item) => (
                        <div className="w-32 rounded-md bg-slate-100 h-32 border flex flex-col items-center hover:bg-green-200 hover:border-2 hover:border-green-600 justify-center">
                          <img src={item.icons} className=" w-16 h-12  " />
                          <p className="text-sm text-center font-semibold text-[#737475]">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-around py-12">
                      <button
                        onClick={handleBack3}
                        type="button"
                        className="bg-[#FE1B1B] !outline-none text-white font-semibold px-12 py-2 rounded-md"
                      >
                        Back
                      </button>
                      <button
                        onClick={handShowthreeSecond}
                        type="button"
                        className="bg-[#38BF67] !outline-none text-white font-semibold px-12 py-2 rounded-md"
                      >
                        Next
                      </button>
                    </div>
                  </>
                )}

                {secondThree && (
                  <>
                    <div className="flex items-center gap-x-6">
                      <div className="w-32 rounded-md  bg-slate-100 h-32 border hover:bg-green-200 hover:border-2 hover:border-green-600 flex flex-col items-center justify-center">
                        <img
                          src={Mainswitch}
                          className=" object-contain  h-12 w-12 "
                        />
                        <p className="text-xs text-[#737475] py-2">
                          Main switch tripped
                        </p>
                      </div>
                      <div className="w-32 rounded-md h-32 border flex flex-col hover:bg-green-200 hover:border-2 hover:border-green-600 items-center justify-center">
                        <img
                          src={chair}
                          className=" object-contain  h-12 w-12 "
                        />
                        <p className="text-xs text-[#737475] py-2 ">
                          Associated switch
                        </p>
                      </div>
                      <div className="w-32 rounded-md  h-32 border flex flex-col hover:bg-green-200 hover:border-2 hover:border-green-600 items-center justify-center">
                        <img src={none} className=" object-none  h-12 w-12 " />
                        <p className="text-xs text-[#737475] py-2">None</p>
                      </div>
                    </div>
                    <div className="flex justify-around py-12">
                      <button
                        type="button"
                        onClick={handleBack4}
                        className="bg-[#FE1B1B] !outline-none text-white font-semibold px-12 py-2 rounded-md"
                      >
                        Back
                      </button>
                      <button
                        onClick={handShowUpload}
                        type="button"
                        className="bg-[#38BF67] !outline-none text-white font-semibold px-12 py-2 rounded-md"
                      >
                        Next
                      </button>
                    </div>
                  </>
                )}
                {upload && (
                  <>
                    <div className="flex items-center">
                      <input
                        type="file"
                        accept=".jpg,.jpeg,.png"
                        ref={fileInputRef}
                        onChange={handleFileSelect}
                        style={{ display: "none" }}
                      />
                      {selectedFile ? (
                        <div className="border w-full p-3 rounded-md">
                          <span className="border-dashed border-2 border-[#737475]    !outline-none py-4  text-[#737475] w-full font-semibold flex flex-col items-center justify-center rounded">
                            {selectedFile.name}
                          </span>
                        </div>
                      ) : (
                        <div className="border w-full p-3 rounded-md">
                          <button
                            className="border-dashed border-2 border-[#737475]    !outline-none py-4  text-[#737475] w-full font-semibold flex flex-col items-center justify-center rounded"
                            onClick={handleUploadButtonClick}
                          >
                            <AiOutlinePlus className="text-3xl font-bold" />
                            Upload File
                          </button>
                        </div>
                      )}
                    </div>
                    <textarea
                      type="textarea"
                      cols="8"
                      rows="4"
                      className="border !outline-none w-full rounded-md px-3 py-2 mt-3"
                      placeholder="Description"
                    ></textarea>
                    <div className="flex justify-around py-2 ">
                      <button
                        onClick={handleBack5}
                        type="button"
                        className="bg-[#FE1B1B] !outline-none text-white font-semibold px-12 py-2 rounded-md"
                      >
                        Back
                      </button>
                      <button
                        onClick={handleSubmit}
                        type="button"
                        className="bg-[#38BF67] !outline-none text-white font-semibold px-12 py-2 rounded-md"
                      >
                        Next
                      </button>
                    </div>
                  </>
                )}

                {submit && (
                  <>
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
                            Title:{" "}
                            <span className="text-sm font-normal">
                              Lorem ipsum
                            </span>
                          </p>
                          <p className="font-semibold text-[#737475]">
                            Full Name:{" "}
                            <span className="text-sm font-normal">
                              Hazrat Zahid
                            </span>
                          </p>
                          <p className="font-semibold text-[#737475]">
                            Contact:{" "}
                            <span className="text-sm font-normal">
                              +44 12345678
                            </span>
                          </p>
                          <p className="font-semibold text-[#737475]">
                            Email:{" "}
                            <span className="text-sm font-normal">
                              aliakbar@hotmail.com
                            </span>
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
                        <h2 className="text-lg font-semibold text-[#737475]">
                          Attachments:
                        </h2>
                        <div className="flex gap-x-3 justify-center">
                          <div className="border w-16 h-16  rounded-md"></div>
                          <div className="border w-16 h-16  rounded-md"></div>
                          <div className="border w-16 h-16  rounded-md"></div>
                        </div>
                        <h2 className="text-lg font-semibold text-[#737475]">
                          Description:
                        </h2>
                        <p className="text-sm text-[#737475]">
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
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
                        // onClick={handleBack6}
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
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
