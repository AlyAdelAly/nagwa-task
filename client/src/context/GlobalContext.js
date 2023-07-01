import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { toast } from "react-toastify";
import apiUrl from "../API/apiUrl";

export const GlobalContext = createContext();

const ContextProvider =({children})=>{
    const [wordsList,setWordsList]=useState([]);
    const [rankScreen,setRankScreen]=useState();
    const [displayWords,setDisplayWords]=useState(false);
    const [score,setScore]=useState(0);

    const getRandomWords=async()=>{
        try {
            let {data}=await axios.get(`${apiUrl}/word`);
            setWordsList([...data.data]);
        } catch (err) {
            toast.error(err.response.data.msg)
        }
    }
    useEffect(()=>{
        getRandomWords();
    },[displayWords])

   
    const state={
      wordsList:[wordsList,setWordsList],
      rank:[rankScreen,setRankScreen],
      score:[score,setScore],
      displayWords:[displayWords,setDisplayWords],
    }

    return(
        <GlobalContext.Provider 
            value={state}>
            {children}
        </GlobalContext.Provider>
    )
}
export default ContextProvider;