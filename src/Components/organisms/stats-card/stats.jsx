import style from '@/styles/global.module.scss'
import Image from 'next/image'
import '@/styles/global.css'
import {useContext, useEffect} from "react";
import { ThemeContext} from '../../../Context/Context';
import { result_data } from '@/data/students';
import {RadarChart,PolarGrid,PolarAngleAxis,PolarRadiusAxis,PieChart,Pie,Radar,Legend,ResponsiveContainer} from 'recharts';
import { setTotalCalc ,fidnUser} from '@/utils/helpers';

const StatsCard = (props) => {

    const {activeWindow,setActiveWindow,userData} = useContext(ThemeContext);
   

   
    const {name,codeQuantity,percent,creativity,english} = fidnUser(userData,result_data);

     const total = setTotalCalc(creativity * 10,codeQuantity * 10,percent,english * 10);
    
     const data = [
        {
            "subject": "Code Quality",
            "A": codeQuantity * 10,
            "fullMark": 100
        },
        {
            "subject": "Percentage of completion",
            "A": percent,
            "fullMark": 100
        },
        {
            "subject": "English",
            "A":english * 10,
            "fullMark": 100
        },
        {
            "subject": "Creativity",
            "A": creativity * 10,
            "fullMark": 100
        },
        {
            "subject": "Total",
            "A":total ,
            "fullMark": 100
        },

    ]


      return(
              <div className={style.stats_card}>

                  <div onClick={() => {
                   setActiveWindow(!activeWindow)
                  }} className={style.close}>
                      <Image
                        src={'/close.png'}
                        alt={'close'}
                        width={25}
                        height={25}
                  />

                  </div>

                  <div>
                      <Image
                         
                          src={'/user3.png'}
                          width={180}
                          height={180}
                          className={style.responsUser}
                          alt={'user'}
                      />

                  </div>



                            <RadarChart  className='chart-text'    outerRadius={90} width={330} height={220} data={data}>
                                    <PolarGrid />
                                    <PolarAngleAxis dataKey="subject" />
                                    <PolarRadiusAxis angle={0} domain={[0, 100]} />
                                    <Radar name={name} dataKey="A"  stroke="#8884d8" fill="#8884d8" fillOpacity={0.5} />
                                    <Legend />
                            </RadarChart>

                 


                  <div className={style.stats_card_content}>
                      <div className={style.stats_name}> {name}</div>
                      <div className={style.stats_code_quantity}> Качество кода: <br/> {codeQuantity} /10</div>
                      <div className={style.stats_code_percentage}>ПВЗ: {percent}%</div>
                      <div className={style.stats_creativity}>Креативность: {creativity}/10</div>
                      <div>Английский: {english} / 10</div> 
                      <div className={style.stats_total}>Итого: {total} <sup>/100</sup>
                    
                         <Image
                          src={total < 50?'/delete.png':'/mark.png'}
                          width={30}
                          height={30}
                          alt='mark'
                     
                         />
                      </div>
                  </div>


              </div>




      )


}


export default StatsCard;