import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext';
import Spinner from './Spinner';
import apiUrl from '../API/apiUrl';

const Rank = () => {
  const state = useContext(GlobalContext);

  const [rankPage, setRankPage] = state.rank;
  const [rank, setRank] = useState(0);
  const [displayWords, setDisplayWords] = state.displayWords;
  const [score, setScore] = state.score;
  const [wordsList] = state.wordsList;

  const getRank = async () => {
    try {
      let { data } = await axios.post(`${apiUrl}/rank`, { finalScore: (score / wordsList.length) * 100 });
      setRank(data.rank);
    } catch (err) {
      alert(err);
    }
  }
  useEffect(() => {
    getRank();
  }, [])

  const tryAgainFunc = () => {
    setDisplayWords(!displayWords);
    setRank(0);
    setScore(0);
    setRankPage(0);
  };

  return (
    <div className='my-3 p-3 bg-slate-800 font-bold '>
      {
        rank ? <>
          <p className='p-3 text-xl text-white'>
            Congratulations, Your rank is <span className='text-green-600'>{rank}%</span>
          </p>
          <div>
            <button className='bg-green-600 font-bold rounded-md p-2' onClick={tryAgainFunc}>Try Again</button>
          </div>
        </> :
          <div>
            <Spinner />
          </div>
      }
    </div>
  )
}

export default Rank;