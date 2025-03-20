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

        <nav className={style.home_nav}>
            <Link href="/about">
                <div className={style.home_nav_firstelement}>Модули</div>
            </Link>

            <Link href="/Stats">
                <div>Результаты</div>
            </Link>
            <button className={style.home_nav_button}>Начать обучение</button>
            <Link href="/Payment">
                <div>Способы оплаты</div>
            </Link>
            <Link href="/about">
                <div className={style.home_nav_lastelement}>Контакты</div>
            </Link>


        </nav>

    </main>
)

}


export default Home;
