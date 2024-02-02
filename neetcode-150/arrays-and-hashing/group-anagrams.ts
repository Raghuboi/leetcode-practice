function groupAnagrams(strs: string[]): string[][] {
  const output: string[][] = [];
  const map: Map<string, string[]> = new Map();

  for (let i: number = 0; i < strs.length; i++) {
    const curr = strs[i];
    const count = Array(26).fill(0);
    for (let j: number = 0; j < curr.length; j++) {
      count[curr.charCodeAt(j) - "a".charCodeAt(0)] += 1;
    }

    const group: string[] = map.get(count.toString()) ?? [];
    group.push(curr);
    map.set(count.toString(), group);
  }

  map.forEach((e: string[]) => output.push(e));

  return output;
}

const input: string[] = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(input));
// Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]];
