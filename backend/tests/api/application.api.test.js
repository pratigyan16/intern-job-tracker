const supertest = require('supertest');
const app = require('../../server'); // or app.js

describe('GET /api/applications', () => {
  it('should return a message from the route', async () => {
    const res = await supertest(app).get('/api/applications');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Application routes working');
  });
});
