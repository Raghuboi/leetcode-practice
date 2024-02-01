function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const sMap = new Map<string, number>();
  const tMap = new Map<string, number>();

  for (let i: number = 0; i < s.length; i++) {
    const sCount: number = sMap.get(s[i]) ?? 0;
    const tCount: number = tMap.get(t[i]) ?? 0;
    sMap.set(s[i], sCount + 1);
    tMap.set(t[i], tCount + 1);
  }

  if (sMap.size !== tMap.size) return false;

  for (let i: number = 0; i < s.length; i++)
    if (sMap.get(s[i]) !== tMap.get(s[i])) return false;

  return true;
}
