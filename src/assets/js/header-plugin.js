import { prevYear, currYear, months, currMonth, today } from './utilities';

const chartTitle = `Sales and Expenses - ${prevYear}/${currYear}`;

export const headerPlugin = {
    beforeInit() {
      const titleDom = document.getElementById('chart-title');
      titleDom.textContent = chartTitle;
      const dateDom = document.getElementById('currDate');
      dateDom.textContent = `${months[currMonth].substring(0,3)}. ${today.getDate()}, ${today.getFullYear()}`;
    }
  }