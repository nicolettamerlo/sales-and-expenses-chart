// colors
export const sharkGray = "rgb(152,161,170)";
export const cloudyGray = "rgb(208,211,216)";



// date
export const today = new Date();
export const currMonth = parseInt(today.getMonth());
export const currYear = parseInt(today.getFullYear());
export const prevYear = parseInt(currYear) - 1;
export const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export const monthLabels = [...months.slice(currMonth + 1), ...months.slice(0, currMonth + 1)];
