
const coding_hours_per_day = 6;          
const workdays_per_week = 5;             
const semester_weeks = 17;                
const avg_work_hours_per_week = 52;       

const total_coding_hours = coding_hours_per_day * workdays_per_week * semester_weeks;

const total_work_hours = avg_work_hours_per_week * semester_weeks;

const coding_percentage = (total_coding_hours / total_work_hours) * 100;

document.getElementById('output').innerHTML = 
  `Total coding hours in the semester: ${total_coding_hours} hours<br>` +
  `Percentage of coding hours: ${coding_percentage.toFixed(2)}% of total work hours`;
