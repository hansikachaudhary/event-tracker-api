const Event = require('../../models/Event');
require('./db.setup'); // connects to test DB

describe('Event Model Integration Test', () => {
  it('should save a new event to the DB', async () => {
    const newEvent = new Event({
      title: 'Atlas Test Event',
      date: new Date()
    });

    const saved = await newEvent.save();
    expect(saved.title).toBe('Atlas Test Event');
  }, 10000); // in case of network latency
});
