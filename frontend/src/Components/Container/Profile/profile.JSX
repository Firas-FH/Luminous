// import { useState } from 'react';

// function Profile() {
//   const [events, setEvents] = useState([
//     {
//       name: 'Event 1',
//       place: 'Place 1',
//       date: 'Date 1',
//     },
//     {
//       name: 'Event 2',
//       place: 'Place 2',
//       date: 'Date 2',
//     },
//   ]);

//   const handleEdit = (index) => {
//     // Implement edit logic
//   };

//   const handleDelete = (index) => {
//     const updatedEvents = [...events];
//     updatedEvents.splice(index, 1);
//     setEvents(updatedEvents);
//   };

//   const handleAddComment = (index) => {
//     // Implement comment logic
//   };

//   return (
//     <div className="bg-yellow-100 p-4">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-2xl font-bold">Profile</h2>
//         <div className="text-lg font-semibold">Your Events:</div>
//       </div>
//       <div className="flex flex-col gap-4">
//         <div className="bg-white rounded-md p-4 shadow-md">
//           <p className="text-lg font-semibold">Before 2 days</p>
//         </div>
//         {events.map((event, index) => (
//           <div key={index} className="bg-white rounded-md p-4 shadow-md">
//             <div className="mb-2">
//               <p className="text-lg font-semibold">Event Name: {event.name}</p>
//               <p className="text-gray-600">Event Place: {event.place}</p>
//               <p className="text-gray-600">Event Date: {event.date}</p>
//             </div>
//             <div className="flex gap-2">
//               <button
//                 onClick={() => handleEdit(index)}
//                 className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => handleDelete(index)}
//                 className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//         <div className="bg-white rounded-md p-4 shadow-md">
//           <div className="mb-2">
//             <p className="text-lg font-semibold">Event Name:</p>
//             <p className="text-gray-600">Event Place:</p>
//             <p className="text-gray-600">Event Date:</p>
//           </div>
//           <button
//             onClick={() => handleAddComment()}
//             className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full"
//           >
//             Add comment
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Profile;








import React from 'react';

function EventCard({ event, onEdit, onDelete, onAddComment }) {
  return (
    <div className="bg-white rounded-md shadow-md p-4">
      <h3 className="text-lg font-bold mb-2">{event.name}</h3>
      <p className="mb-2">{event.place}</p>
      <p className="mb-4">{event.date}</p>
      <div className="flex space-x-2">
        <button
          className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded"
          onClick={onEdit}
        >
          Edit
        </button>
        <button
          className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded"
          onClick={onDelete}
        >
          Delete
        </button>
        {onAddComment && (
          <button
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded"
            onClick={onAddComment}
          >
            Add comment
          </button>
        )}
      </div>
    </div>
  );
}

function Profile() {
  const events = [
    {
      name: 'Event Name',
      place: 'Event Place',
      date: 'Event Date',
    },
    {
      name: 'Event Name',
      place: 'Event Place',
      date: 'Event Date',
    },
  ];

  return (
    <div className="bg-yellow-100 min-h-screen p-8">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold text-yellow-600">Profile</h1>
        <div className="text-lg font-bold text-yellow-600">Your Events:</div>
      </div>
      <div className="flex flex-col space-y-4 mt-8">
        <div className="flex flex-col space-y-2">
          <label htmlFor="userName" className="text-gray-700 font-bold">
            User Name
          </label>
          <input
            type="text"
            id="userName"
            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-gray-700 font-bold">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-8">
        <EventCard event={{ name: 'Before 2 days', place: '', date: '' }} />
        {events.map((event, index) => (
          <EventCard
            key={index}
            event={event}
            onEdit={() => console.log('Edit event', event)}
            onDelete={() => console.log('Delete event', event)}
            onAddComment={() => console.log('Add comment to event', event)}
          />
        ))}
      </div>
    </div>
  );
}

export default Profile;