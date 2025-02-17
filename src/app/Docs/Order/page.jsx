import './order.scss'
import Image from 'next/image';
import Pie from '@/Components/organisms/Charts/Pie/Pie';



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
               <Pie />
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