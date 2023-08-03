import React from 'react'
import { useNavigate } from 'react-router-dom';

const YourDetail = () => {
    const navigate=useNavigate();
    const toAddresses=()=>{
      navigate('/describe')
      console.log('hiiiiiiiiiiiiiiiiiii')
    }
    const handleBack1=()=>{
      navigate('/form')
      console.log('hiiiiiiiiiiiiiiiiiii')
    }
  return (
    <div className='w-[70%] m-auto p-4 mt-4 border rounded-md shadow-sm'>
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
                        onClick={toAddresses}
                        type="button"
                        className="bg-[#38BF67] !outline-none text-white font-semibold px-12 py-2 rounded-md"
                      >
                        Next
                      </button>
                    </div>
                  </>
    </div>
  )
}

export default YourDetail