const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    pickup: { type: String, required: true },
    dropoff: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Booking', bookingSchema);
