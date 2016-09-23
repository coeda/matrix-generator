const Chai = require('chai');
const matrix = require('../matrix-generator.js');
const expect = Chai.expect;
const matrixGenerator = matrix ();

describe('Matrix Generator', () => {
  it('Should be a function', () => {
    expect(matrixGenerator).to.exist;
    expect(matrixGenerator).to.be.a('function');
  });
    describe('create object', () => {
      it('should create an object', () => {
        expect(matrixGenerator(3,3).to.equal([]));
      });
    });
});