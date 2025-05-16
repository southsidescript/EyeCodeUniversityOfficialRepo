import UniverseCompetitionTable from "./universe-competition-table"
import UniverseFooter from "./universe-footer"
import './style.css';


export default function Page() {
  return (
    <div className="page-container">
       
  
      <main className="main-content">
         <UniverseCompetitionTable />
      </main>
      <UniverseFooter />
    </div>
  )
}
