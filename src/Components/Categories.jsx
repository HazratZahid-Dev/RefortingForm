import React from 'react'
import LoginData from '../Config/LoginData'
import { useNavigate } from 'react-router-dom'

const Categories = () => {
  const navigate=useNavigate();
  const handleBack2=()=>{
    navigate('/detail')
    console.log('cliiiiiiiiick')
  }
  return (
    <div>
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
                          <div className="flex flex-col justify-center items-center">
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
    </div>
  )
}

export default Categories