const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `adder` function
describe('fizzBuzzer', function() {
  // test the normal cases
  it('should return numbers, if they are not divisible by 3 or 5', function() {
    [1, 2, 4, 7, 8].forEach(el => {
      fizzBuzzer(el).should.equal(el);
    });
  });

  it('should return "fizz", if number is divisible by 3', function() {
    [3, 6, 9, 12].forEach(el => {
      fizzBuzzer(el).should.equal('fizz');
    });
  });

  it('should return "buzz", if number is divisible by 5', function() {
    [5, 10, 20, 25].forEach(el => {
      fizzBuzzer(el).should.equal('buzz');
    });
  });

  it('should return "fizz-buzz", if number is divisible by both 3 and 5', function() {
    [15, 30, 45].forEach(el => {
      fizzBuzzer(el).should.equal('fizz-buzz');
    });
  });

  it('should raise error if arg not number', function() {
    // range of bad inputs that are not numbers
    const badInputs = ['5', false, true, null, {}, [], function() {}];
    // prove that an error is raised for bad inputs
    badInputs.forEach(el => {
      (function() {
        fizzBuzzer(el);
      }.should.throw(Error));
    });
  });
});
