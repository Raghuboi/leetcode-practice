/**
 * Given an integer n, return a counter function.
 * This counter function initially returns n
 * and then returns 1 more than the previous value
 * every subsequent time it is called (n, n + 1, n + 2, etc).
 */

function createCounter(n: number): () => number {
	let count = n

	return function currentCount() {
		const currentCount = count
		count++
		return currentCount
	}
}

/**
 * alternatively,
 * const createCounter = function(n) {
    return ()=> n++
};
 */

// time and space complexity = O(1), the concept used here is closures

const counter = createCounter(10)
console.log(counter()) // 10
console.log(counter()) // 11
console.log(counter()) // 12
