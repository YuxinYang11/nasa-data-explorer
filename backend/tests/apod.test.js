const request = require('supertest');
const app = require('../server');

describe('GET /api/apod', () => {
  it('should return status 200 and contain a title field', async () => {
    const res = await request(app).get('/api/apod');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('title');
  });
});
