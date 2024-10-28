import style from '../../styles/global.module.scss'
import Image from 'next/image'
import '../../styles/global.css'
import {useContext, useEffect} from "react";
import { ThemeContext} from '../../Context/Context';
import '../../styles/global.css'
import {RadarChart,PolarGrid,PolarAngleAxis,PolarRadiusAxis,PieChart,Pie,Radar,Legend} from 'recharts';
const StatsCard = (props) => {



    const {activeWindow,setActiveWindow} = useContext(ThemeContext);

    const {name,codeQuantity,percent,creativity} = props;


    const data = [
        {
            "subject": "Code Quantity",
            "A": codeQuantity * 10,
            "fullMark": 100
        },
        {
            "subject": "Percentage of completion",
            cx:12,
            "A": 98,
            "fullMark": 100
        },
        {
            "subject": "English",
            "A": 86,
            "fullMark": 100
        },
        {
            "subject": "Creativity",
            "A": 99,
            "fullMark": 100
        },
        {
            "subject": "Total",
            "A": 85,
            "fullMark": 100
        },

    ]


    useEffect(() => {

        console.log(codeQuantity)

    }, []);

      return(


              <div className={style.stats_card}>

                  <div onClick={() => {
                   setActiveWindow(!activeWindow)
                  }} className={style.close}><img src="./close.png" alt=""/></div>

                  <div>

                      <Image
                          id={'logo'}
                          src={'/user3.png'}
                          width={180}
                          height={180}
                          alt={'user'}
                      />

                  </div>

                  <RadarChart outerRadius={90} width={730} height={250} data={data}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="subject" />
                      <PolarRadiusAxis angle={0} domain={[0, 100]} />
                      <Radar name={name} dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                      <Legend />
                  </RadarChart>



                  <div className={style.stats_card_content}>
                      <div className={style.stats_name}> {name}</div>
                      <div className={style.stats_code_quantity}> Качество кода:{codeQuantity}  </div>
                      <div className={style.stats_code_percentage}>ПВЗ:{percent}%</div>
                      <div className={style.stats_creativity}>Креативность:{creativity}</div>
                  </div>


              </div>




      )


}


export default StatsCard;