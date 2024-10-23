import style from '../../styles/global.module.scss'
import Image from 'next/image'
import '../../styles/global.css'
import {useContext, useEffect} from "react";
import { ThemeContext} from '../../Context/Context';
import '../../styles/global.css'

const StatsCard = (props) => {



    const {activeWindow,setActiveWindow} = useContext(ThemeContext);

    const {name,codeQuantity,percent,creativity} = props;

    useEffect(() => {

     

    }, []);

      return(


              <div className={style.stats_card}>

                  <div onClick={() => {
                   setActiveWindow(!activeWindow)
                  }} className={style.close}><img src="./close.png" alt=""/></div>

                  <div>
                      <Image
                          src={'/user3.png'}
                          width={200}
                          height={200}
                          alt={'user'}
                      />

                  </div>

                  <div className={style.stats_card_content}>
                      <div className={style.stats_name}> {name}</div>
                      <div className={style.stats_code_quantity}> Качество кода:{codeQuantity}</div>
                      <div className={style.stats_code_percentage}>Процент выполненного задания:{percent}%</div>
                      <div className={style.stats_creativity}>Креативность:{creativity}</div>
                  </div>


              </div>




      )


}


export default StatsCard;