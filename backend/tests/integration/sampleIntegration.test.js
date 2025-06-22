const request = require('supertest');
const app = require('../app'); // Update as per your actual server file

describe('Integration Test Example', () => {
  it('should respond with a JSON object', async () => {
    const response = await request(app).get('/api/test');
    expect(response.statusCode).toBe(200);
  });
});