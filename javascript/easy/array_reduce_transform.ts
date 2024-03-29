// Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.
// A reduced array is created by applying the following operation:-
//     val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed.
// The final value of val is returned.
// If the length of the array is 0, it should return init.
// Please solve it without using the built-in Array.reduce method.

type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
	if (nums.length === 0) return init
	let accum: number = init
	for (let i: number = 0; i < nums.length; i++) accum = fn(accum, nums[i])
	return accum
}
