'use client';

import {useContext} from "react";
import { ThemeContext} from '../../../Context/Context';
import StatsCard from '@/Components/molecules/stats-card/StatsCard';

const StatsCardContainer = (props) => {

    const {activeWindow} = useContext(ThemeContext);
   


      return(
        <>             
             { activeWindow ? <StatsCard/> :''}
        </>
         
    
      )


}


export default StatsCardContainer;