import Chart from 'chart.js/auto';
import { data } from './data';
import { headerPlugin } from './header-plugin';
import { legendPlugin } from './legend-plugin';
import { tooltipPlugin } from './tooltip-plugin';


const config = {
  type: 'bar',
  data: data,
  options: {
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false
      },
    tooltip: tooltipPlugin,
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        title: {
          display: true,
          text: '$ dollars',
          beginAtZero: true
        },
        ticks: {
          callback: function(value, index, ticks) {
            return '$' + value + ' mil';
          }
        }
      },
    },
  },
   plugins: [headerPlugin, legendPlugin] 
};

Chart.defaults.font.family = "'Montserrat'";
new Chart("myChart", config);