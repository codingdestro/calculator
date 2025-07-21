import { node } from "./convert";

export type OptionsType = { name: string; node: node[] };

// Length conversions (base unit: mm)
const LENGTH: node[] = [
  { key: "mm", constant: 1 },
  { key: "cm", constant: 10 },
  { key: "m", constant: 1000 },
  { key: "km", constant: 1000000 },
  { key: "inch", constant: 25.4 },
  { key: "ft", constant: 304.8 },
  { key: "yard", constant: 914.4 },
  { key: "mile", constant: 1609344 },
];

// Data/Digital Storage (base unit: bit)
const DATA: node[] = [
  { key: "bit", constant: 1 },
  { key: "byte", constant: 8 },
  { key: "kb", constant: 8192 },
  { key: "mb", constant: 8388608 },
  { key: "gb", constant: 8589934592 },
  { key: "tb", constant: 8796093022208 },
];

// Mass/Weight (base unit: mg)
const MASS: node[] = [
  { key: "mg", constant: 1 },
  { key: "g", constant: 1000 },
  { key: "kg", constant: 1000000 },
  { key: "ton", constant: 1000000000 },
  { key: "oz", constant: 28349.5 },
  { key: "lb", constant: 453592 },
];

export const Options: OptionsType[] = [
  {
    name: "length",
    node: LENGTH,
  },
  {
    name: "data",
    node: DATA,
  },
  {
    name: "mass",
    node: MASS,
  }
];

export const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
