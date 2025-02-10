$(document).ready(function () {
	let hh = 0;
	let mm = 0;
	let ss = 0;

	$('.content__timer').html(hh + ':' + mm + ':' + ss);

	let isPaused = false;

	function playTimer() {
		mm < 10 ? (mm = '0' + Number(mm)) : mm;
		hh < 10 ? (hh = '0' + Number(hh)) : hh;
		ss < 10 ? (ss = '0' + Number(ss)) : ss;

		if (isPaused) {
			ss++;
		}
		$('.content__timer').html(hh + ':' + mm + ':' + ss);

		if (ss == 100) {
			ss = 0;
			mm++;
		}
		if (mm == 60) {
			mm = 0;
			hh++;
		}
	}

	let start = $('.s');
	start.click(function (e) {
		e.preventDefault();
		isPaused = true;
	});

	$('.p').click(function (e) {
		e.preventDefault();

		isPaused = false;
	});

	$('.r').click((e) => {
		e.preventDefault();
		hh = ss = mm = 0;
		isPaused = false;
	});

	setInterval(playTimer, 10);
});
