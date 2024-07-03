// import React, { useState, useEffect } from 'react';

// const EventCard = ({ event, onEdit, onDelete, onComment }) => (
//   <div className="p-4 bg-secondarybg shadow-golden">
//     <p className="text-xl">{event.type}</p>
//     <p className="text-xl">{event.venue.name}</p>
//     <p className="text-xl pb-2">{new Date(event.date).toLocaleDateString()}</p>
//     {onEdit && <button onClick={() => onEdit(event)} className="bg-headerscolor text-white px-2 py-1">Edit</button>}
//     {onDelete && <button onClick={() => onDelete(event)} className="bg-headerscolor text-white px-2 py-1">Delete</button>}
//     {onComment && <button onClick={() => onComment(event)} className="bg-headerscolor text-white px-2 py-1">Add Comment</button>}
//   </div>
// );

// const Sidebar = () => (
//   <div className="w-64 bg-secondarybg h-screen pt-4 shadow-lg">
//     <div className="flex justify-end">
//       <img src="./Picture/ftop.png" alt="tel" className="w-2/3" />
//     </div>
//     <div className="text-center">
//       <div className="text-4xl text-headerscolor mb-4">Profile</div>
//     </div>
//     <div className="mb-[8rem] px-7">
//       <div className="mb-4">
//         <div className="flex items-center mb-2">
//           <img src="./Picture/profile.png" alt="Profile" className="w-8 h-8 mr-2" />
//           <p className="text-2xl">User Name</p>
//         </div>
//         <div className="flex items-center">
//           <img src="./Picture/profile.png" alt="Email" className="w-8 h-8 mr-2" />
//           <p className="text-2xl">Email</p>
//         </div>
//       </div>
//       <button className="w-[180px] bg-headerscolor hover:bg-highlightcolor transition text-white px-4 py-2">Log out</button>
//     </div>
//     <img src="./Picture/fb.png" alt="tel" className="w-2/3" />
//   </div>
// );

// const Profile = () => {
//   const [filter, setFilter] = useState('before2days');
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         let url = '/api/events/upcoming';
//         switch (filter) {
//           case 'before2days':
//             url = '/api/events/two-days-or-less';
//             break;
//           case 'before3days':
//             url = '/api/events/outdated';
//             break;
//           case 'afterDate':
//             url = '/api/events/after-date';
//             break;
//           default:
//             break;
//         }
        
//         const response = await fetch(url, {
//           headers: {
//             'Authorization': `Bearer ${localStorage.getItem('token')}`
//           }
//         });
        
//         if (!response.ok) {
//           throw new Error('Failed to fetch events');
//         }

//         const data = await response.json();
//         setEvents(data);
//       } catch (error) {
//         console.error('Error fetching events:', error);
//       }
//     };

//     fetchEvents();
//   }, [filter]);

//   const handleEdit = (event) => {
//     console.log('Edit event:', event);
//   };

//   const handleDelete = (event) => {
//     console.log('Delete event:', event);
//   };

//   const handleComment = (event) => {
//     console.log('Comment on event:', event);
//   };

//   return (
//     <div className="flex pt-[3rem] bg-primarybg">
//       <Sidebar />
//       <div className="flex-1 min-h-screen p-4">
//         <div className="flex items-center mb-2">
//           <img src="./Picture/profile.png" alt="Profile" className="w-8 h-8 mr-2" />
//           <p className="text-3xl">Your Events</p>
//         </div>
//         <div className="flex justify-center space-x-4 mb-4">
//           <button onClick={() => setFilter('two days-or-less')} className="bg-headerscolor text-white px-4 py-2 hover:bg-highlightcolor transition">two days or less</button>
//           <button onClick={() => setFilter('before3days')} className="bg-headerscolor text-white px-4 py-2 hover:bg-highlightcolor transition">Before 3 days</button>
//           <button onClick={() => setFilter('afterDate')} className="bg-headerscolor text-white px-4 py-2 hover:bg-highlightcolor transition">After the date</button>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {events.map((event, index) => (
//             <EventCard
//               key={index}
//               event={event}
//               onEdit={filter === 'before3days' ? handleEdit : undefined}
//               onDelete={filter === 'before3days' ? handleDelete : undefined}
//               onComment={filter === 'afterDate' ? handleComment : undefined}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;



import React, { useState, useEffect } from 'react';

const EventCard = ({ event, onEdit, onDelete, onComment }) => (
  <div className="p-4 bg-secondarybg shadow-golden">
    <p className="text-xl">{event.type}</p>
    <p className="text-xl">{event.venue.name}</p>
    <p className="text-xl pb-2">{new Date(event.date).toLocaleDateString()}</p>
    {onEdit && <button onClick={() => onEdit(event)} className="bg-headerscolor text-white px-2 py-1">Edit</button>}
    {onDelete && <button onClick={() => onDelete(event)} className="bg-headerscolor text-white px-2 py-1">Delete</button>}
    {onComment && <button onClick={() => onComment(event)} className="bg-headerscolor text-white px-2 py-1">Add Comment</button>}
  </div>
);

const Sidebar = ({ onLogout }) => (
  <div className="w-64 bg-secondarybg h-screen pt-4 shadow-lg">
    <div className="flex justify-end">
      <img src="./Picture/ftop.png" alt="tel" className="w-2/3" />
    </div>
    <div className="text-center">
      <div className="text-3xl text-headerscolor font-montserratefont font-semibold  mb-4">Profile</div>
    </div>
    <div className="mb-[8rem] px-7">
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <img src="./Picture/profile.png" alt="Profile" className="w-8 h-8 mr-2" />
          <p className="text-2xl">User Name</p>
        </div>
        <div className="flex items-center">
          <img src="./Picture/profile.png" alt="Email" className="w-8 h-8 mr-2" />
          <p className="text-2xl">Email</p>
        </div>
      </div>
      <button onClick={onLogout} className="w-[180px] bg-headerscolor hover:bg-highlightcolor transition text-white px-4 py-2">Log out</button>
    </div>
    <img src="./Picture/fb.png" alt="tel" className="w-2/3" />
  </div>
);

const Profile = () => {
  const [filter, setFilter] = useState('before2days');
  const [events, setEvents] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        let url = 'http://localhost:5000/events/upcoming';
        switch (filter) {
          case 'before2days':
            url = 'http://localhost:5000/events/two-days-or-less';
            break;
          case 'before3days':
            url = 'http://localhost:5000/events/outdated';
            break;
          case 'afterDate':
            url = 'http://localhost:5000/events/after-date';
            break;
          default:
            break;
        }
        
        const response = await fetch(url, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        
        const data = await response.json();
        console.log(url);
        if (!response.ok) {
          alert('Failed to fetch events');
        }else{
          console.log(data);
          setEvents(data);
        }

      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, [filter]);

  const handleEdit = (event) => {
    console.log('Edit event:', event);
  };

  const handleDelete = (event) => {
    console.log('Delete event:', event);
  };

  const handleComment = (event) => {
    console.log('Comment on event:', event);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setMessage('You have successfully logged out.');
    setTimeout(() => {
      setMessage('');
      window.location.href = '/login'; 
    }, 2000);
  };

  return (
    <div className="flex pt-[3rem] bg-primarybg">
      <Sidebar onLogout={handleLogout} />
      <div className="flex-1 min-h-screen p-4">
        <div className="flex items-center mb-2">
          <img src="./Picture/profile.png" alt="Profile" className="w-8 h-8 mr-2" />
          <p className="text-3xl">Your Events</p>
        </div>
        <div className="flex justify-center space-x-4 mb-4">
          <button onClick={() => setFilter('before2days')} className="bg-headerscolor text-white px-4 py-2 hover:bg-highlightcolor transition">Before 2 days</button>
          <button onClick={() => setFilter('before3days')} className="bg-headerscolor text-white px-4 py-2 hover:bg-highlightcolor transition">Before 3 days</button>
          <button onClick={() => setFilter('afterDate')} className="bg-headerscolor text-white px-4 py-2 hover:bg-highlightcolor transition">After the date</button>
        </div>
        {message && <div className="text-red-500 text-left mb-4">{message}</div>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((event, index) => (
            <EventCard
              key={index}
              event={event}
              onEdit={filter === 'before2days' ? handleEdit : undefined}
              onDelete={filter === 'before3days' ? handleDelete : undefined}
              onComment={filter === 'afterDate' ? handleComment : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
