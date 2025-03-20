'use client'
import styles from '@/styles/global.module.scss';
import Image from "next/image";

import {ThemeContext} from "@/Context/Context";
import {useContext} from "react";
import BasicGauges from '../Charts/Gauge/Gauge';

const Card = ({name,status,id,percent}) => {

     const {setActiveWindow,activeWindow,setUserData} = useContext(ThemeContext);

     function showStats(){
        setActiveWindow(!activeWindow);
        setUserData(id)
     }

    return(
     
         <tr  onClick={showStats} className={styles.card} >
              <td>  
                 <Image
                  width={25}
                  height={25}
                  src={'/user.png'}
                  alt={name}
              />
              
              </td>
            

        
              <td><div className={styles.card_name}>{name}</div></td>
      
              <td><BasicGauges percent={percent}/></td>

              <td>
                <div className={styles.card_status}>{status? 'Выполнено':'Провалено'} <div className={status ? styles.card_status_active : styles.card_status_inactive}></div>  </div>
              </td>

             <td>
                 <button type="button" className={styles.card_btn}>
                   Info
                 </button>
             </td>


         </tr>


    )
}


export default Card;