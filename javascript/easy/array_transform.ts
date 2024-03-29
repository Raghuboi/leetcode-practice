// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
// The returned array should be created such that returnedArray[i] = fn(arr[i], i).
// Please solve it without the built-in Array.map method.
// https://leetcode.com/problems/apply-transform-over-each-element-in-array/

function map(arr: number[], fn: (n: number, i: number) => number): number[] {
	let outputArr: number[] = []
	for (let i: number = 0; i < arr.length; i++) {
		const current: number = arr[i]
		outputArr.push(fn(current, i))
	}
	return outputArr
}
