function rollCube(die) {
	// need to implement...
}

function getRandom(max, min) {
	// need to implement...
}

function posMod(n, m) {
	// need to implement...
}

function getResult(rotX, rotY) {
	let countX = posMod(rotX / 90, 4);
	if (countX === 1) return 6; // bottom
	if (countX === 3) return 5; // top

	let countY = mod(rotY / 90 + countX, 4);
	
	return [1, 4, 2, 3][countY];
}
