import fs from 'fs';

let fileData = fs.readFileSync('TestData.json');
let data = JSON.parse(fileData);

let scoreList = data["scoresList"];

const findRank = async (req, res) => {
    const {finalScore} = req.body;
    if (finalScore) {
        const sortedArr = scoreList.sort((a, b) => a - b); 
        const pos = sortedArr.findIndex((score) => score >= finalScore); 
        const rank = Math.round(100 * (pos / sortedArr.length) * 100) / 100;
        return res.status(200).json({ rank }); 
    } else {
        res.status(406).send({ message: 'final score not found' + userScore + " - " + req.body + ' : ' + req });
    }
}

export { findRank };