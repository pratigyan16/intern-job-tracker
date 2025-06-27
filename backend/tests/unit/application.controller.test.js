const { createApplication } = require('../../controllers/application.controller');
const httpMocks = require('node-mocks-http');
const Application = require('../../models/application.model');

jest.mock('../../models/application.model');

describe('Unit Test - createApplication', () => {
  it('should create an application and return 201', async () => {
    const mockApp = { company: 'Test', position: 'Intern' };
    const req = httpMocks.createRequest({ body: mockApp });
    const res = httpMocks.createResponse();
    Application.create.mockResolvedValue(mockApp);

    await createApplication(req, res);

    expect(res.statusCode).toBe(201);
    const data = res._getJSONData();
    expect(data.data).toEqual(mockApp);
  });
});
