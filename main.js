import dataJson from "./data.js";
const reportTitles = document.querySelectorAll(".report-title");
const reportCurrentHours = document.querySelectorAll(".current-hour");
const lastTimehours = document.querySelectorAll(".last-time-hour");
const dailyButton = document.querySelector("#daily-button");
const weeklyButton = document.querySelector("#weekly-button");
const monthlyButton = document.querySelector("#monthly-button");

document.addEventListener("DOMContentLoaded", () => {
  setUpWeekly();
});

dailyButton.addEventListener("click", () => {
  let index = 0;
  for (const report of dataJson) {
    reportTitles[index].textContent = report.title;
    reportCurrentHours[index].textContent =
      report.timeframes.daily.current + "hrs";
    lastTimehours[index].textContent =
      `yesterday -` + report.timeframes.daily.previous + `hrs`;
    index++;
  }
  dailyButton.classList.add("selected-date");
  monthlyButton.classList.remove("selected-date");
  weeklyButton.classList.remove("selected-date");
  applyTransitionsToReportCurrentHours();
});
weeklyButton.addEventListener("click", setUpWeekly);
monthlyButton.addEventListener("click", () => {
  let index = 0;
  for (const report of dataJson) {
    reportTitles[index].textContent = report.title;
    reportCurrentHours[index].textContent =
      report.timeframes.monthly.current + "hrs";
    lastTimehours[index].textContent =
      `last month -` + report.timeframes.monthly.previous + `hrs`;
    index++;
  }
  monthlyButton.classList.add("selected-date");
  dailyButton.classList.remove("selected-date");
  weeklyButton.classList.remove("selected-date");
});
function setUpWeekly() {
  let index = 0;
  for (const report of dataJson) {
    reportTitles[index].textContent = report.title;
    reportCurrentHours[index].textContent =
      report.timeframes.weekly.current + "hrs";
    lastTimehours[index].textContent =
      `last week -` + report.timeframes.weekly.previous + `hrs`;
    index++;
  }
  dailyButton.classList.remove("selected-date");
  monthlyButton.classList.remove("selected-date");
  weeklyButton.classList.add("selected-date");
}
