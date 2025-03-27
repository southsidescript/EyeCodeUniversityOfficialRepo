import React from "react";
import style from '../../styles/global.module.scss'
import DesignStation from "@/Components/organisms/design-station/DesignStation";
import Link from "next/link";
import '@/app/global.css'

const Home = ()=> {
   

    
return(
    <main className={style.home}>
     
        <div className={style.container}>
      
            <DesignStation/>
        </div>

        <div className={style.home_heading}>EyeCode <br/> <sup>University</sup></div>
   

    <div className={style.home_title}>
    EyeCode University — инновационная платформа знаний, где искусственный интеллект, передовые технологии и практический опыт создают IT-лидеров будущего.
    </div>
    
        <nav className={style.home_nav}>
            <Link href="/about">
                <div className={style.home_nav_firstelement}>Модули</div>
            </Link>

            
            <button className={style.home_nav_button}>Начать обучение</button>
           
            <Link href="/about">
                <div className={style.home_nav_lastelement}>Контакты</div>
            </Link>


        </nav>

    </main>
)

}


export default Home;
