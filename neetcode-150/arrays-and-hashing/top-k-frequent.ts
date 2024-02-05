function topKFrequent(nums: number[], k: number): number[] {
  const frequency: number[][] = [];
  const map: Map<number, number> = new Map();

  for (let i: number = 0; i < nums.length; i++) {
    const curr = nums[i];
    const occurances: number = map.get(curr) ?? 0;
    map.set(curr, occurances + 1);
  }

  map.forEach((occurances, elem) => {
    const arr: number[] = frequency[occurances - 1] ?? [];
    arr.push(elem);
    frequency[occurances - 1] = arr;
  });

  const output: number[] = [];
  for (let i: number = frequency.length - 1; i >= 0; i--) {
    frequency[i]?.forEach((v) => {
      output.push(v);
      if (output.length === k) return;
    });
    if (output.length === k) break;
  }
  return output;
}

console.log(topKFrequent([-1, -1], 1));
