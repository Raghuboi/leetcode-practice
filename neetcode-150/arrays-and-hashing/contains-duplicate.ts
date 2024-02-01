function containsDuplicate(nums: number[]): boolean {
  const map = new Map<number, null>();
  for (let i: number = 0; i < nums.length; i++) {
    const curr = nums[i];
    if (map.has(curr)) return true;
    map.set(curr, null);
  }
  return false;
}
