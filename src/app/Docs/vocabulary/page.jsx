import './vocabulary.css';
import { itTerms } from '@/data/words';

const Vocabulary = () => {
    return (
      <div className='vocabulary'>

<h1>IT vocabulary</h1>
<p>Необходимый набор терминов для начинающих</p>
           <div className='vocabulary-table'>
             

                <ul>
                    {itTerms.map((item,i)=>{
                        return (
                            <li key={i}>{item.en} - {item.ru}</li>
                        )
                    })}
                </ul>

           </div>


      </div>
    )
}

export default Vocabulary;