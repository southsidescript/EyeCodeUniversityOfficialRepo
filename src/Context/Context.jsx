'use client'
import {createContext } from 'react';
import React from 'react';
import {useState} from "react";

export const ThemeContext = createContext(null);





function SendContextApi({children}){

const [activeWindow, setActiveWindow] = useState(false);
const [userData,setUserData] = useState('');
const [theme,setTheme] = useState({
    dark:'#000',
    light:'#fff'
});
const [otherSettings,setOtherSettings] = useState(false);







return(
    <ThemeContext.Provider  value={{activeWindow, setActiveWindow,userData,setUserData}} >{children}</ThemeContext.Provider>
)






}

export default SendContextApi;