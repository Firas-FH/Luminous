import React, { useState } from 'react';
import './FirstStyle.css';

function Second() {
  const [selectedVenue, setSelectedVenue] = useState(null);

  const halls = [
    { name: 'Cheval', price: 20000000 },
    { name: 'Dama Rose', price: 10000000 },
    { name: 'Moon House', price: 15000000 },
    { name: 'Al-Bahia', price: 25000000 },
    { name: 'Rovana', price: 20000000 },
    { name: 'Elite Plaza', price: 20000000 },
    { name: 'Lazurd', price: 20000000 },
  ];

  const yachts = [
    { name: 'Latakia Marina', price: 20000000 },
    { name: 'Tartus Marina', price: 20000000 },
  ];

  const beaches = [
    { name: 'Latakia', price: 20000000 },
    { name: 'Tartus', price: 20000000 },
  ];

  const restaurants = [
    { name: 'Nobles Palace', price: 20000000 },
    { name: 'Al-Zahour', price: 20000000 },
    { name: 'Plaza Damascus', price: 20000000 },
    { name: 'Al Saraya', price: 20000000 },
    { name: 'Al Bustan', price: 20000000 },
    { name: 'Beit Sitti', price: 20000000 },
    { name: 'Taj Mahal', price: 20000000 },
    { name: 'Vista', price: 20000000 },
    { name: 'Aroma Café', price: 20000000 },
  ];

  const hotels = [
    { name: 'Four Seasons Hotel', price: 20000000 },
    { name: 'OCham Palace', price: 20000000 },
    { name: 'Dedeman Damascus Hotel', price: 20000000 },
    { name: 'Golden Bay Resort', price: 20000000 },
    { name: 'Yafour Resort', price: 20000000 },
  ];

  const handleVenueSelect = (venue) => {
    setSelectedVenue(venue);
  };

  return (
    <div className="container mx-auto">
      <h1 className="font-[var(--montserrate-font-bold)] text-[var(--primary-text-color)] text-lg font-medium mb-2">
        Choose a venue for your event
      </h1>

      <div className="grid grid-cols-2">

      <div>
          <h2 className="text-lg font-medium font-[var(--montserrate-font-bold)] text-[var(--primary-text-color)]">Halls</h2>
          {halls.map((hall) => (
            <div key={hall.name} className="flex items-center">
              <input
                type="radio"
                name="venue"
                value={hall.name}
                onChange={() => handleVenueSelect(hall)}
                className="selected mr-2"
              />
              <label
                htmlFor={hall.name}
                className="text-[var(--primary-text-color)]"
              >
                {hall.name}
                <span className="text-[var(--headers-color)] ml-2">
                  {hall.price.toLocaleString('en-US')} SP
                </span>
              </label>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-lg font-medium font-[var(--montserrate-font-bold)] text-[var(--primary-text-color)]">Yachts</h2>
          {yachts.map((yacht) => (
            <div key={yacht.name} className="flex items-center">
              <input
                type="radio"
                name="venue"
                value={yacht.name}
                onChange={() => handleVenueSelect(yacht)}
                className="selected mr-2"
              />
              <label
                htmlFor={yacht.name}
                className="text-[var(--primary-text-color)]"
              >
                {yacht.name}
                <span className="text-[var(--headers-color)] ml-2">
                  {yacht.price.toLocaleString('en-US')} SP
                </span>
              </label>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-lg font-medium font-[var(--montserrate-font-bold)] text-[var(--primary-text-color)] pt-8">Resturants</h2>
          {restaurants.map((restaurant) => (
            <div key={restaurant.name} className="flex items-center">
              <input
                type="radio"
                name="venue"
                value={restaurant.name}
                onChange={() => handleVenueSelect(restaurant)}
                className="selected mr-2"
              />
              <label
                htmlFor={restaurant.name}
                className="text-[var(--primary-text-color)]"
              >
                {restaurant.name}
                <span className="text-[var(--headers-color)] ml-2">
                  {restaurant.price.toLocaleString('en-US')} SP
                </span>
              </label>
            </div>
          ))}
        </div>

        <div>
          <h2 className="space1 text-lg font-medium pt-8 font-[var(--montserrate-font-bold)] text-[var(--primary-text-color)]">Beaches</h2>
          {beaches.map((beaches) => (
            <div key={beaches.name} className="flex items-center">
              <input
                type="radio"
                name="venue"
                value={beaches.name}
                onChange={() => handleVenueSelect(beaches)}
                className="selected mr-2"
              />
              <label
                htmlFor={beaches.name}
                className="text-[var(--primary-text-color)]"
              >
                {beaches.name}
                <span className="text-[var(--headers-color)] ml-2">
                  {beaches.price.toLocaleString('en-US')} SP
                </span>
              </label>
            </div>
          ))}
        </div>

        <div className="space3 w-[200px] mt-10">
      <label className="block text-lg font-medium font-[var(--montserrate-font-bold)] text-[var(--primary-text-color)]" htmlFor="address">
        Your home
      </label>
      <input
        id="address"
        type="text"
        placeholder="Please enter your address"
        className="appearance-none bg-transparent border-b-2 border-[var(--primary-text-color)] py-2 text-gray-700 leading-tight focus:outline-none"
      />
    </div>

        <div>
          <h2 className="space2 text-lg font-medium pt-8 font-[var(--montserrate-font-bold)] text-[var(--primary-text-color)]">Hotels or resorts</h2>
          {hotels.map((hotel) => (
            <div key={hotel.name} className="flex items-center">
              <input
                type="radio"
                name="venue"
                value={hotel.name}
                onChange={() => handleVenueSelect(hotel)}
                className="selected mr-2"
              />
              <label
                htmlFor={hotel.name}
                className="text-[var(--primary-text-color)]"
              >
                {hotel.name}
                <span className="text-[var(--headers-color)] ml-2">
                  {hotel.price.toLocaleString('en-US')} SP
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>

      

      {/* <div className="mt-8">
        {selectedVenue && (
          <div className="bg-green-100 p-4 rounded-md">
            <p className="font-medium text-green-700">
              You have selected{' '}
              <span className="font-bold">{selectedVenue.name}</span>
              {' '}for your event.
            </p>
          </div>
        )}
      </div> */}
    </div>
  );
}

export default Second;