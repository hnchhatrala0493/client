import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const AppContent = createContext();

export const AppContextProvider = (props)=>{

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    axios.defaults.withCredentials = true;
    const[IsLoggedIn,setIsLoggedIn]=useState(false);
    const[useData,setUserData]=useState(false);

    const getAuthState = async ()=>{
        try {
            const {data}=await axios.get(backendUrl+'/api/auth/is-auth')
            if(data.success){
                setIsLoggedIn(true)
                getUserData()
            }   
        } catch (error) {
            toast.error(error.message);
        }
    }
    const getUserData = async ()=>{
        try {
            const {data} = await axios.get(backendUrl+'/api/user/details')
            data.success  ? setUserData(data.userData) : toast.error(data.message);
        } catch (error) {
            toast.error(error.message)
        }
    }
    const value ={
        backendUrl,
        IsLoggedIn,setIsLoggedIn,
        useData,setUserData,getUserData,getAuthState
    }

    return <AppContent.Provider value={value}>
        {props.children}
    </AppContent.Provider>
}