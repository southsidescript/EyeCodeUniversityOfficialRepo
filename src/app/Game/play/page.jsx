'use client'

import { useRouter,useSearchParams } from "next/navigation";
import { useEffect,useState } from "react";
import { Container } from "@mui/material";
import { CircleUserRound,Circle, CircleHelp, Timer } from "lucide-react";
import Cursor from "../settings/Cursor/cursor";
import GitHubStarButton from "../settings/githubButton/githubBUtton";
import './style.css';
import { questions } from "../data/questions";
import { Suspense } from "react";



const Play = () => {
  
  const [name,setName] = useState('');
  const  router = useRouter();
  const searchParams = useSearchParams();
  const [time,setTime] = useState(0);
  const [secs,setSecs] = useState(0);
  const [mins,setMins] = useState(0);
  const [intervalId,setIntervalId] = useState(null);
  const [questionsList,setQuestionsList] = useState(questions);
  const [currentQuestionIndex,setCurrentQuestionIndex] = useState(0);
  const [score,setScore] = useState(0);
  const [isStarted,setIsStarted] = useState(false);


  const handleTime = () => {
  setTime(0)


  const interval = setInterval(() => {
   setTime((prevTime) => {
     const newTime = prevTime + 1;
     setMins(String(Math.floor(newTime / 60)).padStart(2, '0'));
     setSecs(String(newTime % 60).padStart(2, '0'));
     console.log(`${newTime} : ${Math.floor(newTime / 60)} : ${newTime % 60}`);
     return newTime;
   });

   setIntervalId(interval);
 }, 1000);
  

  }

   useEffect( () => {        
       setName(searchParams.get('name'))

    },[]);

    useEffect(() => {
      return () => {
        // Очистка интервала при размонтировании компонента
        if (intervalId) {
          clearInterval(intervalId);
        }
      };
    }, [intervalId]);
     

    return(
         <div className="play">
            <Cursor/>
            <Container >
                <header
                  className="header"
                > 
                   <div className="logo">EYECODE QUIZ </div>   
                   <div className="account"><CircleUserRound color="cyan"/> {name}</div>
                   
                </header>

                <main>
                     <div className="play-container">
                       <div className="play-card-header">
                                     <div className="play-card-header-timer">
                                        <Timer color="gray"/><div>{mins} : {secs}</div> 
                                       </div>

                                         <div className="play-card-header-title"><GitHubStarButton/></div>  
                                 
                       </div>
                          
                        
                          <div className="play-quiz">
                          <div><Circle size={10} color="red" opacity={0.5}/> <Circle size={10} color="orange" opacity={0.5}/> <Circle size={10} color="green" opacity={0.5} /></div>
                         
                         {isStarted ? 
                         <>
                           <div className="play-quiz-header">
                             <div className="play-quiz-title">Вопрос {currentQuestionIndex + 1} из {questionsList.length}</div>
                             <div className="play-quiz-question"> {questionsList[currentQuestionIndex].question} <CircleHelp color="gray" size={18}/></div>
                          </div>
         
                          <div className="play-quiz-options">
                             {questionsList[currentQuestionIndex].options.map((option,index) => {
                                 
                                   return(
                                      <div key={index} className="play-quiz-option" onClick={() => {
                                         if (option === questionsList[currentQuestionIndex].answer) {
                                            setScore(score + 1);
                                         }
                                         if (currentQuestionIndex < questionsList.length - 1) {
                                            setCurrentQuestionIndex(currentQuestionIndex + 1);
                                         } else {
                                            clearInterval(intervalId);
                                            router.push(`/Game/result?name=${name}&score=${score}&time=${time}`);
                                         }
                                      }}>
                                         {option}
                                      </div>
                                   )

                             })}
                          </div>
                        
                         </>  :
                         
                          <>
                          <div className="play-quiz-menu">
                           <button 
                           className="play-quiz-start"
                           aria-label="Начать тестирование"
                           onClick={()=>{
                              setIsStarted(true);
                              handleTime();
                              
                           }} 
                             
                              >START</button>
                              </div>
                          </>
                         }
                         

                           </div>   
                       

                           
                     </div>
                </main>

            </Container>
         </div>
    )

}



const PlayPageWithSuspense = () => (
   <Suspense fallback={<div>Загрузка...</div>}>
     <Play/>
   </Suspense>
 );


export default PlayPageWithSuspense;