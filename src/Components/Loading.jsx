'use client';

import style from '../styles/global.module.scss';
import Image from "next/image";
import { Spin } from 'antd';
import { useState } from "react";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';


const Loading = () => {


    const [greeting,setGreeting] = useState('Добро пожаловать в EyeCode University Stats')

    const [load,setLoad] = useState(true)
    
    const router = useRouter();

    useEffect(()=>{

         console.log(greeting)

       const timer =  setTimeout(()=>{
            setLoad(false);
            clearTimeout(timer)

           let greetingTimeOut = setTimeout(()=>{
               router.push('/Stats');
               clearTimeout(greetingTimeOut);
           },4000)

        },2000);

        return ()=>{
           ;v
        }


    },[]);








    return(<div className={style.loading} >

         {load?<Spin />:''}

        {!load?<div className={style.greeting}>{greeting}</div> :''}





    </div>)
  




}

export default Loading;