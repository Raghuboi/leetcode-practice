const isPalindrome = (head) => {
	let fast = head
	let slow = head

	while (fast != null && fast.next != null) {
		fast = fast.next.next
		slow = slow.next
	}

	slow = reverse(slow) // slow has reached halfway point
	fast = head // fast goes back to head

	while (fast.next != null) {
		if (fast.val != slow.val) {
			return false
		}
		fast = fast.next
		slow = slow.next
	}
	return true
}

const reverse = (head) => {
	let prev = null

	while (head != null) {
		const next = head.next
		head.next = prev
		prev = head
		head = next
	}

	return prev
}

module.exports = isPalindrome
