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

export function loadPracticingRadicalTypeFromStorage(): RadicalType {
  const practicingRadicalType = localStorage.getItem(`practicing-radical-type`);
  if (practicingRadicalType) {
    return practicingRadicalType as RadicalType;
  }
  return "simplified";
}

export function savePracticingRadicalTypeToStorage(
  practicingRadicalType: RadicalType,
) {
  localStorage.setItem(`practicing-radical-type`, practicingRadicalType);
}

export function getCommonRadicals(): {
  text: string;
  code: string;
  type: RadicalType;
}[] {
  return [
    {
      text: "一",
      code: "Fi",
      type: "both",
    },
    {
      text: "丨",
      code: "Ff",
      type: "both",
    },
    {
      text: "丶",
      code: "Ft",
      type: "both",
    },
    {
      text: "丿",
      code: "Fp",
      type: "both",
    },
    {
      text: "乙",
      code: "Fs",
      type: "both",
    },
    {
      text: "亅",
      code: "Fj",
      type: "both",
    },
    {
      text: "二",
      code: "Fo",
      type: "both",
    },
    {
      text: "亠",
      code: "Fk",
      type: "both",
    },
    {
      text: "人",
      code: "Fg",
      type: "both",
    },
    {
      text: "儿",
      code: "Fv",
      type: "both",
    },
    {
      text: "入",
      code: "Fe",
      type: "both",
    },
    {
      text: "八",
      code: "Fb",
      type: "both",
    },
    {
      text: "冂",
      code: "Fh",
      type: "both",
    },
    {
      text: "冖",
      code: "Fm",
      type: "both",
    },
    {
      text: "冫",
      code: "Fz",
      type: "both",
    },
    {
      text: "几",
      code: "Fq",
      type: "both",
    },
    {
      text: "凵",
      code: "Fx",
      type: "both",
    },
    {
      text: "刀",
      code: "Fa",
      type: "both",
    },
    {
      text: "力",
      code: "Fd",
      type: "both",
    },
    {
      text: "勹",
      code: "Fw",
      type: "both",
    },
    {
      text: "匕",
      code: "Fn",
      type: "both",
    },
  ];
}
