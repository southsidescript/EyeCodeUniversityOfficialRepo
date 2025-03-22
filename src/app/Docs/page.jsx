import style from '@/styles/global.module.scss';
import Doc from '@/Components/organisms/Doc/Doc';
const Docs = () => {

    const data = [
        {
            title:"Информация",
            fileType:"DOCX",
            fileSize :"0.645 MB",
            downloadUrl:"/docs/info.docx",
          },
          {
            title:"Ревизиты",
            fileType:"DOCX",
            fileSize :"0.342 MB",
            downloadUrl:"/docs/payment.docx",
          }
    ]


return(
  <section className={style.docs}>
    <h1>Документы</h1>
     
     <div className={style.docs_container}>

          <Doc {...data[0]} />
          <Doc {...data[1]} />

     </div>
 

  </section>
)


}

export default Docs;