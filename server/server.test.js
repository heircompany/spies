const request = require(`supertest`);
const expect = require(`expect`);

let app = require('./server').app;

describe(`Server`, () => {
  describe(`GET /`, () => {
    it(`should return yo kids response`, (done) => {
      request(app)
        .get('/')
        .expect(200)
        .expect('yo kids')
        .end(done);
    });
  });
  
  describe(`GET /users`, () => {
    it(`should return all users, names, and ages`, (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Joe Grotto',
            age: 26
          });
        })
        .end(done);
    });
  });

  describe(`GET /hello`, () => {
    it(`should return 404 error`, (done) => {
      request(app)
        .get('/hello')
        .expect(404)
        // .expect({
        //   error: 'Page not found.'
        // })
        // USE WITH EXCEPT ASSERTIONS
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Page not found.'
          });
        })
        .end(done);
    });
  });
});
