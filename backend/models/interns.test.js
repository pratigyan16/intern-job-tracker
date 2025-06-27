const request = require('supertest');
const app = require('../server');

describe('GET /api/interns', () => {
    it('should return 200 and a message', async () => {
        const res = await request(app).get('/api/interns');
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe('Intern routes working');
    });
});
