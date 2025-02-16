'use client'

import './order.scss'
import Image from 'next/image';
import { PieChart } from '@mui/x-charts';
import { desktopOS, valueFormatter } from './details';


const Order = () => {
 
 

    return (
      <section className='order'>
            
          <h1>Чек лист</h1>

          <div className='order_info'>
            <p className='order_info_heading'>Заказчик</p>
              <p className='order_info_name'>Алина</p>
              <p className='order_info_status'>Статус: Ожидает</p>
  
          </div>

          <div className='order_checklist'>
            <ul>
                <li> <Image src={'/mark_v2.png'} width={28} height={28} alt='mark'/> Создание веб-приложения SPA(Single page application) на Next.js </li>
                <li> <Image src={'/mark_v2.png'} width={28} height={28} alt='mark'/>  API-интеграции </li>
                <li> <Image src={'/mark_v2.png'} width={28} height={28} alt='mark'/>  Оптимизация SEO  </li>
                <li> <Image src={'/mark_v2.png'} width={28} height={28} alt='mark'/> Техническая поддержка: 1 месяц  </li>
                <li> <Image src={'/mark_v2.png'} width={28} height={28} alt='mark'/> Интеграция телеграм Бота для получения сообщений от клиентов  </li>
            </ul>
            <div className='order-chart'>
            <PieChart
           colors={['blue', 'yellowgreen', 'white']}
                series={[
                    {
                    data: desktopOS,
                    highlightScope: { fade: 'global', highlight: 'item' },
                    faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                    valueFormatter,
                    innerRadius:30,
                    paddingAngle:5,
                    cornerRadius:10,
                    cx:100
                    
                    },
                    
                    
                ]}
                width={400}
                height={200}
                slotProps={{
                    legend: {
                      labelStyle: {
                        fill: 'white', // Задаем цвет текста
                        fontSize: 14, // Задаем размер шрифта
                      },
                    },
                  }}

/> 
            </div>
        
   
          </div>

          <div className='order_total-price'>
           Итого: 20 990 ₽ <sup> <del>30 000 ₽</del> </sup>
          </div>
          
          <button className='order_accept'>Подтвердить</button>
      

      </section>
    )

}

export default Order;