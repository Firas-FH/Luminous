import React, { useState } from 'react';
// import { CalendarIcon } from '@heroicons/react/24/solid';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import './FirstStyle.css';

const First = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const unavailableDate = new Date(2022, 10, 25); // November 25, 2022

  const isUnavailable = (date) => {
    return format(date, 'yyyy-MM-dd') === format(unavailableDate, 'yyyy-MM-dd');
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  return (
    <div className="container mx-auto flex flex-col justify-center ">
      <h2 className="font-[var(--montserrate-font-bold)] text-[var(--primary-text-color)] mb-2 text-lg font-medium">Select the type of event</h2>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div>
          <h3 className="text-lg font-medium mb-2 font-[var(--montserrate-font-bold)] text-[var(--primary-text-color)]">Private Parties</h3>
          <ul>
            <li>
              <input
                type="radio"
                name="event-type"
                value="Birthday"
                onChange={() => handleTypeChange('Birthday')}
                checked={selectedType === 'Birthday'}
                className='selected text-[var(--primary-text-color)]'/>{' '}
              Birthday
            </li>
            <li>
              <input
                type="radio"
                name="event-type"
                value="Wedding"
                onChange={() => handleTypeChange('Wedding')}
                checked={selectedType === 'Wedding'}
                className='selected text-[var(--primary-text-color)]'/>{' '}
              Wedding
            </li>
            <li>
              <input
                type="radio"
                name="event-type"
                value="Engagement"
                onChange={() => handleTypeChange('Engagement')}
                checked={selectedType === 'Engagement'}
                className='selected text-[var(--primary-text-color)]'/>{' '}
              Engagement
            </li>
            <li>
              <input
                type="radio"
                name="event-type"
                value="Gender reveal"
                onChange={() => handleTypeChange('Gender reveal')}
                checked={selectedType === 'Gender reveal'}
                className='selected text-[var(--primary-text-color)]'/>{' '}
              Gender reveal
            </li>
            <li>
              <input
                type="radio"
                name="event-type"
                value="Graduations"
                onChange={() => handleTypeChange('Graduations')}
                checked={selectedType === 'Graduations'}
                className='selected text-[var(--primary-text-color)]'/>{' '}
              Graduation
            </li>
            <li>
              <input
                type="radio"
                name="event-type"
                value="Wedding anniversaries"
                onChange={() => handleTypeChange('Wedding anniversaries')}
                checked={selectedType === 'Wedding anniversaries'}
                className='selected text-[var(--primary-text-color)]'/>{' '}
              Wedding anniversary
            </li>
            <li>
              <input
                type="radio"
                name="event-type"
                value="Baby showers"
                onChange={() => handleTypeChange('Baby showers')}
                checked={selectedType === 'Baby showers'}
                className='selected text-[var(--primary-text-color)]'/>{' '}
              Baby shower
            </li>
            <li>
              <input
                type="radio"
                name="event-type"
                value="Baptisms"
                onChange={() => handleTypeChange('Baptisms')}
                checked={selectedType === 'Baptisms'}
                className='selected text-[var(--primary-text-color)]'/>{' '}
              Baptisms
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2 font-[var(--montserrate-font-bold)] text-[var(--primary-text-color)]">Work Events</h3>
          <ul>
            <li>
              <input
                type="radio"
                name="event-type"
                value="Conferences"
                onChange={() => handleTypeChange('Conferences')}
                checked={selectedType === 'Conferences'}
                className='selected text-[var(--primary-text-color)]'/>{' '}
              Conferences
            </li>
            <li>
              <input
                type="radio"
                name="event-type"
                value="Openings"
                onChange={() => handleTypeChange('Openings')}
                checked={selectedType === 'Openings'}
                className='selected text-[var(--primary-text-color)]'/>{' '}
              Openings
            </li>
            <li>
              <input
                type="radio"
                name="event-type"
                value="Seminars"
                onChange={() => handleTypeChange('Seminars')}
                checked={selectedType === 'Seminars'}
                className='selected text-[var(--primary-text-color)]'/>{' '}
              Seminars
            </li>
            <li>
              <input
                type="radio"
                name="event-type"
                value="Award ceremonies"
                onChange={() => handleTypeChange('Award ceremonies')}
                checked={selectedType === 'Award ceremonies'}
                className='selected text-[var(--primary-text-color)]'/>{' '}
              Award ceremonies
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2 font-[var(--montserrate-font-bold)] text-[var(--primary-text-color)]">Seasonal Events</h3>
          <ul>
            <li>
              <input
                type="radio"
                name="event-type"
                value="Christmas"
                onChange={() => handleTypeChange('Christmas')}
                checked={selectedType === 'Christmas'}
                className='selected text-[var(--primary-text-color)]'/>{' '}
              Christmas
            </li>
            <li>
              <input
                type="radio"
                name="event-type"
                value="New Year"
                onChange={() => handleTypeChange('New Year')}
                checked={selectedType === 'New Year'}
                className='selected text-[var(--primary-text-color)]'/>{' '}
              New Year
            </li>
            <li>
              <input
                type="radio"
                name="event-type"
                value="Easter"
                onChange={() => handleTypeChange('Easter')}
                checked={selectedType === 'Easter'}
                className='selected text-[var(--primary-text-color)]'/>{' '}
              Easter
            </li>
          </ul>
        </div>
      </div>
       {/* <p className="mt-4">Selected Type: {selectedType}</p> */}
      <label htmlFor="date-picker" className="mb-2 text-lg font-medium text-gray-900">
        Select the event date
      </label>
      <div className="relative">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          inline
          dayClassName={(date) =>
            isUnavailable(date) ? 'bg-red-500 text-white' : undefined
          }
          calendarClassName="border border-gray-300 rounded-md shadow-lg"
          className="w-48 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholderText="Choose Date"
        />
      </div>
      {selectedDate && isUnavailable(selectedDate) && (
        <p className="mt-2 text-sm text-red-600">
          Sorry, this hall is not available on the selected date. Please choose a different date or venue.
        </p>
      )}
    </div>
  );
};

export default First;
