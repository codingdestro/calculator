import { useEffect, useState } from "react";
import Display from "./components/Display";
import KeyBox from "./components/KeyBox";

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

function App() {
  const [input, setInput] = useState<string>("");
  const [data, setData] = useState<string[]>([""]);
  const [left, setLeft] = useState("");
  const [right, setRight] = useState("");

  const isOperator = (key: string): boolean => {
    if (key === "+" || key === "x" || key === "/" || key === "-") return true;
    return false;
  };

  const addSegment = (segment: string) => {
    setRight("");
    setLeft((prevState) => prevState + segment);
    setData((prevState) =>
      prevState[0] ? [...prevState, segment] : [segment]
    );
  };
  const popSegment = () => {
    if (data) {
      let lastItem = data.pop() || "";
      if (isOperator(lastItem)) {
        lastItem = data.pop() || "";
      }
      setRight(lastItem);
      setLeft(() => {
        let x = data.reduce(
          (previousValue: string, currentValue: string) =>
            previousValue + currentValue,
          ""
        );

        return x;
      });
    }
  };

  const getInput = (key: string) => {
    if (key === "C") {
      setRight("");
      setLeft("");
    } else if (key === "=") {
      if (right && !isOperator(input[input.length - 1])) {
        console.log("calculate the value", input);
      }
    } else if (key === ".") {
      if (right) {
        setRight((prevState) =>
          prevState.includes(".") ? prevState : prevState + key
        );
      }
    } else if (isOperator(key)) {
      if (right) {
        addSegment(right);
        addSegment(key);
      }
    } else if (key === "←") {
      if (right) {
        setRight((prevState) => prevState.slice(0, -1));
      } else {
        popSegment();
      }
    } else {
      setRight((prevState) => prevState + key);
    }
  };

  useEffect(() => {
    setInput(left + right);
  }, [right, left]);

  return (
    <div className="body">
      <Display text={input} />
      <KeyBox keys={keys} onPressHandler={(key: string) => getInput(key)} />
    </div>
  );
}

export default App;
