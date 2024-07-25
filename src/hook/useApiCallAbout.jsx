import {AboutData} from "../data/AboutData.json";
import {useEffect, useState} from "react";

export const useApiCallAbout = () => {
    const [apiState, setApiState] = useState({
        error: false,
        data: null,
    })
    
    useEffect(()=>{
        try{
            setApiState({error: false, data: AboutData});
        } catch(error){
            throw(
                (new Error("An unexpected error occured:"+error)),
                setApiState({error:true, data: null})
            )
        }
    },[]);
    return {apiState};
};