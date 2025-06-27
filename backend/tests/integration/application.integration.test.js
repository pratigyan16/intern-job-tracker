const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../../server'); // or app.js if separated

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

afterAll(async () => {
  await mongoose.connection.close();
});

it('should create and fetch an application', async () => {
  const res = await supertest(app)
    .post('/api/applications')
    .send({ company: 'Amazon', position: 'SDE Intern' });

  expect(res.statusCode).toBe(201);
  expect(res.body.data.company).toBe('Amazon');
});
