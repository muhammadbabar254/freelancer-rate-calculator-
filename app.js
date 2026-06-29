const income = document.getElementById("income");
const days = document.getElementById("days");
const hours = document.getElementById("hours");

const calcBtn = document.getElementById("calcBtn");

const hourly = document.getElementById("hourly");
const daily = document.getElementById("daily");
const monthly = document.getElementById("monthly");

calcBtn.addEventListener("click", () => {

    let monthlyIncome = Number(income.value);
    let workDays = Number(days.value);
    let workHours = Number(hours.value);

    if (!monthlyIncome || !workDays || !workHours) {
        alert("Please fill all fields");
        return;
    }

    let dailyRate = monthlyIncome / workDays;
    let hourlyRate = dailyRate / workHours;

    hourly.textContent = hourlyRate.toFixed(2);
    daily.textContent = dailyRate.toFixed(2);
    monthly.textContent = monthlyIncome.toFixed(2);
});