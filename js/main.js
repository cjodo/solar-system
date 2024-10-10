const r = document.querySelector(':root');
const body = document.querySelector('body');

window.addEventListener('keydown', (e) => {
	e.preventDefault()
	let key = e.key
	let rs = getComputedStyle(r)

	let perspective = parseFloat(rs.getPropertyValue('--p'))
	let perspectiveLimiter = 6; // TODO re-calculate diameters for larger screens

	if(key == 'ArrowRight' && perspective + 1 <= perspectiveLimiter) {
		r.style.setProperty('--p', `${perspective + 0.1}`)
	}  else if(key == 'ArrowLeft' && perspective > 0) {
		r.style.setProperty('--p', `${perspective - 0.1}`)
	}
})

const rightBox = document.querySelector('.right')
const leftBox = document.querySelector('.left')

window.addEventListener('keydown', (e) => {
	e.preventDefault()
	if(e.key == "ArrowRight") {
		rightBox.classList.add('keydown')
		rightBox.classList.add('keydown')
	}
	if(e.key == "ArrowLeft") {
		leftBox.classList.add('keydown')
		leftBox.classList.add('keydown')
	}
})

window.addEventListener('keyup', (e) => {
	e.preventDefault()
	if(e.key == "ArrowRight") {
		rightBox.classList.remove('keydown')
		rightBox.classList.remove('keydown')
	}
	if(e.key == "ArrowLeft") {
		leftBox.classList.remove('keydown')
		leftBox.classList.remove('keydown')
	}
})



const planets = document.querySelectorAll('.solar-system > div > div');

planets.forEach((planet, i) => {
	const planetStyles = window.getComputedStyle(planet)
	const animationTime = planetStyles.getPropertyValue('--t');

	const animationSeconds = parseFloat(animationTime)

	if(!animationSeconds) return // sun returns NAN
	//set the interval to change the z index every <animationTime / 2> to acurrately position the planet
	//Mercury will always be the closest or the furthest from the sun so we can set the 
	//z-index to position from the sun * -1 for simplicity. -1, 1, then venus will be -2, 2, etc...
	let position = i

	setInterval(() => {
		position = position * -1
		console.log(`Swap ${planet.classList[0]} `, {position})
		planet.style.setProperty('--z', `${position}`)

	}, (animationSeconds * 1000) / 2)
})

const random = (min, max) => {
	return min + Math.random() * (max + 1 - min);
}

const addStars = (amount) => {
	const starsContainer = document.querySelector('.stars')
	for (let i = 0; i < amount; i++) {
		// Set up random elements
		let xPos = random(0, 100);
		let yPos = random(0, 100);
		let alpha = random(0.5, 1);
		let size = random(1, 2);
		let colour = '#ffffffaa';
		const star = document.createElement('div');
		star.style.position = 'relative';
		star.style.left = xPos + '%';
		star.style.top = yPos + '%';
		star.style.opacity = alpha;
		star.style.width = size + 'px';
		star.style.height = size + 'px';
		star.style.backgroundColor = colour;
		starsContainer.appendChild(star);
	}
}

addStars(100)




