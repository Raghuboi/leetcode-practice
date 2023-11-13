function* fibGenerator(): Generator<number, any, number> {
	let prev: number = 0
	let curr: number = 1

	while (true) {
		yield prev
		;[prev, curr] = [curr, prev + curr]
	}
}

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
