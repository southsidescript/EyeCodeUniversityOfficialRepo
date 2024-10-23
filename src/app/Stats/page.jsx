'use client';

import style from '../../styles/global.module.scss';
import Card from "../../Components/user-card/Card";
import { result_data } from '@/module/module';
import { useEffect} from 'react';
import SendContextApi from "@/Context/Context";
import StatsCard from "@/Components/stats-card/stats";
import {ThemeContext} from "../../Context/Context";
import  { useContext } from "react";
const Stats = () => {



  const { activeWindow,userData} = useContext(ThemeContext);





 useEffect(() => {

 },[])


    return(

            <main className={style.stats}>

                {activeWindow?<StatsCard active={activeWindow} name={userData.name} codeQuantity={userData.codeQuantity} creativity={userData.creativity} percent={userData.percentage}/>:''}

                <div className={style.stats_table}>

                    {result_data.map(n => {
                        return <li key={n.id}>
                            <Card name={n.name} status={n.status} codeQuantity={n.codeQuantity} percentage={n.percent} creativity={n.creativity}/>
                        </li>
                    })}


                </div>

            </main>



    )


}


export default Stats;