import style from '../../styles/global.module.scss';
import Card from "../../Components/organisms/user-card/Card";
import { result_data } from '@/data/students'
import StatsCardContainer from '@/Components/organisms/statsCardContainer/statsCardContainer';

import Header from '@/Components/organisms/header/Header';


 const  Stats = () => {



    return(
            <main className={style.stats}>

            <Header/>
                
        
                <StatsCardContainer/>
                
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