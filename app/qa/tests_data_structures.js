/**
 *  Testing the data_structures.js 
 *  @author - GJ
 *  @version - 11/2/2015
 */

var assert = require('chai').assert;
var dataStr = require("../data_structures.js");


//============ testing readFile(file) function ============

describe('data_structures', function() {
  describe('readFile(fileName)', function () {
    
    var dataString = dataStr.readFile("qa/readFileTest.txt");
    it('should return a string', function() {
       assert.isString(dataString);
    });
    it('should return data present in file provided in argument', function(){
      assert.equal('one two three... check', dataString);
    });
  });
});

//============ testing checkEmptyFile(data) function ============

describe('data_structures', function() {
  describe('checkEmptyFile(data)', function () {
    
    var emptyString = dataStr.checkEmptyFile(" \t\n");
    var nonEmptyString = dataStr.checkEmptyFile("Hello!!!");


    it('should return \'empty\' if data provided in argument has' 
                          +' nothing but white spaces', function () {
      assert.strictEqual('empty', emptyString);
    });
    it('should return a string', function() {
       assert.isString(nonEmptyString);
    });
    it('should return \'not empty\' if data provided in argument has' 
                      +' characters besides white spaces', function () {
      assert.strictEqual('not empty', nonEmptyString);
    });
  });
});

//============ testing checkWord(word, yourObj) function ============

describe('data_structures', function() {
  describe('checkWord(word, yourObj)', function () {
    
    var testWord = "Hello";
    var testObj = {};
    dataStr.checkWord(testWord, testObj);
    var result = JSON.stringify(testObj);
    dataStr.checkWord(testWord, testObj);
    var result2 = JSON.stringify(testObj);

    it('should add the word to yourObj and set its value'+
    ' to 1 if the word is not a property of yourObj', function () {
      assert.equal('{\"Hello\":1}', result);
    });
    it('should now have the word as a property of yourObj', function() {
        assert.property(testObj, testWord);
    });
    it('should increase the value of yourObj\'s word property by 1'+
    ' as the word is already a property of yourObj', function () {
      assert.equal('{\"Hello\":2}', result2);
    });
  });
});

//============ testing wordCount(text) function ============

describe('data_structures', function() {
  describe('wordCount(file)', function () {
    
    var emptyFile = dataStr.wordCount("qa/empty_input_text.txt");
    var nonEmptyFile = dataStr.wordCount("qa/wordCountFreqTest.txt");
    
    
    it('should return '+null+' if file provided in argument has' 
                          +' nothing but white spaces', function () {
      assert.deepEqual(null , emptyFile);
    });
    it('should return an object', function() {
       assert.isObject(nonEmptyFile);
    });
    it('should return word count if file provided in argument' 
                      +' is not empty', function () {
      assert.deepEqual({"green":2,"blue":2,"red":2}, nonEmptyFile);
    });
  });
});


//============ testing wordFreq(text) function ============

describe('data_structures', function() {
  describe('wordFreq(file)', function () {
    
    var emptyFile = dataStr.wordFreq("qa/empty_input_text.txt");
    var nonEmptyFile = dataStr.wordCount("qa/wordCountFreqTest.txt");
    
    it('should return '+null+' if file provided in argument has' 
                          +' nothing but white spaces', function () {
      assert.deepEqual(null , emptyFile);
    });
    it('should return word Frequencies if file provided in argument' 
                      +' is not empty', function () {
      assert.deepEqual({"green":2,"blue":2,"red":2}, nonEmptyFile);
    });
  });
});

//============ testing condWordCount(text) function ============

describe('data_structures', function() {
  describe('condWordCount(file)', function () {
    
    var emptyFile = dataStr.condWordCount("qa/empty_input_text.txt");
    var nonEmptyFile = dataStr.condWordCount("qa/condWordCountTest.txt");
    
    
    it('should return '+null+' if file provided in argument has' 
                          +' nothing but white spaces', function () {
      assert.deepEqual(null , emptyFile);
    });
    it('should return an object', function() {
       assert.isObject(nonEmptyFile);
    });
    it('should return conditional word count if file provided in argument' 
                      +' is not empty', function () {
      assert.deepEqual({"red":{"blue":3,"red":3},"blue":{"blue":5,"red":3}},
                          nonEmptyFile);
    });
  });
});

//============ testing condWordFreq(text) function ============

describe('data_structures', function() {
  describe('condWordCount(file)', function () {
    
    var emptyFile = dataStr.condWordFreq("qa/empty_input_text.txt");
    var nonEmptyFile = dataStr.condWordFreq("qa/condWordFreqTest.txt");
    
    
    it('should return '+null+' if file provided in argument has' 
                          +' nothing but white spaces', function () {
      assert.deepEqual(null , emptyFile);
    });
    it('should return conditional word count if file provided in argument' 
                      +' is not empty', function () {
      assert.deepEqual({"red":{"blue":0.25,"red":0.75},"blue":{"red":1}},
                          nonEmptyFile);
    });
  });
});



