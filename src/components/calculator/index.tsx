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
      <div className="max-w-[300px] border rounded-lg shadow-md p-5 flex flex-col gap-5">
        <Display text={input} />
        <KeyBox keys={keys} onPressHandler={(key: string) => getInput(key)} />
      </div>
    </>
  );
}

export default Calculator;
