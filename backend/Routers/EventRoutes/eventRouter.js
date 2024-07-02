const express = require('express');
const router = express.Router();
const eventController = require('../../Controllers/EventController/eventController');
const authMiddleware = require('../../Middleware/authMiddleware');


// Create a new event
router.post('/create', authMiddleware, eventController.createEvent);

// Get all events
router.get('/',authMiddleware, eventController.getAllEvents);

module.exports = router;
