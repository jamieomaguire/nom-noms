import { Doughnut } from 'react-chartjs-2'

export const DoughnutChart = ({vals}) => (
    <div className="doughnut-box">
      <Doughnut data={vals}/>
    </div>
)
