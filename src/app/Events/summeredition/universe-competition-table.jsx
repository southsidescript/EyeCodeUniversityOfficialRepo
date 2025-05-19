'use client'
import Container       from "@/Components/organisms/Containers/container/Container";
import { event_teams } from "@/data/summer";
import { Trophy }      from "lucide-react";



const UniverseCompetitionTable = () => {
    


  return(
    <>
     <div className="eventusers">
         <Container>
         <div className="eventusers-head">
              <h2>  Eyecode Battle: Summer Edition  </h2>
              <p>Таблица участников</p>  
              
         </div>
</Container>

         <div className="eventusers-body">
          <Container>
            <div className="table-wrapper">
             <div className="table">
               <div className="table-head">
                 <div> № </div>
                 <div> Команда </div>
                 <div> Лидер   </div>
                 <div> Разработчик </div>
                 <div> Тестировщик </div>
                 <div>Очки</div>  
               </div>

               <div className="table-body">
                     
                    {event_teams.map((team,index)=>{
                        return(
                       
                           <div key={index} className={team.pos == 1?'table-body-user first':team.pos == 2?'table-body-user second':team.pos == 3?'table-body-user third':'table-body-user'}>
                               <div>
                                 {team.pos==1?<Trophy color="gold" />:team.pos==2?<Trophy color="silver" />:team.pos==3?<Trophy color="brown" />:<span>{team.pos}</span>}
                               </div>
                               <div> {team.name} </div>
                               <div> {team.leader} </div>
                               <div> {team.dev} </div>
                               <div>{team.qa=='Отсутствует'?<span className="error">{team.qa}</span>:<span>{team.qa}</span>}</div>
                               <div>{team.score}</div>
                           </div>
                        
                        )
                    })}

               </div>
             </div>
             </div>
            
          </Container>
         </div>
  
      </div>
    
    </>
  )




}

export default UniverseCompetitionTable;
