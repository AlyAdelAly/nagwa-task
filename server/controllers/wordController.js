import fs from 'fs';

let fileData = fs.readFileSync('TestData.json');
let data = JSON.parse(fileData);

let wordList = data["wordList"];

var verb = false;
var adverb = false;
var noun = false;
var adjective = false;
var randomWordIndex = [];

const fillingWordList = () => {
    randomWordIndex = [];

    while(randomWordIndex.length < 10) {
        const randomNumber = Math.floor(Math.random() * 14);
        if(randomWordIndex.indexOf(randomNumber) === -1) {
            randomWordIndex.push(randomNumber);
        }
    }
    
    for(let index of randomWordIndex) {
        if(wordList[index].pos === "adverb") adverb = true;
        else if(wordList[index].pos === "verb") verb= true;
        else if(wordList[index].pos === "noun") noun = true;
        else if(wordList[index].pos === "adjective") adjective = true;
    }
}

const getWords = async(req,res) => {

    fillingWordList();

    while(!(verb && adverb && noun && adjective)) {
        fillingWordList();
    }

    let randomSelectedWords = [];
    for(let index of randomWordIndex) {
        randomSelectedWords.push(wordList[index]);
    }
    res.status(200).send({data:randomSelectedWords});
}

export { getWords };