import { result_data} from '@/data/students';
import { fidnUser,setTotalCalc } from '@/utils/helpers';
import { useContext } from 'react';
import { ThemeContext } from '@/Context/Context';
import style from '@/styles/global.module.scss'
import Chart from '@/Components/organisms/Charts/Radar/Chart';
import Image from 'next/image';

const StatsCard = () => {
     

     
    const {setActiveWindow,userData,activeWindow} = useContext(ThemeContext);

    const {name,codeQuantity,percent,creativity,english} = fidnUser(userData,result_data);

    const total = setTotalCalc(creativity * 10,codeQuantity * 10,percent,english * 10);
   
   


    return(
        
        <div className={style.stats_card}>

        <div onClick={() => {
         setActiveWindow(!activeWindow)
        }} className={style.close}>
            <Image
              src={'/close.png'}
              alt={'close'}
              width={25}
              height={25}
        />

        </div>

        <div>
            <Image
               
                src={'/user3.png'}
                width={180}
                height={180}
                className={style.responsUser}
                alt={'user'}
            />

        </div>



         <Chart 
           name={name}
           creativity={creativity}
           english={english}
           codeQuantity={codeQuantity}
           total={total}
           percent={percent}
         />

       


        <div className={style.stats_card_content}>
            <div className={style.stats_name}> {name}</div>
            <div className={style.stats_code_quantity}> Качество кода: <br/> {codeQuantity} /10</div>
            <div className={style.stats_code_percentage}>ПВЗ: {percent}%</div>
            <div className={style.stats_creativity}>Креативность: {creativity}/10</div>
            <div>Английский: {english} / 10</div> 
            <div className={style.stats_total}>Итого: {total} <sup>/100</sup>
          
               <Image
                src={total < 50?'/delete.png':'/mark.png'}
                width={30}
                height={30}
                alt='mark'
           
               />
            </div>
        </div>


    </div>
    )
}

export default StatsCard;