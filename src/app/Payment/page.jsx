import React from "react";
import style from '../../styles/global.module.scss'
import Image from "next/image";
import PaymentButton from "@/Components/payment-button/Payment";

const Payment = ()=> {
   

    
return(
    <section className={style.payment}>
                
         <header className={style.payment_header}>
            
         {/* <div className={style.payment_logo}>
             <Image
              src={'/eyelogov6.png'}
              width={80}
              height={60}
              alt="logo"
       
             />
            </div>            */}
            
            <div className={style.payment_header_heading}>
             Оплата за обучение
            </div>



         </header>

         <section className={style.payment_content}>
          
           
             <PaymentButton status={true}>Оплата переводом</PaymentButton>
             <PaymentButton status={false}>Оплата онлайн</PaymentButton>
         </section>
    



    </section>
)

}


export default Payment;
