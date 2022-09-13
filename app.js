// set the current date
var now = new Date();

// set the target date (next year's eve)
var target_year = now.getFullYear() + 1;
var target_month = 0; // Januar
var target_day = 1;
var target = new Date(target_year, target_month, target_day);

var diffrence = Math.floor((target - now) / 1000);
// console.log(diffrence);

var p = 24 * 60 * 60;
var left_days = Math.floor(diffrence / p);
var left_hours = Math.floor((diffrence % p) / (60 * 60));
p /= 24;
var left_minutes = Math.floor((diffrence % p) / 60);
p /= 60;
var left_seconds = Math.floor(diffrence % p);

console.log(`${left_days} days left `);
console.log(`${left_hours} hours left`);
console.log(`${left_minutes} minutes left`);
console.log(`${left_seconds} seconds left`);

export { left_days, left_hours, left_minutes, left_seconds };
