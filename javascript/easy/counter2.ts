// https://leetcode.com/problems/counter-ii/

type ReturnObj = {
	increment: () => number
	decrement: () => number
	reset: () => number
}

function createCounter(init: number): ReturnObj {
	let curr = init
	return {
		increment: () => ++curr,
		decrement: () => --curr,
		reset: () => (curr = init),
	}
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
