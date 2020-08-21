const assert = chai.assert;

describe("Practice Assignment 2", function () {
  describe("Question 1", function () {
    it("The variable myValue should by defined.", function () {
      assert.exists(myValue);
    });
    it("The variable myValue should be type string.", function () {
      assert.isString(myValue);
    });
    it("The variable myValue should hold the required value.", function () {
      assert.match(myValue, /^Hello, how's it going\?$/);
    });
  });
  describe("Question 2", function () {
    it("The variable myCharacter should by defined.", function () {
      assert.exists(myCharacter);
    });
    it("The variable myCharacter should be type number.", function () {
      assert.isNumber(myCharacter);
    });
    it("The variable myCharacter should hold the required value.", function () {
      assert.equal(myCharacter, 14);
    });
    it("The variable myLetter should by defined.", function () {
      assert.exists(myLetter);
    });
    it("The variable myLetter should be type string.", function () {
      assert.isString(myLetter);
    });
    it("The variable myLetter should hold the required value.", function () {
      assert.match(myLetter, /^t$/);
    });
  });
  describe("Question 3", function () {
    it("The variable goingPosition should by defined.", function () {
      assert.exists(goingPosition);
    });
    it("The variable goingPosition should be type number.", function () {
      assert.isNumber(goingPosition);
    });
    it("The variable goingPosition should hold the required value.", function () {
      assert.equal(goingPosition, 16);
    });
  });
  describe("Question 4", function () {
    it("The variable mySlice should by defined.", function () {
      assert.exists(mySlice);
    });
    it("The variable mySlice should be type string.", function () {
      assert.isString(mySlice);
    });
    it("The variable mySlice should hold the required value.", function () {
      assert.match(mySlice, /^how's it going\?$/);
    });
  });
  describe("Question 5", function () {
    it("The variable myOtherValue should by defined.", function () {
      assert.exists(myOtherValue);
    });
    it("The variable myOtherValue should be type string.", function () {
      assert.isString(myOtherValue);
    });
    it("The variable myOtherValue should hold the required value.", function () {
      assert.match(myOtherValue, /^Ok\?$/);
    });
    it("The variable myThirdValue should by defined.", function () {
      assert.exists(myThirdValue);
    });
    it("The variable myThirdValue should be type string.", function () {
      assert.isString(myThirdValue);
    });
    it("The variable myThirdValue should hold the required value.", function () {
      assert.match(myThirdValue, /^Hello, how's it going\? Ok\?$/);
    });
  });
  describe("Question 6", function () {
    it("The variable myRandom should by defined.", function () {
      assert.exists(myRandom);
    });
    it("The variable myRandom should be type number.", function () {
      assert.isNumber(myRandom);
    });
    it("The variable myRandom should be greater than or equal to zero.", function () {
      assert.isAtLeast(myRandom, 0);
    });
    it("The variable myRandom should be less than 1.", function () {
      assert.isBelow(myRandom, 1);
    });
  });
  describe("Question 7", function () {
    it("The variable myOtherRandom should by defined.", function () {
      assert.exists(myOtherRandom);
    });
    it("The variable myOtherRandom should be type number.", function () {
      assert.isNumber(myOtherRandom);
    });
    it("The variable myOtherRandom should be greater than or equal to 1.", function () {
      assert.isAtLeast(myOtherRandom, 1);
    });
    it("The variable myOtherRandom should be less than or equal to 10.", function () {
      assert.isAtMost(myOtherRandom, 10);
    });
  });
  describe("Question 8", function () {
    it("The variable myLength should by defined.", function () {
      assert.exists(myLength);
    });
    it("The variable myLength should be type number.", function () {
      assert.isNumber(myLength);
    });
    it("The variable myLength should hold the required value.", function () {
      assert.equal(myLength, 22);
    });
  });
  describe("Question 9", function () {
    it("The variable myCase should by defined.", function () {
      assert.exists(myCase);
    });
    it("The variable myCase should be type string.", function () {
      assert.isString(myCase);
    });
    it("The variable myCase should hold the required value.", function () {
      assert.match(myCase, /^alphabet$/);
    });
  });
  describe("Question 10", function () {
    it("The variable myName should by defined.", function () {
      assert.exists(myName);
    });
    it("The variable myName should be type string.", function () {
      assert.isString(myName);
    });
    it("The variable myName should hold the required value.", function () {
      assert.match(myName, /^\b[a-zA-Z]{3,}\b$/);
    });
    it("The variable myNameLetter should by defined.", function () {
      assert.exists(myNameLetter);
    });
    it("The variable myNameLetter should be type string.", function () {
      assert.isString(myNameLetter);
    });
    const myNameArray = myName.split("");
    it("The variable myNameLetter should hold the required value.", function () {
      assert.include(myNameArray, myNameLetter);
    });
  });
});
