import { Doughnut, defaults } from 'react-chartjs-2'

defaults.global.defaultFontColor = '#fff';



export const DoughnutChart = ({vals}) => (
    <div className="doughnut-box">
      <Doughnut data={vals}/>
    </div>
)
