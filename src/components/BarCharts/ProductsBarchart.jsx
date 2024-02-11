import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

export const ProductsBarchart = (props) => {

    const { titles, prices} = props

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Prices for products',
          },
        },
      };
      
      const data = {
        labels: titles,
        datasets: [
          {
            data: prices,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      };
      
    return(
        < Bar options={options} data={data} />
    )
}

