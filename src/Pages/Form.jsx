import React from 'react'
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const navigate=useNavigate();
  const toAddresses=()=>{
    navigate('/detail')
    console.log('hiiiiiiiiiiiiiiiiiii')
  }
  const handleBack=()=>{
    navigate('/address')
    console.log('hiiiiiiiiiiiiiiiiiii')
  }
  return (
    <div className='w-[70%] m-auto border p-4 rounded-md mt-4'>
         
                    <div className="flex flex-col gap-y-3">
                      <input
                        type="text"
                        className="border rounded-md py-2 w-full px-3"
                        placeholder="13 Manchester Road "
                      ></input>
                      <input
                        type="text"
                        className="border rounded-md py-2 w-full px-3"
                        placeholder="Swindon "
                      ></input>
                      <input
                        type="text"
                        className="border rounded-md py-2 w-full px-3"
                        placeholder="SN1 2AB "
                      ></input>
                    </div>
                    <div className="flex justify-between mt-4">
                      <button
                        onClick={handleBack}
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
                  
    </div>
  )
}

export default Form