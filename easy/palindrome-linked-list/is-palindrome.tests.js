const isPalindrome = require('./is-palindrome.js')

// Definition for singly-linked list
class ListNode {
	constructor(val, next) {
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
	}
}

const testCases = [
	// Test 1: Expected result: true
	// [1] -> [2] -> [2] -> [1]
	{
		head: new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1)))),
		expected: true,
	},

	// Test 2: Expected result: false
	// [1] -> [2]
	{
		head: new ListNode(1, new ListNode(2)),
		expected: false,
	},

	// Test 3: Expected result: true
	// [1] -> [2] -> [3] -> [2] -> [1]
	{
		head: new ListNode(
			1,
			new ListNode(2, new ListNode(3, new ListNode(2, new ListNode(1))))
		),
		expected: true,
	},

	// Test 4: Expected result: false
	// [1] -> [2] -> [3] -> [4] ->
	{
		head: new ListNode(
			1,
			new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
		),
		expected: false,
	},

	// Test 5: Expected result: true
	// [1]
	{
		head: new ListNode(1),
		expected: true,
	},
]

for (const { head, expected } of testCases) {
	const result = isPalindrome(head)
	if (result === expected) {
		console.log('Test passed')
	} else {
		console.log('Test failed: expected', expected, 'but got', result)
	}
}
