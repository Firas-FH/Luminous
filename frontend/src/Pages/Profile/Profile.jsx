function EventCard({ event, onEdit, onDelete, onAddComment }) {
  return (
    <div className="bg-secondarybg w-[332px] h-[273px] shadow-md shadow-headerscolor ">
      <h3 className="text-lg  mb-2">{event.name}</h3>
      <p className=" text-lg mb-2">{event.place}</p>
      <p className=" text-lg mb-4">{event.date}</p>
      <div className="flex space-x-2">
        {/* <button
          className="bg-headerscolor hover:bg-highlightcolor transition text-white  py-2 px-4 "
          onClick={onEdit}
        >
          Edit
        </button>
        <button
          className="bg-headerscolor hover:bg-highlightcolor transition text-white  py-2 px-4 "
          onClick={onDelete}
        >
          Delete
        </button>
        {onAddComment && (
          <button
          className="bg-headerscolor hover:bg-highlightcolor transition text-white  py-2 px-4 "
            onClick={onAddComment}
          >
            Add comment
          </button> */}
        {/* )} */}
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
    <div className="bg-primarybg min-h-screen pt-2 pr-[9%] flex justify-between">
      <div className="flex w-1/3 h-screen bg-secondarybg">
        <h1 className="text-3xl font-bold text-yellow-600">Profile</h1>
        {/* <div className="text-lg font-bold text-yellow-600">Your Events:</div> */}
        <div className="flex flex-col space-y-4 mt-8">
        <div className="flex flex-col space-y-2">
          <label htmlFor="userName" className="text-gray-700 font-bold">
            User Name
          </label>
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-gray-700 font-bold">
            Email
          </label>
        </div>
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