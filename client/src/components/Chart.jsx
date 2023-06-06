import { Center } from '@chakra-ui/react';
import React from 'react';
import {
 Chart as ChartJS,
 CategoryScale,
 LinearScale,
 PointElement,
 LineElement,
 Title,
 Tooltip,
 Filler,
 Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
 CategoryScale,
 LinearScale,
 PointElement,
 LineElement,
 Title,
 Tooltip,
 Filler,
 Legend
);

export const options = {
 responsive: true,
 plugins: {
  legend: {
   position: 'top'
  },
  title: {
   display: true,
   text: 'testing'
  }
 }
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
 labels,
 datasets: [
  {
   fill: true,
   label: 'Dataset 2',
   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
   borderColor: 'rgb(53, 162, 235)',
   backgroundColor: 'rgba(53, 162, 235, 0.5)'
  }
 ]
};

// export function App() {
//   return <Line options={options} data={data} />;
// }

function ChartCom() {
 return (
  <>
   <Center gap={'30px'} flexDir={'column'}>
    <h1>Chart</h1>
    <Line options={options} data={data} />
   </Center>
  </>
 );
}

export default ChartCom;
