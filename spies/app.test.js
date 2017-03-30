const expect = require(`expect`);
const rewire = require(`rewire`);

let app = rewire(`./app`);
//app.__get__

describe(`App`, () => {
  let db = {
    saveUser: expect.createSpy()
  };
  app.__set__(`db`, db);

  it(`should call my spies!`, () => {
    let spy = expect.createSpy();
    // spy();
    // expect(spy).toHaveBeenCalled();
    spy(`Joe Grotto`, 25);
    expect(spy).toHaveBeenCalledWith(`Joe Grotto`, 25);
  });

  it(`should call saveUser with user object`, () => {
    let email = `grottoj@gmail.com`;
    let password = `grotts`;
    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });
});
