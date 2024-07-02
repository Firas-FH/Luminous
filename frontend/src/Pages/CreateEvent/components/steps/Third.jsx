import React, { useState } from 'react';
import './FirstStyle.css';

const colors = [
  { name: 'Blue', color: 'bg-blue-500' },
  { name: 'Teal', color: 'bg-teal-500' },
  { name: 'Mint', color: 'bg-green-200' },
  { name: 'Green', color: 'bg-green-500' },
  { name: 'Sage', color: 'bg-green-300' },
  { name: 'Yellow', color: 'bg-yellow-500' },
  { name: 'Beige', color: 'bg-yellow-200' },
  { name: 'Brown', color: 'bg-yellow-700' },
  { name: 'Orange', color: 'bg-orange-500' },
  { name: 'Navy', color: 'bg-blue-900' },
  { name: 'Peach', color: 'bg-pink-200' },
  { name: 'Red', color: 'bg-red-500' },
  { name: 'Maroon', color: 'bg-red-800' },
  { name: 'Pink', color: 'bg-pink-500' },
  { name: 'Purple', color: 'bg-purple-500' },
  { name: 'Black', color: 'bg-black' },
  { name: 'Grey', color: 'bg-gray-500' },
  { name: 'White', color: 'bg-white border border-gray-300' }
];

const Third = () => {
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleColor = (colorName) => {
    setSelectedColors(prev =>
      prev.includes(colorName)
        ? prev.filter(c => c !== colorName)
        : [...prev, colorName]
    );
  };

  const handleCheckboxChange = (event) => {
    const { value } = event.target;
    setSelectedItems(prev =>
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  return (
    <div className="container w-[570px]">
      <div className="mb-4">
        <h1 className="font-[var(--montserrate-font-bold)] text-[var(--primary-text-color)] mb-2 text-lg font-medium">Select your color scheme</h1>
        <div className="grid grid-cols-4 gap-2">
          {colors.map((color) => (
            <div
              key={color.name}
              onClick={() => toggleColor(color.name)}
              className={`flex items-center justify-center p-2 border cursor-pointer text-[var(--primary-text-color)] font-[var(--montserrate-font-bold)] ${
                selectedColors.includes(color.name) ? 'border-black' : 'border-gray-300'
              }`}
            >
              <div className={`w-6 h-6 rounded-full ${color.color} ${color.name === 'White' ? '' : 'border'}`}></div>
              <span className="ml-2 text-sm">{color.name}</span>
            </div>
          ))}
        </div>
        {/* <p className="mt-4 text-gray-700">
          Selected colors: {selectedColors.length > 0 ? selectedColors.join(', ') : 'None'}
        </p> */}
      </div>

      <div className='mt-8'>
        <h1 className="font-[var(--montserrate-font-bold)] text-[var(--primary-text-color)] mb-2 text-lg font-medium">Design Your Ambiance</h1>
        <div className="grid grid-cols-2 gap-2">
          {['Balloons', 'Beads', 'Roses', 'Candles', 'Fireworks', 'Crystal', 'Satin', 'Chiffon', 'Lace', 'Tulle'].map((item) => (
            <div key={item}>
              <input
                type="checkbox"
                id={item.toLowerCase()}
                value={item}
                checked={selectedItems.includes(item)}
                onChange={handleCheckboxChange}
                className="selected mr-2"
              />
              <label htmlFor={item.toLowerCase()} className="text-[var(--primary-text-color)]">
                {item}
              </label>
            </div>
          ))}
        </div>
        {/* <p className="mt-4">You have selected: {selectedItems.join(", ")}</p> */}
      </div>
    </div>
  );
};

export default Third;





// import React, { useState } from "react";
// import './FirstStyle.css';

// const Third = () => {
//   const [selectedItems, setSelectedItems] = useState([]);

//   const handleCheckboxChange = (event) => {
//     const { value } = event.target;
//     if (selectedItems.includes(value)) {
//       setSelectedItems(selectedItems.filter((item) => item !== value));
//     } else {
//       setSelectedItems([...selectedItems, value]);
//     }
//   };

//   return (
//     <div className="container">
//       <h1 className="font-[var(--montserrate-font-bold)] text-[var(--primary-text-color)] mb-2 text-lg font-medium">Design Your Ambiance</h1>
//       <div className="grid grid-cols-2 gap-2">
//         <div>
//           <input
//             type="checkbox"
//             id="balloons"
//             value="Balloons"
//             checked={selectedItems.includes("Balloons")}
//             onChange={handleCheckboxChange}
//             className="selected mr-2"
//           />
//           <label htmlFor="balloons" className="text-[var(--primary-text-color)]">
//             Balloons
//           </label>
//         </div>
//         <div>
//           <input
//             type="checkbox"
//             id="beads"
//             value="Beads"
//             checked={selectedItems.includes("Beads")}
//             onChange={handleCheckboxChange}
//             className="selected mr-2"
//           />
//           <label htmlFor="beads" className="text-[var(--primary-text-color)]">
//             Beads
//           </label>
//         </div>
//         <div>
//           <input
//             type="checkbox"
//             id="roses"
//             value="Roses"
//             checked={selectedItems.includes("Roses")}
//             onChange={handleCheckboxChange}
//             className="selected mr-2"
//           />
//           <label htmlFor="roses" className="text-[var(--primary-text-color)]">
//             Roses
//           </label>
//         </div>
//         <div>
//           <input
//             type="checkbox"
//             id="candles"
//             value="Candles"
//             checked={selectedItems.includes("Candles")}
//             onChange={handleCheckboxChange}
//             className="selected mr-2"
//           />
//           <label htmlFor="candles" className="text-[var(--primary-text-color)]">
//             Candles
//           </label>
//         </div>
//         <div>
//           <input
//             type="checkbox"
//             id="fireworks"
//             value="Fireworks"
//             checked={selectedItems.includes("Fireworks")}
//             onChange={handleCheckboxChange}
//             className="selected mr-2"
//           />
//           <label htmlFor="fireworks" className=" text-[var(--primary-text-color)]">
//             Fireworks
//           </label>
//         </div>
//         <div>
//           <input
//             type="checkbox"
//             id="crystal"
//             value="Crystal"
//             checked={selectedItems.includes("Crystal")}
//             onChange={handleCheckboxChange}
//             className="selected mr-2"
//           />
//           <label htmlFor="crystal" className=" text-[var(--primary-text-color)]">
//             Crystal
//           </label>
//         </div>
//         <div>
//           <input
//             type="checkbox"
//             id="satin"
//             value="Satin"
//             checked={selectedItems.includes("Satin")}
//             onChange={handleCheckboxChange}
//             className="selected mr-2"
//           />
//           <label htmlFor="satin" className=" text-[var(--primary-text-color)]">
//             Satin
//           </label>
//         </div>
//         <div>
//           <input
//             type="checkbox"
//             id="chiffon"
//             value="Chiffon"
//             checked={selectedItems.includes("Chiffon")}
//             onChange={handleCheckboxChange}
//             className="selected mr-2"
//           />
//           <label htmlFor="chiffon" className=" text-[var(--primary-text-color)]">
//             Chiffon
//           </label>
//         </div>
//         <div>
//           <input
//             type="checkbox"
//             id="lace"
//             value="Lace"
//             checked={selectedItems.includes("Lace")}
//             onChange={handleCheckboxChange}
//             className="selected mr-2"
//           />
//           <label htmlFor="lace" className=" text-[var(--primary-text-color)]">
//             Lace
//           </label>
//         </div>
//         <div>
//           <input
//             type="checkbox"
//             id="tulle"
//             value="Tulle"
//             checked={selectedItems.includes("Tulle")}
//             onChange={handleCheckboxChange}
//             className="selected mr-2"
//           />
//           <label htmlFor="tulle" className=" text-[var(--primary-text-color)]">
//             Tulle
//           </label>
//         </div>
//       </div>

//       <p className="mt-4">You have selected: {selectedItems.join(", ")}</p>
//     </div>
//   );
// };

// export default Third;

