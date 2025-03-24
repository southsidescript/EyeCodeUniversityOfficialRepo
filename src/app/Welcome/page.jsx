'use client';
import style from '@/styles/global.module.scss'
import { useState } from "react";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';


const Loading = () => {


    const [greeting,setGreeting] = useState('Добро пожаловать в EyeCode University')

    const router = useRouter();

    useEffect(()=>{

      
       setTimeout(()=>{
          router.push('/Stats')
       },4000)
      
    },[]);

    return(<div className={style.welcome} >

         <div className={style.greeting}>{greeting}</div>
       
    </div>)
  




}

export default Loading;