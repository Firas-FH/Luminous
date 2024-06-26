import './ServicesStyle.css';

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="font-medium">Our Services</h2>
      <div className="service-cards">
        <div className="service-card">
        
          <img src="./Picture/Event.png" alt="Checklist Icon" />
          <h3 className="text-xl font-bold ">Event Planning and Coordination</h3>
          <p>From concept to execution, we manage every detail for a seamless event.</p>
        </div>
        <div className="service-card">
          <img src="./Picture/On.png" alt="Settings Icon" />
          <h3 className="text-xl font-bold ">On-Site Event Management</h3>
          <p>Ensure smooth logistics and coordination on the event day.</p>
        </div>
        <div className="service-card">
          <img src="./Picture/Creative.png" alt="Palette Icon" />
          <h3 className="text-xl font-bold ">Creative Design and Decor</h3>
          <p>Transform spaces with innovative themes and custom decor.</p>
        </div>
        <div className="service-card">
          <img src="./Picture/hands.png" alt="Handshake Icon" />
          <h3 className="text-xl font-bold ">Post-Event Services</h3>
          <p>Cleanup coordination and client follow-up for complete satisfaction.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;

