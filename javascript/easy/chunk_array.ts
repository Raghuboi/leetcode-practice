// https://leetcode.com/problems/chunk-array/
type JSONVal =
	| null
	| boolean
	| number
	| string
	| JSONVal[]
	| { [key: string]: JSONVal }
type Obj = Record<string, JSONVal> | Array<JSONVal>

// O(n)
function chunk(arr: Obj[], size: number): Obj[][] {
	let parent: Obj[][] = []
	for (let i = 0; i < arr.length; i += size) parent.push(arr.slice(i, i + size))
	return parent
}

console.log(chunk(JSON.parse(JSON.stringify([1, 2, 3, 4, 5])), 2))
