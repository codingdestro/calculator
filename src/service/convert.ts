export type node = {
  constant: number;
  key: string;
};

export const convert = (
  fromIndex: number,
  toIndex: number,
  val: number,
  nodes: node[],
): number => {
  // Return same value if converting to same unit
  if (fromIndex === toIndex) return val;
  
  // Validate inputs
  if (!nodes[fromIndex] || !nodes[toIndex] || isNaN(val)) return 0;
  
  // Convert to base unit first (multiply by constant)
  const baseValue = val * nodes[fromIndex].constant;
  
  // Convert from base unit to target unit (divide by constant)
  const result = baseValue / nodes[toIndex].constant;
  
  return result;
};
