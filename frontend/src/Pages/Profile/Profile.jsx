const events = [
  { id: 1, title: "Before 2 days", details: { location: "Location A", date: "Date A", name: "Event A" } },
  { id: 2, title: "Before 3 days", details: { location: "Location B", date: "Date B", name: "Event B" } },
  { id: 3, title: "after the date", details: { location: "Location C", date: "Date C", name: "Event C" } },
];

const Profile = () => {
  return (
    <div className="min-h-screen bg-yellow-50 flex">
      <div className="w-1/4 bg-yellow-100 p-6 flex flex-col items-start">
        <div className="text-5xl  text-headerscolor mb-4">Profile</div>
        <div className=" text-2xl mb-2">User Name</div>
        <div className=" text-2xl mb-4">Email</div>
        <button className="bg-yellow-600 text-white px-4 py-2 rounded">Log out</button>
      </div>
      <div className="flex-1 p-6">
        <div className="flex space-x-4 mb-6">
          <button className="bg-yellow-600 text-white px-4 py-2 rounded">Before 2 days</button>
          <button className="text-yellow-600 px-4 py-2 rounded">Before 3 days</button>
          <button className="text-yellow-600 px-4 py-2 rounded">after the date</button>
        </div>
        <div className="text-xl mb-4">Your Events :</div>
        <div className="grid grid-cols-3 gap-4">
          {events.map(event => (
            <div key={event.id} className="relative group p-6 bg-yellow-100 rounded shadow hover:bg-yellow-200 cursor-pointer">
              <div className="text-center">{event.title}</div>
              <div className="absolute inset-0 bg-yellow-50 bg-opacity-80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div>Location: {event.details.location}</div>
                <div>Date: {event.details.date}</div>
                <div>Event: {event.details.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
