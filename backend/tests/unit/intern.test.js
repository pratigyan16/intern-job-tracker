const request = require('supertest');
const app = require('../../app'); // ✅ updated path
const mongoose = require('mongoose');

describe('Intern Routes', () => {
  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('GET /api/interns - should return Intern routes working', async () => {
    const res = await request(app).get('/api/interns');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('Intern routes working');
  });
});
