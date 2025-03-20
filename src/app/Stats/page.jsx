import style from '../../styles/global.module.scss';
import Card from "../../Components/organisms/user-card/Card";
import { result_data } from '@/data/students'
import StatsCardContainer from '@/Components/organisms/statsCardContainer/statsCardContainer';



 const  Stats = () => {



    return(
            <section className={style.stats}>

        
                
        
                <StatsCardContainer/>
                
                <div className={style.stats_title}>Результаты недели</div>
               
                    
                <table className={style.stats_table}>
                 <thead>
                     <tr><td>user</td><td>Ф.И.О</td><td>Прогресс</td><td>Статус</td><td>Результаты</td></tr>
                 </thead>     
                 <tbody>
                    {result_data.map( n => {
                            return <Card  key={n.id} {...n} />
                         
                        })}
                 </tbody>
                  
                </table>

            </section>
        
    )

}


export default Stats;