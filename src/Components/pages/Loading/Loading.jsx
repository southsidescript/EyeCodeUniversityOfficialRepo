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
       },5000)
      
    },[]);

    return(<div className={style.loading} >

         <div className={style.greeting}>{greeting}</div>
       
    </div>)
  




}

export default Loading;