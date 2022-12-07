const reverseLinkedList = (head) => {
	let prev = null

	while (head) {
		let next = head.next
		head.next = prev
		prev = head
		head = next
	}

	return prev
}

let head = {
	value: 100,
	next: {
		value: 200,
		next: {
			value: 300,
			next: null,
		},
	},
}
console.log(head)

head = reverseLinkedList(head)
// reverse should now be { value: 300, next: { value: 200, next: { value: 100, next: null } } }
console.log(head)
