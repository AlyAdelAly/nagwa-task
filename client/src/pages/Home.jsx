import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import Rank from '../components/Rank';
import Practice from '../components/Practice';

const Home = () => {
  const state = useContext(GlobalContext);
  const [wordsList] = state.wordsList;
  const [rank] = state.rank;

  return (
    <div>
      <nav className="bg-slate-200 p-6">
        <div className="container">
          <span className="mb-0 text-neutral-800 text-xl font-bold ">English Quiz</span>
        </div>
      </nav>
      
      {
        rank ? <Rank /> :
          wordsList.length > 0 &&
          <Practice />
      }
    </div>
  )
}

export default Home