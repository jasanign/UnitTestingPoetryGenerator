/**
 *  Testing the make_poem.js 
 *  @author - GJ
 *  @version - 11/2/2015
 */

var assert = require('chai').assert;
var makePoem = require("../make_poem.js");
//var sinon = require('sinon');

//============ testing pickFirstWord(..) function =============


describe('make_poem', function() {
  describe(' pickFirstWord(..)', function () {
    
    var emptyFile = makePoem.pickFirstWord("qa/empty_input_text.txt", 0);
    var zeroProb = makePoem.pickFirstWord("qa/makePoemTest.txt", 0);
    var not0Prob = makePoem.pickFirstWord("qa/makePoemTest.txt", 0.3);
    var lastWord = makePoem.pickFirstWord("qa/makePoemTest.txt", 1);
    
    it('should return an empty string if data provided in argument has' 
                          +' nothing but white spaces', function () {
      assert.strictEqual("", emptyFile);
    });
    it('should return alphabetically first word in the file when'+
    ' probability is set to zero', function () {
      assert.strictEqual("Apple", zeroProb);
    });
    it('should return a string', function() {
       assert.isString(zeroProb);
    });
    it('should return "Apple" when 0.3 is the probability '+
    'provided in argument', function () {
      assert.strictEqual("Apple", not0Prob);
    });
    it('should return alphabetically last word in the file when'+
    ' probability is set to one', function () {
      assert.strictEqual("Dog", lastWord);
    });
  });
});


//============ testing pickNextWord(...) function =============


describe('make_poem', function() {
  describe(' pickNextWord(...)', function () {
    
    var zeroProb = makePoem.pickNextWord("qa/makePoemTest.txt",
                                                "Dog", 0);
    var not0Prob = makePoem.pickNextWord("qa/makePoemTest.txt",
                                                "Apple", 0.3);
   
    it('should return "Boy" when first word picked is "Dog" and '+
    ' probability is set to zero', function () {
      assert.strictEqual("Boy", zeroProb);
    });
    it('should return a string', function() {
       assert.isString(zeroProb);
    });
    it('should return "Cat" when first word picked is "Apple" and '+
    'probability is set to 0.3', function () {
      assert.strictEqual("Cat", not0Prob);
    });
  });
});


//============ testing makePoem(...) function =============


describe('make_poem', function() {
  describe(' makePoem(...)', function () {
    
    var poem = makePoem.makePoem("Apple", "qa/makePoemTest.txt", 1, 2, 3,
    [0, 0.1, 0.3, 0.5, 0.7, 0.9]);
    
    it('should return a string', function() {
       assert.isString(poem);
    });
    it('should return \n\t\t"Apple Cat Apple\n\t\t Cat Apple Dog"', function () {
      assert.strictEqual("Apple Cat Apple\nCat Apple Dog", poem);
    });
  });
});


//=============== main(.....) function ==================
// all what main function does is printing on console. 
//=======================================================

// describe('make_poem', function() {
//   describe(' main(.....)', function () {
      
//     beforeEach(function() {
//      this.sinon.stub(console, 'log');
//     });
      
//     it("should log an error if no target is passed in", function() {
//       var main = makePoem.main("qa/empty_input_text.txt",
//                                 0,0,0,[0, 0.2, 0.5, 0.7, 1], false);
//       sinon.assert.calledOnce(console.log);
//       sinon.assert.calledWith("Input can not be empty or only be whitespace.");
//     });

//     it("should log an error if no target is passed in", function() {
//       var main = makePoem.main("qa/makePoemTest.txt",
//                                 0,0,0,[0, 0.2, 0.5, 0.7, 1], false);
//       sinon.assert.calledOnce(console.log);
//       sinon.assert.calledWith("Input can not be empty or only be whitespace.");
//     });
    
//     it("should log an error if no target is passed in", function() {
//       var main = makePoem.main("qa/makePoemTest.txt",
//                                 0,0,0,[0, 0.2, 0.5, 0.7, 1], false);
//       sinon.assert.calledOnce(console.log);
//       sinon.assert.calledWith("Input can not be empty or only be whitespace.");
//     });
//   });
// });



