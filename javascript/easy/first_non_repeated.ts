function firstNonRepeated(s: string): string {
	const charFrequencyMap: Map<string, number> = new Map()

	for (const char of s) {
		charFrequencyMap.set(char, (charFrequencyMap.get(char) || 0) + 1)
	}

	for (const char of s) {
		if (charFrequencyMap.get(char) === 1) {
			return char
		}
	}

	return ''
}

// console.log(firstNonRepeated('hello, hi'))
// console.log(firstNonRepeated('aabcc'))
// console.log(firstNonRepeated('aabbcc'))
