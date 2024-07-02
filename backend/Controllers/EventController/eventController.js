const Event = require('../../Models/Event');
const jwt = require('jsonwebtoken');

// Create a new event
const createEvent = async (req, res) => {
  try {
    // Verify token from headers
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId

    // Check if decoded token is valid
    if (!decoded) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    const { type, date, venue, colors, ambiance, food, extraDetails } = req.body;

    const existingEvent = await Event.findOne({ 'venue.name': venue.name, date: date }); 
    if (existingEvent) { 
      return res.status(400).json({ error: 'The selected venue is already reserved for the chosen date. Please select another date or venue.' }); 
    }

    // Calculate total price
    let totalPrice = 0;
    totalPrice += venue.price;
    ambiance.forEach(item => {
      totalPrice += item.price;
    });
    food.forEach(item => {
      totalPrice += item.price;
    });

    // Create new event with calculated totalPrice
    const newEvent = new Event({
      type,
      date,
      venue,
      colors,
      ambiance,
      food,
      totalPrice,
      extraDetails,
      user : userId
    });

    // Save event to database
    const savedEvent = await newEvent.save();

    res.status(201).json(savedEvent);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Retrieve all events
const getAllEvents = async (req, res) => {
    try {
      const userId = req.userId; 
      const events = await Event.find({ user: userId }); // Find events by user ID
      res.json(events);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

module.exports = {
  createEvent,
  getAllEvents,
};
