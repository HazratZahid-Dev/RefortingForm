// import React, { useState } from "react";
// import LoginData from "../Config/LoginData";
// import { useNavigate } from "react-router-dom";

// const DescribeProblem = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const navigate=useNavigate();
//   const handShowthreeSecond=()=>{
//     navigate('/upload')
//   }
//   const handleBack3=()=>{
//     navigate('/detail')
//   }

//   return (
//     <div className="border rounded-md shadow-sm w-[80%] mt-4 p-4 m-auto">
//       <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-8 gap-4">
//         {LoginData.map((item, index) => (
//           <div
//             key={index}
//             className={`border w-28 h-28 flex py-2 items-center justify-center shadow-sm rounded-md ${
//               activeIndex === index
//                 ? "bg-green-200 border-2 border-green-600"
//                 : "hover:bg-green-200 hover:border-2 hover:border-green-600"
//             }`}
//             onClick={() => setActiveIndex(index)}
//           >
//             <div
//               //   onClick={handleCategory}
//               className="flex flex-col justify-center items-center "
//             >
//               <div className="w-14 flex items-center justify-center h-14">
//                 <img src={item.img} alt="item" className="object-fill" />
//               </div>
//               <p
//                 className={`text-[#737475] text-center font-semibold font-[Roboto] text-sm ${
//                   activeIndex === index ? "text-green-600" : ""
//                 }`}
//               >
//                 {item.text}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="flex justify-around py-8">
//                       <button
//                         onClick={handleBack3}
//                         type="button"
//                         className="bg-[#FE1B1B] !outline-none text-white font-semibold px-12 py-2 rounded-md"
//                       >
//                         Back
//                       </button>
//                       <button
//                         onClick={handShowthreeSecond}
//                         type="button"
//                         className="bg-[#38BF67] !outline-none text-white font-semibold px-12 py-2 rounded-md"
//                       >
//                         Next
//                       </button>
//                     </div>
//     </div>
//   );
// };

// export default DescribeProblem;

import React, { useState } from 'react';
import LoginData from '../Config/LoginData';
import { useNavigate } from 'react-router-dom';
import CategoriesData from '../Config/CategoryDetail';

const Categories = () => {
  const [show, setShow] = useState(true);
  const [activeCategory, setActiveCategory] = useState(''); // Initialize activeCategory as an empty string
  const navigate = useNavigate();

  const handleBack2 = () => {
    navigate('/detail');
    console.log('cliiiiiiiiick');
  };

  const handleCat = (category) => {
    setShow(false);
    setActiveCategory(category); // Set the active category based on the clicked image
    console.log('hiiiiiiiiiiiiiiiiiiiiiiiiiiii');
  };

  // Filter the data based on the active category
  const filteredData = show
    ? LoginData
    : CategoriesData.filter((item) => item.cate === activeCategory);

  return (
    <div className='border rounded-md shadow-sm w-[80%] mt-4 p-4 m-auto'>
      <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-8 py-4 gap-4">
        {show && (
          <>
            {LoginData.map((item, index) => (
              <div
                key={index}
                className={`border w-28 h-28 flex py-2 items-center justify-center shadow-sm rounded-md ${
                  activeCategory === item.cate
                    ? 'bg-green-200 border-2 border-green-600'
                    : 'hover:bg-green-200 hover:border-2 hover:border-green-600'
                }`}
                onClick={() => handleCat(item.cate)} // Pass the category to handleCat function
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
                      activeCategory === item.cate ? 'text-green-600' : ''
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
            {CategoriesData.filter((item) => item.cate === activeCategory).map((item, index) => (
              <div
                key={index}
                className="border w-28 h-28 flex py-2 items-center justify-center shadow-sm rounded-md"
              >
                <div className="flex flex-col justify-center items-center">
                  <div className="w-14 flex items-center justify-center h-14">
                    <img
                      src={item.icons}
                      alt="item"
                      className="object-fill"
                    />
                  </div>
                  <p className="text-[#737475] text-center font-semibold font-[Roboto] text-sm">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
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
          onClick={() => setShow(true)} // Reset the show state to show the original data
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

