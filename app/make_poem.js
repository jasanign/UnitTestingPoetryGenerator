
/**
 * Poetry Writer
 * @author Gajjan Jasani
 * @version 10/06/2015
 */
 
 /** Creating module object */
module.exports = {};
/** creating shorthand variable for this module */
var exports = module.exports;
 
 /** Importing the data_structures.js module  */
var dataStr = require("./data_structures");


/**
 * Purpose: check if the input file is empty or not using the
 * pickFirstWord function, create an print poem using makePoem function and if 
 * the last argument is true then print the results of all 4 data structires
 * @param {string} path to the input text file
 * @param {number} numOfStanzas number of stanzas to be built
 * @param {number} numOfLines number of lines to be included in each stanza
 * @param {number} numOfWords number of words to be included in each line
 * @param {object} probabilities array of preset probabilities
 * @param {boolean} printResult decision to print the results of all 4 data 
 *                              structures or not
 */
 

var main = function(fileName, numOfStanzas, numOfLines, numOfWords, 
                    probabilities, printResult){
                        
    var firstWord = pickFirstWord(fileName, probabilities[0]);
                        
    if (firstWord === ""){
        console.log("Input can not be empty or only be whitespace.");
    } else {
        
        console.log(makePoem(firstWord, fileName, numOfStanzas,
                        numOfLines, numOfWords, probabilities));
        console.log("");
        console.log("");
    
        if(printResult === true){
            
            console.log("Word Count: "+
                    JSON.stringify(dataStr.wordCount(fileName)));
            console.log("");
            console.log("Word Frequency: "+
                    JSON.stringify(dataStr.wordFreq(fileName)));
            console.log("");
            console.log("Conditional Word Count: "+
                    JSON.stringify(dataStr.condWordCount(fileName)));
            console.log("");
            console.log("Conditional Word Frequency: "+
                    JSON.stringify(dataStr.condWordFreq(fileName)));
            console.log("");
        }
        
    }
    
};

/**
 * Purpose: Create a poem using the arguments from the main function
 * @param {string} firstWord first word from the main function
 * @param {number} numOfStanzas number of stanzas to be built
 * @param {number} numOfLines number of lines to be included in each stanza
 * @param {number} numOfWords number of words to be included in each line
 * @param {object} probabilities array of preset probabilities
 * @returns {string}  poem in string form
 * 
 */
var makePoem = function(firstWord, fileName, numOfStanzas,
                        numOfLines, numOfWords, probabilities){
    
    
    // creating an empty poem with no stanzas, lines or words in it
    var poem = "";
    var wordsWritten = 0;
    var linesWritten = 0;
    var stanzasWritten = 0;
    
    // adding the first word from the main function
    poem = poem + firstWord;
    wordsWritten++;
    
    
    
    // Starting at 1 because we already have our first word added in poem
    for (var i = 1; i < probabilities.length; i++){
        
        var prevWord = firstWord;
        var nextWord = pickNextWord(fileName, prevWord, 
                                                probabilities[i]);
        if (wordsWritten % numOfWords === 0){
            
            linesWritten++;
            if(linesWritten % numOfLines === 0){
            
                stanzasWritten++;
                if(stanzasWritten === numOfStanzas){    
                    break;   
                }
                poem = poem + "\n";
            }
            poem = poem + "\n";
            poem = poem + nextWord;
        } else {
            poem = poem +" "+ nextWord;   
        }
        
        wordsWritten++;
        
        firstWord = nextWord;
    }
    
    return poem;

};

/**
 * Purpose: pick the first word of the poem
 * @param {string} filename path to the file
 * @param {number} probability probability provided by the makePoem function
 * @returns {string}  first word of the poem in string form
 * 
 */
var pickFirstWord = function(filename, probability){
    
    var frequencies = dataStr.wordFreq(filename);
    
    if (frequencies === null){

        return "";
    }
    
    var lowerLimit = 0;
    var upperLimit = 0;
    
    var ordered = {};
    
    Object.keys(frequencies).sort().forEach(function(key) {
        
        ordered[key] = frequencies[key];
    });

    for (var aKey in ordered){
        
        upperLimit = lowerLimit + ordered[aKey];
        if(probability == 0){
            return aKey;
        // avoiding lower limit to be included in 2 consecutive probability 
        // ranges
        }else if(probability > lowerLimit && probability <= upperLimit){
            return aKey;
        } else {
            lowerLimit = upperLimit;
        }
    }
};


/**
 * Purpose: pick a word for the poem using the word provided
 * @param {string} filename path to the file
 * @param {string} prevWord word before 
 * @param {number} probability probability provided by the makePoem function
 * @returns {string} word after the prevWord of the poem in string form
 * 
 */
var pickNextWord = function(fileName, prevWord, probability){
    
    var condFrequencies = dataStr.condWordFreq(fileName);
    var lowerLimit = 0;
    var upperLimit = 0;
    
    var ordered = {};
    var temp = condFrequencies[prevWord];
    Object.keys(temp).sort().forEach(function(key) {
        
        ordered[key] = temp[key];
    });
    
    for (var aKey in ordered){
        
        upperLimit = lowerLimit + ordered[aKey];
        if(probability == 0){
            return aKey;
        }else if(probability > lowerLimit && probability <= upperLimit){
            return aKey;
        } else {
            lowerLimit = upperLimit;
        }
        
    }
};

/** adding the functions to the exports module */

if(typeof(exports) !== 'undefined' && exports !== null){
    
    exports.main = main;
    exports.makePoem = makePoem;
    exports.pickFirstWord = pickFirstWord;
    exports.pickNextWord = pickNextWord;
}



