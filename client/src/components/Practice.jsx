import React, { useContext, useRef, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext';

import Progress from './ProgressBar'

const Practice = () => {

    const state = useContext(GlobalContext);

    const nounChoice = useRef();
    const verbChoice = useRef();
    const adverbChoice = useRef();
    const adjectiveChoice = useRef();

    const [wordsList] = state.wordsList;
    const [rankScreen,setRankScreen] = state.rank;
    const [score, setScore] = state.score;
    const [answered, setAnsewred] = useState(false);
    const [next, setNext] = useState(false);
    const [selectedWord, setSelectedWord] = useState(0);
    const [progressCount, setProgressCount] = useState(0);

    const handleOnClick = (choice) => {

        if (answered) return false;

        if (choice.current.name === wordsList[selectedWord].pos) {
            choice.current.style.backgroundColor = "green";
            setAnsewred(true);
            setScore(score + 1);
        } else {
            choice.current.style.backgroundColor = "red";
            setAnsewred(true);
        }
        setNext(true);
        setProgressCount(progressCount + 1);
    };

    const handleNextBtn = async () => {

        if (selectedWord >= wordsList.length - 1) {
            setRankScreen(true);
            return false;
        } else {
            setSelectedWord(selectedWord + 1);
            setAnsewred(false);
            setNext(false);

            nounChoice.current.style.backgroundColor = "";
            verbChoice.current.style.backgroundColor = "";
            adverbChoice.current.style.backgroundColor = "";
            adjectiveChoice.current.style.backgroundColor = "";
        }

    }
    return (
        <div className='container mt-3 p-3 m-auto bg-neutral-800 rounded-lg mx-auto'>
            <div className=' m-3 p-3'>

                <div className='mb-2'>
                    <Progress progressPercentage={(progressCount / wordsList.length) * 100} />
                </div>

                <div className='my-3'>
                    <p className='text-md font-bold text-white'> POS Test </p>
                    <p className='font-bold text-red-400 mt-2 text-4xl'> {wordsList && wordsList[selectedWord].word}</p>
                </div>

                <div className='flex flex-col mt-5'>
                    <button ref={nounChoice} name="noun" onClick={() => handleOnClick(nounChoice)} className='rounded-md border p-3 font-bold m-3 text-white hover:bg-yellow-700'>Noun</button>
                    <button ref={verbChoice} name="verb" onClick={() => handleOnClick(verbChoice)} className=' rounded-md border p-3 font-bold m-3 text-white hover:bg-yellow-700'>Verb</button>
                    <button ref={adverbChoice} name="adverb" onClick={() => handleOnClick(adverbChoice)} className=' rounded-md border p-3 font-bold m-3 text-white hover:bg-yellow-700'>Adverb</button>
                    <button ref={adjectiveChoice} name="adjective" onClick={() => handleOnClick(adjectiveChoice)} className=' rounded-md border p-3 font-bold m-3 text-white hover:bg-yellow-700'>Adjective</button>
                </div>

                <div className='text-center mt-4'>
                    <button className={`rounded-md bg-blue-500 text-white p-2 px-4 disabled:opacity-70`} onClick={handleNextBtn} disabled={!next}>{selectedWord >= wordsList.length - 1 ? "Submit" : "Next"}</button>
                </div>
            </div>
        </div>
    )
}

export default Practice;