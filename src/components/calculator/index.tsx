import Display from "./Display";
import KeyBox from "./KeyBox";
import useGetInput from "../../hooks/useGetInput";

const keys = [
  "C",
  "00",
  "←",
  "/",
  "7",
  "8",
  "9",
  "x",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
];

function Calculator() {
  const { input, getInput } = useGetInput();
  return (
    <>
      <Display text={input} />
      <KeyBox keys={keys} onPressHandler={(key: string) => getInput(key)} />
    </>
  );
}

export default Calculator;
