import { createContext, useState } from "react";

export const AppContent = createContext();

export const AppContextProvider = (props)=>{

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const[IsLoggedIn,setIsLoggedIn]=useState(false);
    const[useData,setUseData]=useState(false);

    const value ={
        backendUrl,
        IsLoggedIn,setIsLoggedIn,
        useData,setUseData,
    }

    return <AppContent.Provider value={value}>
        {props.children}
    </AppContent.Provider>
}