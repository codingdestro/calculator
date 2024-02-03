import { node } from "./convert";

export type OptionsType = { name: string; node: node[] };
const LENGHT: node[] = [
  { key: "mm", constant: 1 },
  { key: "cm", constant: 10 },
  { key: "m", constant: 100 },
  { key: "km", constant: 1000 },
  { key: "mile", constant: 1.60934 },
];
const DATA: node[] = [
  { key: "bit", constant: 1 },
  { key: "byte", constant: 8 },
  { key: "kb", constant: 1024 },
  { key: "mb", constant: 1024 },
  { key: "gb", constant: 1024 },
];
const MASS: node[] = [
  { key: "mg", constant: 1 },
  { key: "g", constant: 1000 },
  { key: "kg", constant: 1000 },
  { key: "ton", constant: 1000 },
  { key: "pound", constant: 0.000453592 },
];
export const Options: OptionsType[] = [
  {
    name: "length",
    node: LENGHT,
  },
  {
    name: "data",
    node: DATA,
  },
  {
    name: "mass",
    node: MASS,
  },
];
