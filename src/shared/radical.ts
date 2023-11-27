export type RadicalType = "simplified" | "traditional" | "both";
export type MemorizingItem = {
  radical: string;
  code: string;
  status: "memorizing" | "memorized" | "unmemorized";
  frequency: number;
};

export function loadMemorizedRadicalFromStorage(
  schema: string,
): Map<string, MemorizingItem> {
  const memorizedRadical = localStorage.getItem(`${schema}-memorized-radicals`);
  if (memorizedRadical) {
    return new Map(JSON.parse(memorizedRadical));
  }
  return new Map();
}

export function saveMemorizedRadicalToStorage(
  schema: string,
  memorizedRadical: Map<string, MemorizingItem>,
) {
  localStorage.setItem(
    `${schema}-memorized-radicals`,
    JSON.stringify([...memorizedRadical]),
  );
}
