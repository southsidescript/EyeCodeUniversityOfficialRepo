'use client'
import styles from '@/styles/global.module.scss';
import Image from "next/image";
import '@/styles/global.css'
import {ThemeContext} from "@/Context/Context";
import {useContext} from "react";


const Card = ({name,status,id}) => {

     const {setActiveWindow,activeWindow,setUserData} = useContext(ThemeContext);

     function showStats(){
        setActiveWindow(!activeWindow);
        setUserData(id)
     }

    return(
        <>
         <div  onClick={showStats} className={styles.card} >
        
              <Image
                  width={25}
                  height={25}
                  src={'/user.png'}
                  alt={name}
              />

             <div className={styles.card_name}>{name}</div>
             <div className={styles.card_status}>{status? 'Выполнено':'Провалено'} <div className={status ? styles.card_status_active : styles.card_status_inactive}></div>  </div>

             <div>
                 <button type="button" className={styles.card_btn}>
                   Info
                 </button>

             </div>


         </div>




        </>

    )
}


export default Card;