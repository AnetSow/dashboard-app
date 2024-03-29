import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { tree } from 'd3-hierarchy';

ChartJS.register(ArcElement, Tooltip, Legend);

export const ProductsDoughnutchart = (props) => {

    const {categories} = props

    const countCategories = categories => {
    const counts = {};
        for (var i = 0; i < categories.length; i++) {
        counts[categories[i]] = 1 + (counts[categories[i]] || 0);
        };

    return counts;
    };
    console.log(countCategories(categories));

    const data = {
 
        labels: ["fragrances", "groceries", "home-decoration",
                "laptops", "skincare", "smartphones",],
        datasets: [
          {
            label: '# of products',
            data: [ 5, 5, 5, 5, 5, 5 ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
            borderWidth: 1,
          },
        ],
      };

      return(
        < Doughnut 
            data={data}
            options = {{
                maintainAspectRatio: false,
                cutout: '60%'
                }} 
        />
      )

}