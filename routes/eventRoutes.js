const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// CREATE Event
router.post('/', async (req, res) => {
  try {
    const event = new Event(req.body);
    const saved = await event.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error('❌ POST error:', err.message);
    res.status(400).json({ error: err.message });
  }
});

// GET All Events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (err) {
    console.error('❌ GET error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// DELETE Event
router.delete('/:id', async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Deleted' });
  } catch (err) {
    console.error('❌ DELETE error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
