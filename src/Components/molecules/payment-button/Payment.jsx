import React from "react";
import style from '@/styles/global.module.scss';
import Image from 'next/image';



const PaymentCard = (props) => {
  

        
    return(
        
       <article className={style.payment_card}>
         <p > {props.type}</p>
          <div className={style.payment_card_data}>
              <Image 
                src={props.image.src}
                width={props.image.width}
                height={props.image.height}
                alt="card"
               /> 

               <div className={style.payment_card_data_currency}>Валюта: <span>{props.currency}</span></div> 
               <div className={style.payment_card_data_number}>{props.number}</div>  
               <button className={style.payment_card_data_btn}>Скопировать</button>  
          </div>

       </article>
    )




}

export default PaymentCard;