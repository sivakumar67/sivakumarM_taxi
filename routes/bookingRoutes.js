const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// Add a booking
router.post('/add', async (req, res) => {
    const { pickup, dropoff } = req.body;

    try {
        const booking = new Booking({ pickup, dropoff });
        await booking.save();
        res.status(201).json({ message: 'Booking added successfully', booking });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add booking' });
    }
});

// Get all bookings
router.get('/', async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch bookings' });
    }
});

module.exports = router;
