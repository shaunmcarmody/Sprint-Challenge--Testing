const request = require('supertest');
const server = require('./server.js');

describe('Games', () => {
  describe('POST /', () => {
    it('should respond with 201 when title and genre property are true', async () => {
      const res = await request(server).post('/').send({ title: 'Pacman', genre: 'Arcade' });
      expect(res.status).toBe(201);
      expect(res.type).toBe('application/json');
      expect(res.body).toEqual({ message: 'Game added' });
    });

    it('should respond with 201 when all properties are true', async () => {
      const res = await request(server).post('/').send({ title: 'Pacman', genre: 'Arcade', releaseYear: 1980 });
      expect(res.status).toBe(201);
      expect(res.type).toBe('application/json');
      expect(res.body).toEqual({ message: 'Game added' });
    });

    it('should respond with a 422 when title or genre property are false', async () => {
      const res = await request(server).post('/').send({ title: 'Pacman' });
      expect(res.status).toBe(422);
      expect(res.type).toBe('application/json');
      expect(res.body).toEqual({ message: 'Title and Genre are required' });
    });

    it('should respond with a 422 when object is empty', async () => {
      const res = await request(server).post('/').send({});
      expect(res.status).toBe(422);
      expect(res.type).toBe('application/json');
      expect(res.body).toEqual({ message: 'Title and Genre are required' });
    });
  });

  describe('GET /', () => {
    it('should respond with 200 OK and return JSON response', async () => {
      const res = await request(server).get('/');
      expect(res.status).toBe(200);
      expect(res.type).toBe('application/json');
    });

    it('should respond with 200 OK and return a JSON response containing an array', async () => {
      const res = await request(server).get('/');
      expect(res.status).toBe(200);
      expect(res.type).toBe('application/json');
      expect(res.body).toEqual(expect.arrayContaining([]))
    });

    it('should respond with 200 OK and the response should contain an array with a length of 2', async () => {
      const res = await request(server).get('/');
      expect(res.status).toBe(200);
      expect(res.type).toBe('application/json');
      expect(res.body).toHaveLength(2);
    });
  });
})