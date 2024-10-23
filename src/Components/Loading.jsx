'use client';

import style from '../styles/global.module.scss';
import Image from "next/image";
import { Spin } from 'antd';
import { useState } from "react";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';


const Loading = () => {



    const [load,setLoad] = useState(true)
    
    const router = useRouter();

    useEffect(()=>{

       const timer =  setTimeout(()=>{
            setLoad(false);
            router.push('/Stats')
        },2000);

        return ()=>{
            clearTimeout(timer);
        }


    },[]);








    return(<div className={style.loading} >

         {load?<Spin />:''}


    </div>)
  




}

export default Loading;