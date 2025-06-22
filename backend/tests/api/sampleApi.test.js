const request = require('supertest');
const app = require('../app'); // Update as per your actual server file

describe('API Test Example', () => {
  it('should return all jobs', async () => {
    const res = await request(app).get('/api/jobs');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});