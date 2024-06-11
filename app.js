while (true) {
	// set the current date
	var now = new Date();

	// set the target date (next year's eve)
	var target_year = 2024//now.getFullYear() + 1;
	var target_month = 8//0; // Januar
	var target_day = 1//1;
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

	// console.log(`${left_days} days left `);
	// console.log(`${left_hours} hours left`);
	// console.log(`${left_minutes} minutes left`);
	// console.log(`${left_seconds} seconds left`);

	document.getElementById("day").innerHTML = left_days + "d";
	document.getElementById("hour").innerHTML = left_hours + "h";
	document.getElementById("minute").innerHTML = left_minutes + "m";
	document.getElementById("second").innerHTML = left_seconds + "s";

	// reload timeout
	await new Promise((r) => setTimeout(r, 1000));
}
