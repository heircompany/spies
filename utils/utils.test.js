const expect = require(`expect`);
const utils = require(`./utils`);

// BDD : Behavior Driven Development
describe('Utils', () => {
  describe('#add', () => {
    it(`should add two numbers`, () => {
      let res = utils.add(33, 11);

    // manual error throwing
    // if (res !== 44) {
    // throw new Error(`Value incorrect. Expected ${res}.`);
    // }

      expect(res).toBe(44).toBeA(`number`);
    });

    // use DONE for asynchronous testing
    it(`should add two numbers asynchronously`, (done) => {
      let res = utils.asyncAdd(11, 19, (sum) => {
        expect(sum).toBe(30).toBeA(`number`);
        done();
      });
    });
  });

describe('#square', () => {

  it(`should square number asynchronously`, (done) => {
  let res = utils.asyncSquare(19, (square) => {
    expect(square).toBe(361).toBeA(`number`);
    done();
  });
});

  it('should multiply a number by itself', () => {
  let res = utils.square(11);

  // manual error throwing
  // if (res !== 121) {
  // throw new Error(`Value incorrect. Expected ${res}.`);
  // }

    expect(res).toBe(121).toBeA(`number`);
    });
  });

  describe('#arrays', () => {

    it(`should expect passing results`, () => {
      expect(12).toNotBe(11);
      expect({name: `joe`}).toEqual({name: `joe`});
      expect({name: `Joe`}).toNotEqual({name: `joe`});
      expect([2,3,4]).toInclude(4);
      expect([2,3,4]).toExclude(5);
      expect({
        name: `joe`,
        age: 26,
        location: `Chicago`
      }).toInclude({
        age: 26
      });
      expect({
        name: `joe`,
        age: 26,
        location: `Chicago`
      }).toExclude({
        name: `Joe`
      });
    });
});

  describe('#names', () => {
    // should verify first and last names are set
    // assert it includes firstName and lastName with proper values
    it(`should verify first and last names`, () => {
      let user = {
        location: `chicago`,
        age: 26
      };
      let res = utils.setName(user, `Joe Grotto`);
      expect(user).toEqual(res);
      expect(user).toInclude({
        firstName: `Joe`,
        lastName: `Grotto`
      });
    });
});

});
