

const request = require('supertest');
const app = require('../server');
// const app = require('./routes/User');
const mongoose = require('mongoose');

module.exports = {
    mongoose,
    connect: () => {
      mongoose.Promise = Promise;
      mongoose.connect(config.database[process.env.ATLAS_URI]);
    },
    disconnect: done => {
      mongoose.disconnect(done);
    }
  };

//test user add route
describe('POST /User/add', () => {
    test('responds with json', (done) => {
        request(app)
            .post('/User/add')
            .send({
                "Name": "test",
                "Email": "",
                "Age": 0,
                "Contact": 0
            })
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            // .set('Accept', 'application/json')
            // .expect('Content-Type', /json/)
            // .expect(200, done);
            });
    },60_000);
});

// describe("Test the root path", () => {
//     test("It should response the GET method", () => {
//         const response = request(app).post("/User/add").send ({
//             Name: "Test",
//             Email: "Test",
//             Age: 20,
//             Contact: 1234567890
//     });
//         expect(response.statusCode).toBe(200);
//     });
// })