import React from 'react';
import { Pie } from "react-chartjs-2";

const getRandomLightColor = () => {
    const r = Math.floor(Math.random() * (255 - 128 + 1)) + 128;
    const g = Math.floor(Math.random() * (255 - 128 + 1)) + 128;
    const b = Math.floor(Math.random() * (255 - 128 + 1)) + 128;
    return `rgba(${r}, ${g}, ${b}, 0.7)`;
}

const PieChart = ({ chartData }) => {
    const labels = Object.keys(chartData);
    const dataValues = Object.values(chartData);
    
    const data = {
        labels: labels,
        datasets: [
            {
                data: dataValues,
                backgroundColor: labels.map(() => getRandomLightColor()),
                borderWidth: 2,
            }
        ]
    }

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
                color: '#ffffff'
            }
          },
        },
    }; 

    return (
        <Pie data={data} options={options} />
    )
}

export default PieChart;
