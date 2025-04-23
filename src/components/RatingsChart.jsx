import React from 'react'
import {Chart as ChartJS, CategoryScale,LinearScale, PointElement, LineElement, LineController} from 'chart.js';
import {Line} from 'react-chartjs-2';

ChartJS.register(CategoryScale,LinearScale, PointElement, LineElement, LineController);

function RatingsChart() {

  const ratings = {
    1: 2,
    2: 3,
    3: 1,
    4: 5,
    5: 2
  };

  const data={
    labels:['1', '2', '3', '4', '5'],
    datasets:[
      {
        title:'Number of users',
        data: Object.values(ratings),
        borderColor:'#920f0f',
        backgroundColor:'#888'
      }
    ]
  }
  const options={
    responsive: true,
    plugins:{
      legends:{display: false},
      title:{display: true, text:'Line chart', font:{size:20}}
    },
    scales:{
      y:{
        title:{display: true, text:'ratings'},
        beginAtZero:true
      },
      x:{
        title:{display: true, text:'Users'},
      }
    }

  }


  return (
    <Line data={data} options={options} />
  )
}

export default RatingsChart