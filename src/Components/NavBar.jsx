import React from 'react'
import { AiOutlineExclamationCircle } from 'react-icons/ai'

const NavBar = () => {
  return (
    <div>
        <div className="bg-green-100 px-10 flex items-center justify-between py-8">
          <div className="flex gap-x-4 items-center">
            <div>
              <div className="flex items-center gap-x-4">
                <div className="border-[2px] border-black p-1 rounded-md w-7 h-7">
                  <img className="w-full h-full object-fill" />
                </div>

                <h1 className="text-3xl font-bold">Reporting Form</h1>
              </div>
            </div>
          </div>
          <div className="flex gap-x-8">
            <button type="button" className="!outline-none">
              <AiOutlineExclamationCircle
                style={{ strokeWidth: "2px", transform: "scale(1.1)" }}
                className="text-3xl text-[#737475]"
              />
            </button>
          </div>
        </div>
    </div>
  )
}

export default NavBar