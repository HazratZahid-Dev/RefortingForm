import React, { useState } from "react";
import LoginData from "../Config/LoginData";
import { useNavigate } from "react-router-dom";
import CategoriesData from "../Config/CategoryDetail";
import { BsArrowRight } from "react-icons/bs";

const Categories = () => {
  const [show, setShow] = useState(true);
  const [activeCategory, setActiveCategory] = useState(""); // Initialize activeCategory as an empty string
  const navigate = useNavigate();

  const handleBack2 = () => {
    navigate("/detail");
    console.log("cliiiiiiiiick");
  };
  const toUpload = () => {
    navigate("/upload");
    console.log("cliiiiiiiiick");
  };

  const handleCat = (category) => {
    setShow(false);
    setActiveCategory(category); // Set the active category based on the clicked image
    console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiii");
  };

  // Filter the data based on the active category
  const filteredData = show
    ? LoginData
    : CategoriesData.filter((item) => item.cate === activeCategory);

  return (
    <div className="border rounded-xl shadow-sm w-[90%] mt-4 p-4 m-auto">
      <div className="grid grid-cols-1  sm:grid-cols-4 lg:grid-cols-8 py-4 gap-4 ">
        {show && (
          <>
            {LoginData.map((item, index) => (
              <div
                key={index}
                className={`border w-32 h-32 flex  py-2 items-center justify-center shadow-sm rounded-xl ${
                  activeCategory === item.cate
                    ? "bg-green-200 border-2 border-green-600"
                    : "hover:bg-green-200 hover:border-2 hover:border-green-600"
                }`}
                onClick={() => handleCat(item.cate)} // Pass the category to handleCat function
              >
                <div className="flex flex-col justify-center items-center">
                  <div className="w-14 flex items-center justify-center h-14">
                    <img src={item.img} alt="item" className="object-fill" />
                  </div>
                  <p
                    className={`text-[#737475] text-center font-semibold font-[Roboto] text-sm ${
                      activeCategory === item.cate ? "text-green-600" : ""
                    }`}
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </>
        )}
        {!show && (
          <>
            <div className="flex flex-col space-y-[2px]   ">
              {CategoriesData.filter(
                (item) => item.cate === activeCategory
              ).map((item, index) => (
                <>
                  <div key={index}>
                    <div className="w-80  ">
                      {item.heading && (
                        <h1 className="text-3xl w-96  font-bold text-[#2a8b4c]  ">
                          {item.heading}
                        </h1>
                      )}
                      {item.effect && (
                        <p className="text-xl   font-semibold text-[#737475]   ">
                          {item.effect}
                        </p>
                      )}
                    </div>
                  </div>
                </>
              ))}
              <div className="flex items-center  gap-5   flex-wrap     w-[1120px]">
                {CategoriesData.filter(
                  (item) => item.cate === activeCategory
                ).map((item, index) => (
                  <>
                    {item?.icons && (
                      <div className="">
                        <div className="w-36 h-36 flex space-y-2 bg-green-100 items-center justify-center flex-col  rounded-xl">
                          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center ">
                            <img src={item.icons} className="w-10 h-10"></img>
                          </div>
                          <p className="text-center">{item.text}</p>
                        </div>
                      </div>
                    )}
                    {item.msg && (
                      <>
                        <div className="border rounded-xl p-5  shadow-sm">
                          <h2 className="text-3xl font-semibold text-green-700">
                            {item.msg}
                          </h2>
                          <div className="space-y-1 mt-2">
                            <p className="text-lg text-[#727374]">
                              1. {item.heatOne}
                            </p>
                            <p className="text-lg text-[#727374]">
                              2. {item.heatTwo}
                            </p>
                            <p className="text-lg text-[#727374]">
                              3. {item.heatThree}
                            </p>
                            <p className="text-lg text-[#727374]">
                              4. {item.heatFour}
                            </p>
                          </div>
                          <button
                            type="button"
                            className="text-green-700 flex items-center gap-x-2 mt-4 font-semibold text-lg"
                          >
                            {item.cont}
                            <BsArrowRight className="mt-1 font-bold" />
                          </button>
                        </div>
                      </>
                    )}
                  </>
                ))}
              </div>
              <div>
                <h2 className="text-2xl text-[#727374] font-semibold py-3">
                  Reason
                </h2>
              </div>
              <div className="flex items-center  gap-x-2   flex-wrap -translate-y-5    w-[1120px]">
                {CategoriesData.filter(
                  (item) => item.cate === activeCategory
                ).map((item, index) => (
                  <>
                    {item.img && (
                      <div className="my-5">
                        <div className="w-36 h-36 flex space-y-2 bg-green-100 items-center justify-center flex-col  rounded-xl">
                          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center ">
                            {item.img && (
                              <img src={item.img} className="w-10 h-10"></img>
                            )}
                          </div>
                          {item.main && (
                            <p className="text-center">{item.main}</p>
                          )}
                        </div>
                      </div>
                    )}
                    <div className="ml-0">
                      {
                        item.msge && <div className="border rounded-lg  shadow-sm p-5 mt-5">
                        <h2 className="text-3xl font-semibold text-green-700">
                            {item.msge}
                          </h2>
                          <p className="text-lg text-[#737475] font-[500]">{item.heatOne} <span className="text-red-600 font-[600]">{item.heatTwo}</span> <span>{item.heatThree}</span></p>
                          <div className="w-full flex justify-between mt-5">
                            <button className="w-32  bg-[#38BF67] text-white font-semibold py-[6px] rounded-md ">Have  a Call</button>
                            <button  className="w-32 border  hover:bg-[#38BF67] hover:text-white font-semibold py-[6px] rounded-md">No</button>

                          </div>
                          
                        </div>
                      }
                    </div>
                  </>
                ))}
              </div>
              <></>
            </div>
          </>
        )}
      </div>

      <div className="flex justify-around mt-4">
        <button
          onClick={handleBack2}
          type="button"
          className="bg-[#FE1B1B] !outline-none text-white font-semibold px-12 py-2 rounded-md"
        >
          Back
        </button>
        <button
          onClick={toUpload}
          type="button"
          className="bg-[#38BF67] !outline-none text-white font-semibold px-12 py-2 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Categories;
