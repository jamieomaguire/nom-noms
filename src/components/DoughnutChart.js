import { Doughnut } from 'react-chartjs-2'

export const DoughnutChart = ({vals}) => (

    <div className="doughnut-box">
      {console.log(vals.datasets[0].data)}
      <Doughnut data={vals}/>
    </div>
)
