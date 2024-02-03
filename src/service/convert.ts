export type node = {
  constant: number;
  key: string;
};

const goPrev = (val: number, constant: number) => val * constant;
const goNext = (val: number, constant: number) => val / constant;

export const convert = (
  x: number,
  y: number,
  val: number,
  nodes: node[]
): number => {
  if (x === y) return val;
  let i = 0;
  let up = x > y ? false : true;
  let targetKey = nodes[y].key;
  let node = 0;
  let key = "";
  while (i >= 0 && i < nodes.length) {
    node = up ? y + i : x - i;

    val = up
      ? goNext(val, nodes[node].constant)
      : goPrev(val, nodes[node].constant);

    val = parseFloat(val.toFixed(8));

    key = nodes[up ? node : node - 1].key;
    if (targetKey === key) break;
    i++;
  }
  return val;
};
