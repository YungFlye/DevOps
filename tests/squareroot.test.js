const request = require('supertest')
const app = require('../app');


describe('Sanity test', () => {
    test('1 should equal 1', () => {
        expect(1).toBe(1)
    })
});

describe('addition test', () => {
    test('2 + 2 should equal 2', () => {
        expect(2+2).toBe(2)
    })
});

describe('Squareroot endpoint', () => {
    test('should return the squareroot of 7744', async () => {
        const res = await request(app).get('/api/squareroot/?input=7744');
        expect(res.statusCode).toEqual(200);
        expect(res.body.result).toEqual(88);
    });
});