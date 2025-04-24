import style from '@/styles/global.module.scss';
import Doc from '@/Components/organisms/Doc/Doc';
import Link from 'next/link';
const Docs = () => {

    const data = [
        {
            title:"Информация",
            fileType:"DOCX",
            fileSize :"0.645 MB",
            downloadUrl:"/docs/info.docx",
          },
          {
            title:"Реквизиты",
            fileType:"DOCX",
            fileSize :"0.342 MB",
            downloadUrl:"/docs/payment.docx",
          }
    ]


return(
  <section className={style.docs}>
    <h1>Документы</h1>
    <p className={style.docs_title}>Все необходимые материалы в одном портале</p>
     
     <div className={style.docs_container}>

          <Doc {...data[0]} />
          <Doc {...data[1]} />
          
          <Link href={'/Docs/vocabulary'}>
              <article className={style.docs_vocabulary}>
                IT <br />
                Vocabulary
              </article>  
            </Link>

     </div>
 

  </section>
)


}

export default Docs;