import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';

const Chart = (props) => {

    const {percent, english, creativity, codeQuantity,total,name} = props;

    const data = [
        {
            "subject": "Code Quality",
            "A": codeQuantity * 10,
            "fullMark": 100
        },
        {
            "subject": "Percentage of completion",
            "A": percent,
            "fullMark": 100
        },
        {
            "subject": "English",
            "A":english * 10,
            "fullMark": 100
        },
        {
            "subject": "Creativity",
            "A": creativity * 10,
            "fullMark": 100
        },
        {
            "subject": "Total",
            "A":total ,
            "fullMark": 100
        },

    ]

    return(
        <RadarChart  className='chart-text'    outerRadius={90} width={330} height={220} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={0} domain={[0, 100]} />
            <Radar name={name} dataKey="A"  stroke="#8884d8" fill="#8884d8" fillOpacity={0.5} />
            <Legend />
       </RadarChart>
    )


}
export default Chart;