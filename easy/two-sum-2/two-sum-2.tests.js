const twoSum = require('./two-sum-2.js')

const testCases = [
	// Test 1: Expected result: [1, 2]
	{
		arr: [2, 7, 11, 15],
		target: 9,
		expected: [1, 2],
	},

	// Test 2: Expected result: [1, 3]
	{
		arr: [2, 3, 4],
		target: 6,
		expected: [1, 3],
	},

	// Test 3: Expected result: [1, 2]
	{
		arr: [-1, 0],
		target: -1,
		expected: [1, 2],
	},
]

for (const { arr, target, expected } of testCases) {
	const result = twoSum(arr, target)
	if (JSON.stringify(result) === JSON.stringify(expected)) {
		console.log('Test passed')
	} else {
		console.log('Test failed: expected', expected, 'but got', result)
	}
}
