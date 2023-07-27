function rollAll() {
	let dice = document.getElementsByClassName("die")
	for (let die of dice) (
		die.roll()
	)
}

function rollCube(cube) {
	// y = 0 : 1 6 2 5
	// y = 1 : 4 6 3 5
	// y = 2 : 2 6 1 5
    var xRand = getRandom(-8, 8) 
    var yRand = getRandom(-8, 8) 
	if (yRand === 2) {
		xRand = getRandom(1,0) * 2;
	}

	xRand *=90;
	yRand *=90;

	xRand += getRandom(-2, 2) * 380;
	yRand += getRandom(-2, 2) * 380;

	cube.style.transform = `rotateX(${xRand}deg) rotateY(${yRand}deg)`

	console.log(getResult(xRand, yRand));
}

function getRandom(max, min) {
	let randFloat = Math.random();
	randFloat *= (max - min + 1);
    return Math.floor(randFloat);
}
function posMod(n, m) {
	return ((n % m) + m) % m;
}

function getResult(rotX, rotY) {
	let countX = posMod(rotX / 90, 4);
	if (countX === 1) return 6; // bottom
	if (countX === 3) return 5; // top

	let countY = posMod(rotY / 90 + countX, 4);
	
	return [1, 4, 2, 3][countY];
}
