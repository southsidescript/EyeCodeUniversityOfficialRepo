import DesignStation from "@/Components/organisms/design-station/DesignStation";
import style from '../../styles/global.module.scss';
import Image from "next/image";
import PaymentCard from "@/Components/molecules/payment-button/Payment";
import Header from "@/Components/organisms/header/Header";
const Payment = () => {


    return( 
        <section className={style.payment}>
          <Header/>  
            <div className={style.container}>
               
                     <DesignStation/>
                
              
                <h2 className={style.payment_heading}>  Оплата обучения</h2>

                 <div className={style.payment_details}>
                          <PaymentCard 
                          type={'Система переводов МИР'}
                          image={ {
                            src:'/mir-logo.png',
                           width:40,
                           height:10    
                        } }
                          number={'2202 2023 3035 2026'}
                          currency={'₽ (RUB)'}
                           
                           
                           />

                        <PaymentCard 
                          type={'Система переводов VISA'}
                          image={ {
                            src:'/visa-logo.png',
                           width:48,
                           height:48    
                        } }
                          number={'2202 2023 3035 2026'}
                          currency={'$ (Dollar USA)'}
                           
                           /> 
                     </div>      
                     </div>
        </section>
 
       
   )

}


export default Payment;