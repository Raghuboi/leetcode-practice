function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i: number = 0; i < nums.length; i++) {
    const curr = nums[i];
    const difference: number = target - curr;
    if (map.has(difference)) return [map.get(difference) as number, i];
    map.set(curr, i);
  }
  return [];
}
