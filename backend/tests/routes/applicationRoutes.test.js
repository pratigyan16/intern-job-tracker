const request = require('supertest');
const app = require('../../app'); // ✅ Correct: app.js
const mongoose = require('mongoose');

describe('Application API', () => {
  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should return application routes working', async () => {
    const res = await request(app).get('/api/applications');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Application routes working');
  });
});
