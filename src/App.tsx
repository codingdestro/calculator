import { useEffect, useState } from "react";
import Display from "./components/Display";
import KeyBox from "./components/KeyBox";

const keys = [
  "C",
  "D",
  "%",
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

function App() {
  const [input, setInput] = useState<string>("");

  const getInput = (key: string) => {
    setInput((prevState) => prevState + key);
  };

  useEffect(() => {
    console.log(input);
  }, [input]);

  return (
    <div className="body">
      <Display text={input} />
      <KeyBox keys={keys} onPressHandler={(key: string) => getInput(key)} />
    </div>
  );
}

export default App;
