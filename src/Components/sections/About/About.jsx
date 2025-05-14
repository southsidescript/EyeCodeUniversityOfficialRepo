import styles from '@/styles/global.module.scss';
import Container from '@/Components/organisms/Containers/container/Container';
import Circle from '@/Components/atoms/Circle/Circle';
import Dashed from '@/Components/atoms/Dashed/Dashed';
import Lighthouse from '@/Components/atoms/Lighthouse/Lighthoues';
import Triangle from '@/Components/atoms/Triangle/Triangle';
const About = () => {


    return(<>
 
        <section className={styles.about_wrapper}>
               <Container>
                 <div className={styles.about}>

                    <div className={styles.about_heading}>
                      <h2>Новичок ты или Junior - неважно.</h2>
                      <p>Мы дадим тебе прочную базу и весь нужный стек, чтобы создавать приложения и стать ценным разработчиком.</p>  
                    </div>

                    <div className={styles.about_items}>

                        <div className={styles.about_items_item}> <div className={styles.about_items_item_design}><Circle/></div>  <div className={styles.about_items_item_title}> Разработка веб-приложений</div></div>
                        <div className={styles.about_items_item}> <div className={styles.about_items_item_design}><Dashed/></div>  <div className={styles.about_items_item_title}> Алгоритмы и структуры данных</div></div>
                        <div className={styles.about_items_item}> <div className={styles.about_items_item_design}><Lighthouse/></div>  <div className={styles.about_items_item_title}> Разработка мобильных приложений</div></div>
                        <div className={styles.about_items_item}> <div className={styles.about_items_item_design}><Triangle/></div>  <div className={styles.about_items_item_title}> Разработка игр</div></div>
          
                    </div>
                 
                 </div>
              </Container>
        </section>
   
    </>)
}

export default About;