const monthName = document.getElementById("month-name")
const dayName = document.getElementById("day-name")
const dayNumber = document.getElementById("day-number")
const year = document.getElementById("year")

let createTime = document.createElement('p')

const date = new Date();

monthName.innerHTML =date.toLocaleString("eng", { month:'long'})
dayName.innerHTML =date.toLocaleString("eng", { weekday:'long'})
dayNumber.innerHTML =date.getDate()
year.innerHTML =date.getFullYear()