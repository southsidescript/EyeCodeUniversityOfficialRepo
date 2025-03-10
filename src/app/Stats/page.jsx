'use client';
import style from '../../styles/global.module.scss';
import Card from "../../Components/organisms/user-card/Card";
import { result_data } from '@/data/students'
import StatsCard from "@/Components/organisms/stats-card/stats";
import {ThemeContext} from "../../Context/Context";
import  { useContext } from "react";
import Header from '@/Components/organisms/header/Header';


 const  Stats = () => {

  const { activeWindow,userData} = useContext(ThemeContext);
 


    return(
            <main className={style.stats}>

            <Header/>
                
        
                {activeWindow? <StatsCard />:''}
                
                <div className={style.stats_title}>Результаты недели</div>
               
                    
                <div className={style.stats_table}>
                 
                 {result_data.map( n => {
                        return <li key={n.id}>
                            <Card {...n} />
                        </li>
                    })}
            
                  
                </div>

            </main>
        
    )

}


export default Stats;