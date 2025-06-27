const request = require('supertest');
const app = require('../../app'); // ✅ updated path
const mongoose = require('mongoose');

describe('Application Routes', () => {
  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('GET /api/applications - should return Application routes working', async () => {
    const res = await request(app).get('/api/applications');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('Application routes working');
  });
});
