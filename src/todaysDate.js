const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${month}/${day}/${year}`;

const dateInHTML = document.getElementById("todaysDate");
export const exportedDate = (dateInHTML.textContent = currentDate);
