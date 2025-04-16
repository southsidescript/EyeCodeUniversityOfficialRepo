import Image from  "next/image"
import style from '@/styles/global.module.scss'
import Link from 'next/link'

const Consult = () => {
    return (
        <div className={style.consult}>
            <h2>Не смогли еще определиться ?</h2>

            <div className={style.consult_action}>
            <Image 
               src={'/consult.png'}
               width={1100}
               height={775}
               alt="consult"
              />
              <Link href={'https://wa.me/79283526584'}>
              <button className={style.consult_btn}>Записаться на консультацию</button>
              </Link>

            </div>
           
            
        </div>
    )
} 

export default Consult;