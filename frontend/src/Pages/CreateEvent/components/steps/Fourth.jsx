import React, { useState } from 'react';
// import './FirstStyle.css';

function Fourth() {
  const [selectedFood, setSelectedFood] = useState([]);

  const appetizers = [
    { name: 'Hummus', price: 15000 },
    { name: 'Muhammara', price: 15000 },
    { name: 'Kibbeh Nayyeh', price: 15000 },
    { name: 'Yalanji', price: 15000 }
  ];

  const salads = [
    { name: 'Fattoush', price: 15000 },
    { name: 'Tabbouleh', price: 15000 },
    { name: 'Garden Salad', price: 15000 },
    { name: 'Caesar Salad', price: 15000 }
  ];

  const desserts = [
    { name: 'Kunafa', price: 15000 },
    { name: 'Baklava', price: 15000 },
    { name: 'Maamoul', price: 15000 },
    { name: 'Ice Cream', price: 15000 },
    { name: 'Cake', price: 15000 }
  ];

  const mainCourses = [
    { name: 'Kibbeh', price: 15000 },
    { name: 'Shawarma', price: 15000 },
    { name: 'Grilled Chicken', price: 15000 },
    { name: 'Kebab', price: 15000 },
    { name: 'Seafood', price: 15000 }
  ];

  const drinks = [
    { name: 'Soft Drinks', price: 15000 },
    { name: 'Natural Juices', price: 15000 },
    { name: 'Cocktails', price: 15000 },
  ];

  const handleFoodSelect = (food) => {
    setSelectedFood(food);
  };

  const handleCheckboxChange = (event) => {
    const { value } = event.target;
    setSelectedFood(prev =>
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  return (
    <div className="container mx-auto">
      <h1 className="font-[var(--montserrate-font-bold)] text-[var(--primary-text-color)] text-lg font-medium mb-2">
        Curate Your Menu
      </h1>

      <div className="grid grid-cols-2">

        <div>
          <h2 className="text-lg font-medium font-[var(--montserrate-font-bold)] text-[var(--primary-text-color)]">Appetizers</h2>
          {appetizers.map((appetizer) => (
            <div key={appetizer.name} className="flex items-center">
              <input
                type="checkbox"
                name="venue"
                value={appetizer.name}
                onChange={handleCheckboxChange}
                className="selected mr-2"
              />
              <label
                htmlFor={appetizer.name}
                className="text-[var(--primary-text-color)]"
              >
                {appetizer.name}
                <span className="text-[var(--headers-color)] ml-2">
                  {appetizer.price.toLocaleString('en-US')} SP
                </span>
              </label>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-lg font-medium font-[var(--montserrate-font-bold)] text-[var(--primary-text-color)]">Salads</h2>
          {salads.map((salad) => (
            <div key={salad.name} className="flex items-center">
              <input
                type="checkbox"
                name="venue"
                value={salad.name}
                onChange={handleCheckboxChange}
                className="selected mr-2"
              />
              <label
                htmlFor={salad.name}
                className="text-[var(--primary-text-color)]"
              >
                {salad.name}
                <span className="text-[var(--headers-color)] ml-2">
                  {salad.price.toLocaleString('en-US')} SP
                </span>
              </label>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-lg font-medium font-[var(--montserrate-font-bold)] text-[var(--primary-text-color)] pt-8">Main Course</h2>
          {mainCourses.map((mainCourse) => (
            <div key={mainCourse.name} className="flex items-center">
              <input
                type="checkbox"
                name="venue"
                value={mainCourse.name}
                onChange={handleCheckboxChange}
                className="selected mr-2"
              />
              <label
                htmlFor={mainCourse.name}
                className="text-[var(--primary-text-color)]"
              >
                {mainCourse.name}
                <span className="text-[var(--headers-color)] ml-2">
                  {mainCourse.price.toLocaleString('en-US')} SP
                </span>
              </label>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-lg font-medium pt-8 font-[var(--montserrate-font-bold)] text-[var(--primary-text-color)]">Desserts</h2>
          {desserts.map((dessert) => (
            <div key={dessert.name} className="flex items-center">
              <input
                type="checkbox"
                name="venue"
                value={dessert.name}
                onChange={handleCheckboxChange}
                className="selected mr-2"
              />
              <label
                htmlFor={dessert.name}
                className="text-[var(--primary-text-color)]"
              >
                {dessert.name}
                <span className="text-[var(--headers-color)] ml-2">
                  {dessert.price.toLocaleString('en-US')} SP
                </span>
              </label>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-lg font-medium pt-8 font-[var(--montserrate-font-bold)] text-[var(--primary-text-color)]">Drinks</h2>
          {drinks.map((drink) => (
            <div key={drink.name} className="flex items-center">
              <input
                type="checkbox"
                name="venue"
                value={drink.name}
                onChange={handleCheckboxChange}
                className="selected mr-2"
              />
              <label
                htmlFor={drink.name}
                className="text-[var(--primary-text-color)]"
              >
                {drink.name}
                <span className="text-[var(--headers-color)] ml-2">
                  {drink.price.toLocaleString('en-US')} SP
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>


      {/* <p className="mt-4">You have selected: {selectedFood.join(", ")}</p> */}

      
        <div className="w-[300px] mt-10">
          <label className="block text-lg font-medium font-[var(--montserrate-font-bold)] text-[var(--primary-text-color)]" htmlFor="address">
          your invitees
          </label>
          <input
            id="address"
            type="number"
            placeholder="Please enter the number of your invitees"
            className="appearance-none bg-transparent border-b-2 border-[var(--primary-text-color)] py-2 text-gray-700 leading-tight focus:outline-none w-[320px]"
          />
        </div>
    </div>
  );
}

export default Fourth;