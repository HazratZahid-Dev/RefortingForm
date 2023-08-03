import React from 'react'
import siteLogo from "../images/siteLogo.png";
import { useNavigate } from 'react-router-dom';


const ReportAnAssue = () => {

  const navigate=useNavigate();
  const toAddresses=()=>{
    navigate('/address')
    console.log('hiiiiiiiiiiiiiiiiiii')
  }
  return (
    <div>
       <div className="flex items-center justify-around px-12 py-12 ">
            <div className="w-56 ">
              <img src={siteLogo} className="w-full h-full"></img>
            </div>
            <div className="flex flex-col">
              <button
                type="button"
                onClick={toAddresses}
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
    </div>
  )
}

export default ReportAnAssue