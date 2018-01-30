const assert = require('chai').assert;
const funcs = require('../src/project-1.js');
const sinonChai = require('sinon-chai');
const chai = require('chai');
const expect = chai.expect;
chai.use(sinonChai);
// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test to see if the expected return output is of a specified type, as well as the correct outcome.



describe('Project-1 Functions', () => {
  describe('`multiplyByTen`', () => {
    it('should be a function', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.typeOf(multiplyByTen, 'function');
    });
    // begin here
    it('it should multiply a number by ten', () => {
      const multiplyByTen = funcs.multiplyByTen;
      expect(multiplyByTen(2)).to.equal(20);
      assert.typeOf(multiplyByTen(1), 'number');
      // assert.typeOf(multiplyByTen('ew'), 'nan');
    })
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should return number devided by five', () => {
      const subtractFive = funcs.subtractFive
      expect(subtractFive(6)).to.equal(1);
      assert.typeOf(subtractFive(1), 'number');
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should have the same length', () => {
      const areSameLength = funcs.areSameLength;
      expect(areSameLength('red', 'lol')).to.eql(true);
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it(`areEqual('foo', 'foo') to be true`, () => {
      const areEqual = funcs.areEqual;
      expect(areEqual('foo','foo')).to.eql(true);
    })
    it(`areEqual('fooBar', 'foo') to be false`, () => {
      const areEqual = funcs.areEqual;
      expect(areEqual('fooBar','foo')).to.eql(false);
    })
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });

    it(`lessThanNinety(89) should return true`, () => {
      const lessThanNinety = funcs.lessThanNinety;
      expect(lessThanNinety(89)).to.eql(true);
    })
    it(`lessThanNinety(90) should return false`, () => {
      const lessThanNinety = funcs.lessThanNinety;
      expect(lessThanNinety(90)).to.eql(false);
    })
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return true', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      expect(greaterThanFifty(51)).to.eql(true);
    })
    it('should return false', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      expect(greaterThanFifty(49)).to.eql(false);
    })
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should add 2 numbers', () => {
      const add = funcs.add;
     expect(add(1,2)).to.equal(3);
    });

  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should subtract two numbers', () => {
      const subtract = funcs.subtract;
      expect(subtract(5,2)).to.equal(3);
    })
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should divide two numbers', () =>  {
      const divide = funcs.divide;
      expect(divide(6,2)).to.equal(3);
    })
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
    it('should multiply two numbers', () =>  {
      const multiply = funcs.multiply;
      expect(multiply(6,2)).to.equal(12);
    })
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('should get reminder', () =>  {
      const getRemainder = funcs.getRemainder;
      expect(getRemainder(6,4)).to.equal(2);
    })
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('should be a function', () => {
      const isEven = funcs.isEven;
      expect(isEven(4)).to.eql(true);
    });
    it('should be a function', () => {
      const isEven = funcs.isEven;
      expect(isEven(3)).to.eql(false);
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('should return true if odd', () => {
      const isOdd = funcs.isOdd;
      expect(isOdd(5)).to.eql(true);
    });
    it('should return true if odd', () => {
      const isOdd = funcs.isOdd;
      expect(isOdd(6)).to.eql(false);
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('should return the square of a number', () => {
      const square = funcs.square;
      expect(square(3)).to.equal(9);
      expect(square(4)).to.equal(16);
      expect(square(5)).to.equal(25);
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('should return the cube of a number', () => {
      const cube = funcs.cube;
      expect(cube(4)).to.equal(64);
      expect(cube(3)).to.equal(27);
      expect(cube(2)).to.equal(8);
      expect(cube(1)).to.equal(1);
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('should return the power of a number', () => {
      const raiseToPower = funcs.raiseToPower;
      expect(raiseToPower(2,1)).to.equal(2)
      expect(raiseToPower(2,2)).to.equal(4)
      expect(raiseToPower(2,3)).to.equal(8)
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('should round a number', () => {
      const roundNumber = funcs.roundNumber;
      expect(roundNumber(5.6)).to.equal(6);
      expect(roundNumber(5.5)).to.equal(6);
      expect(roundNumber(5.4)).to.equal(5);
      expect(roundNumber(5.3)).to.equal(5);
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('should round up a float', () => {
      const roundUp = funcs.roundUp;
     expect(roundUp(5.1)).to.equal(6);
     expect(roundUp(5.0)).to.equal(5);
     expect(roundUp(5.2)).to.equal(6);
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should add an exclamation point', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      expect(addExclamationPoint('text')).to.equal('text!');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
    it('should combine names', () => {
      const combineNames = funcs.combineNames;
      expect(combineNames('Csaba', 'Balogh')).to.equal('Csaba Balogh');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
    it('should greet people', () => {
      const getGreeting = funcs.getGreeting;
      expect(getGreeting('Csaba')).to.equal('Hello Csaba!');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should count rectangle area', () => {
      const getRectangleArea = funcs.getRectangleArea;
     expect(getRectangleArea(2,5)).to.equal(10);
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should return the area of a triangle', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.equal(getTriangleArea(4,2), 4);
      assert.typeOf(getTriangleArea(4,2), "number");
    })
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });

    it('should return the area of a circle', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.equal(getCircleArea(3), "28.274333882308138")
    })
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should return rectengular prism volume', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.equal(getRectangularPrismVolume(3,3,3), 27);
    })
  });
});
