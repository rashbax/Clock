$(document).ready(function () {
	// Function to display current time
	function currentTime() {
		let data = new Date();
		let hour = data.getHours();
		let min = data.getMinutes();
		let secon = data.getSeconds();

		// Add leading zeros if necessary
		min = min < 10 ? '0' + min : min;
		hour = hour < 10 ? '0' + hour : hour;
		secon = secon < 10 ? '0' + secon : secon;

		// Format the time
		let showTime = hour + ':' + min + ':' + secon;
		$('.time').html(showTime);
	}

	// Call currentTime() initially and then every second
	currentTime();
	setInterval(currentTime, 1000);

	// Function to display current date
	function currentDate() {
		let data = new Date();
		let dd = data.getDate();
		let mm = data.getMonth() + 1; // Months are zero-based
		let yy = data.getFullYear();

		// Add leading zeros if necessary
		dd = dd < 10 ? '0' + dd : dd;
		mm = mm < 10 ? '0' + mm : mm;

		// Format the date
		let showDate = dd + '/' + mm + '/' + yy;
		$('.date').html(showDate);
	}

	// Call currentDate() initially
	currentDate();

	// Function to rotate the clock hand
	function roundClock() {
		let data = new Date();
		let secon = data.getSeconds();
		let audio = new Audio('tic.mp3'); // Ensure 'tic.mp3' exists in the correct directory

		// Rotate the clock hand based on the current second
		$('.strelka').css({ transform: 'rotate(' + secon * 6 + 'deg)' });

		// Play the tick sound (uncomment if you want the sound)
		audio.play();
	}

	// Call roundClock() every second
	setInterval(roundClock, 1000);
});
