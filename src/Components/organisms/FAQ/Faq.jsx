import style from '@/styles/global.module.scss';
import Accordeon from '@/Components/atoms/Accordeon/Accordeon';
const Faq = () => {


  
    return(
        <div className={style.faq}>
        
            
           <Accordeon summary={'Что ?'}>
            FAQ
           </Accordeon>

        </div>
    )

}

export default Faq;