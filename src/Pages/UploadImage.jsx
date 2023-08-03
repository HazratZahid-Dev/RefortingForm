import React, { useRef, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const UploadImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);


    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
      };
      const handleUploadButtonClick = () => {
        fileInputRef.current.click();
      };
      const navigate=useNavigate();
  const handleSubmit=()=>{
    navigate('/submit')
  }
  const handleBack5=()=>{
    navigate('/describe')
  }
  return (
    <div className='border rounded-md p-4 w-[70%] m-auto shadow-sm mt-4'>
         
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
                  
    </div>
  )
}

export default UploadImage