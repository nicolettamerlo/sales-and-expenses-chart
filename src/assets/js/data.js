import { monthLabels, sharkGray, cloudyGray } from './utilities';

const onlineSalesValues = [45, 53, 50, 48, 39, 60, 54, 47, 41, 32, 46, 39];
const inStoreSalesValues = [33, 36, 45, 39, 43, 51, 41, 29, 39, 25, 37, 31];
const expensesValues = [25, 29, 21, 15, 18, 33, 34, 37, 41, 49, 43, 22];
const profitValues = [53, 60, 74, 72, 64, 78, 61, 39, 39, 8, 40, 48];
const profitGoalValues = [55, 63, 70, 68, 69, 67, 65, 42, 35, 12, 44, 46];

export const data = {
    labels: monthLabels,
    datasets: [
        {
        type: 'bar',
        label: 'online sales',
        data: onlineSalesValues,
        borderColor: "rgba(83,172,223,1)",
        backgroundColor: "rgba(83,172,223,.3)",
        hoverBackgroundColor: "rgba(83,172,223,.6)",
        borderWidth: 1,
        stack: 'Stack 0',
      },
      {
        type: 'bar',
        label: 'in-store sales',
        data: inStoreSalesValues,
        borderColor: "rgba(80,208,131,1)",
        backgroundColor: "rgba(80,208,131,.3)",
        hoverBackgroundColor: "rgba(80,208,131,.6)",
        borderWidth: 1,
        stack: 'Stack 0',
      },
      {
        type: 'bar',
        label: 'expenses',
        data: expensesValues,
        borderColor: "rgba(236,107,106,1)",
        backgroundColor: "rgba(236,107,106,.3)",
        hoverBackgroundColor: "rgba(236,107,106,.6)",
        borderWidth: 1,
      },
      {
        type: 'line',
        label: 'profit',
        data: profitValues,
        pointStyle: 'rectRot',
        pointRadius: 7,
        pointHoverRadius: 9,
        borderColor: "rgb(241,186,58, 1)",
        backgroundColor: "rgba(241,186,58, .3)",
        hoverBackgroundColor: "rgb(241,186,58, .6)",
        tension: 0.2,
        borderWidth: 1,
      },
      {
        type: 'line',
        label: 'profit goal',
        data: profitGoalValues,
        pointStyle: 'circle',
        pointRadius: 4,
        pointHoverRadius: 7,
        borderColor: sharkGray,
        backgroundColor: cloudyGray,
        hoverBackgroundColor: sharkGray,
        tension: 0.2,
        borderWidth: 1,
        fill: '-1'
      },
    ]
};