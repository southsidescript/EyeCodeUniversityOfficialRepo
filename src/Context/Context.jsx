'use client'
import {createContext } from 'react';
import React from 'react';
import {useState} from "react";

export const ThemeContext = createContext(null);





function SendContextApi({children}){

const [activeWindow, setActiveWindow] = useState(false);
const [userData,setUserData] = useState('');





return(
    <ThemeContext.Provider  value={{activeWindow, setActiveWindow,userData,setUserData}} >{children}</ThemeContext.Provider>
)






}

export default SendContextApi;