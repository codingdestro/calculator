import Display from "./Display";
import KeyBox from "./KeyBox";
import useGetInput from "../../hooks/useGetInput";

const keys = [
  "C",
  "←",
  "00",
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
    <div className="w-full max-w-xs sm:max-w-sm mx-auto">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl p-4 sm:p-6 border border-gray-700">
        <div className="mb-4 sm:mb-6">
          <Display text={input} />
        </div>
        <KeyBox keys={keys} onPressHandler={(key: string) => getInput(key)} />
      </div>
    </div>
  );
}

export default Calculator;
