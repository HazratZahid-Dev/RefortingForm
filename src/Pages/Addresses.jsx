import { Popover } from "@mui/material";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Addresses = () => {
    const navigate=useNavigate()
    const handleFindAddress=()=>{
        navigate('/form')

    }
 
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
  return (
    <div>
      <div className="flex gap-x-1 justify-center py-5">
        <button
          type="button"
          className="bg-[#38bf67] !outline-none text-white w-40 rounded-2xl py-[10px] font-semibold"
        >
          Address
        </button>
        <button
          type="button"
          className="bg-[#38bf67] !outline-none text-white w-40 rounded-2xl py-[10px]  font-semibold"
        >
          Your Detail
        </button>

        <button
          type="button"
          className="bg-[#38bf67] !outline-none text-white w-40 rounded-2xl py-[10px]  font-semibold"
        >
          Describe Problem
        </button>
        <button
          type="button"
          className="bg-[#38bf67] !outline-none text-white w-40 rounded-2xl py-[10px]  font-semibold"
        >
          Subscribe
        </button>
      </div>
      <div className="border p-4 w-[70%] m-auto rounded-md shadow-sm">
        <div className="border rounded-md  flex">
          <input
          onClick={handleClick}
            type="text"
            placeholder="Post Code "
            className="px-3 py-2 w-full rounded-md outline-none"
          ></input>
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
          <div
            // onClick={handleClick}
            className="flex items-center justify-center  border-l px-3"
          >
            <CiSearch className="text-xl" />
          </div>
          {/* <Popover
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
                      </Popover> */}
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
    </div>
  );
};

export default Addresses;
