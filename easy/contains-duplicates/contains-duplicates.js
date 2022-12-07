/*
const containsDuplicates = (arr) => {
	if (new Set(arr).size !== arr.length) return true
	return false
}
*/

const containsDuplicates = (arr) => {
	if (!arr || arr.length === 0) return false

	const hash = {}

	for (let i = 0; i < arr.length; i++) {
		if (hash[arr[i]]) return true
		hash[arr[i]] = true
	}
	return false
}

console.log(containsDuplicates([1, 2, 3, 4, 1])) // true
console.log(containsDuplicates([1, 2, 3, 4])) // false
console.log(containsDuplicates([])) // false
