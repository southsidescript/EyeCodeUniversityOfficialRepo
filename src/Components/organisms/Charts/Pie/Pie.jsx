'use client'
import { PieChart } from '@mui/x-charts';
import { desktopOS,valueFormatter } from '@/app/Docs/Order/details';



export default function Pie() {
    return(
        <PieChart
        colors={['blue', 'yellowgreen', 'white']}
             series={[
                 {
                 data: desktopOS,
                 highlightScope: { fade: 'global', highlight: 'item' },
                 faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                 valueFormatter,
                 innerRadius:30,
                 paddingAngle:5,
                 cornerRadius:10,
                 cx:100
                 
                 },
                 
                 
             ]}
             width={400}
             height={200}
             slotProps={{
                 legend: {
                   labelStyle: {
                     fill: 'white', // Задаем цвет текста
                     fontSize: 14, // Задаем размер шрифта
                   },
                 },
               }}

/> 
    )
}