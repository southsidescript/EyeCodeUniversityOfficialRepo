import React from "react";
import style from '../../styles/global.module.scss'
import DesignStation from "@/Components/organisms/design-station/DesignStation";
import Link from "next/link";
import '@/app/global.css'
import Consult from "@/Components/sections/Consult/Consult";
import Faq from "@/Components/organisms/FAQ/Faq";

const Home = ()=> {
   

    
return(<>
    <main className={style.home}>
     
        <div className={style.container}>
            <DesignStation/>
        </div>

        <div className={style.home_heading}>EyeCode <br/> <sup>University</sup></div>
   

    <div className={style.home_title}>
    EyeCode University — инновационная платформа знаний, где искусственный интеллект, передовые технологии и практический опыт создают IT-лидеров будущего.
    </div>
    
        <Link href={'https://wa.me/79283526584'}>
            <button className={style.home_button}>Начать обучение</button>
            </Link>
   
        


    </main>
    
 
  

   {/* <Faq/> */}
   

    </>
 
)
       
}


export default Home;
