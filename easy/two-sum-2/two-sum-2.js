// note: input array is sorted, each input has exactly 1 solution

const twoSum = (arr, target) => {
	let pointer_A = 0
	let pointer_B = arr.length - 1

	while (pointer_A < pointer_B) {
		const sum = arr[pointer_A] + arr[pointer_B]

		if (sum > target) pointer_B--
		else if (sum < target) pointer_A++
		else return [pointer_A + 1, pointer_B + 1]
		// +1 because we are expected to return array with lengths of variables, not indexes
	}

	// Return default value if the desired sum is not found
	return [-1, -1]
}

module.exports = twoSum
