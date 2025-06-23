const request = require('supertest');
const app = require('../../server');
const mongoose = require('mongoose');
require('dotenv').config();

let createdEventId;

beforeAll(async () => {
  if (!mongoose.connection.readyState) {
    await mongoose.connect(process.env.MONGODB_URI_TEST);
  }
}, 10000); // ⏱️ Increase timeout to prevent early failures

afterAll(async () => {
  try {
    const db = mongoose.connection.db;
    if (db) {
      await db.collection('events').deleteMany({});
    }
    await mongoose.connection.close();
  } catch (err) {
    console.error('❌ Cleanup error:', err.message);
  }
}, 10000); // ⏱️ Increase timeout

describe('API Tests', () => {
  it('should create a new event', async () => {
    const res = await request(app).post('/api/events').send({
      title: 'Test Event',       // ✅ correct key
      location: 'Test Location',
      date: '2025-06-30',
    });

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Test Event'); // 🛠️ fix incorrect 'name' -> 'title'
    createdEventId = res.body._id;
  });

  it('should get all events', async () => {
    const res = await request(app).get('/api/events');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should delete an event', async () => {
    console.log('🧪 createdEventId:', createdEventId);
    const res = await request(app).delete(`/api/events/${createdEventId}`);
    expect(res.statusCode).toBe(200);
  });
});
