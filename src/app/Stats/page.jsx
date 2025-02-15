'use client';

import style from '../../styles/global.module.scss';
import Card from "../../Components/user-card/Card";
import { result_data } from '@/data/students'
import StatsCard from "@/Components/stats-card/stats";
import {ThemeContext} from "../../Context/Context";
import  { useContext } from "react";
import Header from '@/Components/header/Header';

 const  Stats = () => {

  const { activeWindow,userData} = useContext(ThemeContext);

    return(
            <main className={style.stats}>

            <Header/>
                
                  
                {activeWindow?<StatsCard active={activeWindow} english={userData.english} name={userData.name} codeQuantity={userData.codeQuantity} creativity={userData.creativity} percent={userData.percentage}/>:''}
                
                <div className={style.stats_title}>Результаты недели</div>
                
                <div className={style.stats_table}>
                    {result_data.map(n => {
                        return <li key={n.id}>
                            <Card name={n.name} english={n.english} status={n.status} codeQuantity={n.codeQuantity} percentage={n.percent} creativity={n.creativity} total={n.total
                                
                            }/>
                        </li>
                    })}
                </div>

            </main>
        
    )

}


export default Stats;