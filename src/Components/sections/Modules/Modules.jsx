import style from '@/styles/global.module.scss';
import ClassicButton from '@/Components/molecules/ClassicButton/ClassicButton';
import Link from 'next/link';
const Modules = () => {
    return (
        <section className={style.modules}> 
            <div className={style.modules_title}>
                <h1>Модули обучения</h1>
                <p>Выберите подходящий модуль для себя</p>
             </div>

             <div className={style.modules_cards}>
                <div className={style.modules_card}>
                    <div>
                    <h2>Classic module</h2>
                    <p>Групповое обучение</p>
                     <p>Длительность обучения: 296 часов</p>
                    </div>
                   
                    <div className={style.modules_card_price}>6500 ₽</div>
                     <ClassicButton>
                     <Link href={'https://wa.me/79283526584'}>
                         Подробнее
                     </Link>
                    
                     </ClassicButton>
                </div>

                <div className={style.modules_card}>
                    <div>
                    <h2>Pro module</h2>
                    <p>Индивидуальное обучение</p>
                     <p>Длительность обучения: 256 часов</p>
                    </div>
                   
                    <div className={style.modules_card_price}>13000 ₽ <sup><del>15500₽</del></sup></div>
                     <ClassicButton>
                     <Link href={'https://wa.me/79283526584'}>
                         Подробнее
                     </Link>
                    
                     </ClassicButton>
                </div>
             </div>
        </section>
    )
}
export default Modules;