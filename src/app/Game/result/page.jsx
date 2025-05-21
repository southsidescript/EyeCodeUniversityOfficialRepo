'use client';
import './style.css'

import { useEffect,useState } from "react";
import { useRouter,useSearchParams } from "next/navigation";
import { Container } from "@mui/material";
import { Suspense } from "react";
import { CircleUserRound ,CheckCheck,ShieldX,Percent} from 'lucide-react';
import GitHubStarButton from '../settings/githubButton/githubBUtton';
import Counter from '../settings/Countup/Countup';
import CouponCard from '../settings/Coupon/Coupon';
import Link from 'next/link';
const Result = () => {
   
  const [name,setName] = useState('');
  const [score,setScore] = useState(0);
  const searchParams = useSearchParams();
  const [date,setDate] = useState('');
   const [time,setTime] = useState(0);
useEffect(() => {
  const username = searchParams.get('name');
  const score = searchParams.get('score');
 const time = searchParams.get('time');
  
  setDate(Date())
  setScore(String(score))
  setName(username)
  setTime(time)
},[])

    return(
        <>
        <Container>
       
            
               <header
                  className="header">
         <Link href='/starcode'>  <div className="logo">EYECODE QUIZ </div> </Link> 
                   <div className="account"><CircleUserRound color="cyan"/> {name}</div>
                   
                </header>

                <main>
                  <div className="result-card-header">
                                       <div className="result-card-header-title">
                                          <div>Game results</div> 
                                          <div className='result-card-header-percent'>    <Counter point={score * 100 / 20} /> <Percent size={16} color='cyan' />  </div>    
                                       </div>

                                         <div className="play-card-header-title"><GitHubStarButton/></div>  
                                            <CouponCard/>
                                 
                       </div>

                   <div className='result-display'>
                      
                      <div className='result-display-table'>
                        <div className='result-display-table-header'>  <div>Время:{Math.floor(time/60)} m {time%60} s</div> <div>Статистика</div>  <div>{date}</div>     </div>
                        
                        <div className='result-display-table-correct'> <div></div> <div className='result-display-table-score'>{score}+</div> <div>Правильно<CheckCheck size={16} color='#00ff9d'/> </div> </div>
                        <div className='result-display-table-incorrect'><div></div> <div className='result-display-table-score'>{20 - score}-</div> <div>Неправильно <ShieldX size={16} color='#ff0066'/></div> </div>
                      </div>
                       
                    </div>    
 

                </main>
        </Container>
        </>
    )
}





const resultPageSearchParams = () => {

  return(
    
    <Suspense 
     fallback={<div>Loading...</div>}
     >
            <Result/>
    </Suspense>
  )

}

export default resultPageSearchParams;