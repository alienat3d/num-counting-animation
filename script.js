'use strict';

const counters = document.querySelectorAll('.value');
const speed = 200;

counters.forEach(counter => {
	const animate = () => {
		const value = +counter.dataset.num;
		const data = +counter.innerText;

		const countUp = value / speed;
		const countDown = data / speed;

		if (data < value) {
			counter.innerText = Math.ceil(data + countUp);
			setTimeout(animate, 1);
		} else if (data > value) {
			counter.innerText = Math.floor(data - countDown);
			setTimeout(animate, 1);
		}
	}

	animate();
});