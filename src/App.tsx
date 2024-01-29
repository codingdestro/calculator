import React, { useEffect, useRef, useState } from "react";
import Display from "./components/Display";
import KeyBox from "./components/KeyBox";
import Calc from ".";

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
const calc = new Calc();

function App() {
  const [input, setInput] = useState<string>("");
  const [data, setData] = useState<string[]>([""]);
  const [left, setLeft] = useState("");
  const [right, setRight] = useState("");
  const bodyRef = useRef<HTMLDivElement>(null);

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
      setData([""]);
    } else if (key === "=" || key === "Enter") {
      if (right && left && !isOperator(input[input.length - 1])) {
        console.log(input);
        calc.do(input).then((val: string) => {
          setLeft("");
          setRight(val);
          setData([""]);
          setInput(val);
        });
      }
    } else if (key === ".") {
      if (right) {
        setRight((prevState) =>
          prevState.includes(".") ? prevState : prevState + key
        );
      } else {
        setRight((prevState) => prevState + key);
      }
    } else if (isOperator(key)) {
      if (right) {
        addSegment(right);
        addSegment(key);
      }
    } else if (key === "←" || key === "Backspace") {
      if (right) {
        setRight((prevState) => prevState.slice(0, -1));
      } else {
        popSegment();
      }
    } else {
      setRight((prevState) => prevState + key);
    }
  };

  const keyPressHandler = (key: string) => {
    if (!key) return;
    console.log(key);
    if (isOperator(key)) {
      key = key === "*" ? "x" : key;
    } else if (!parseFloat(key)) {
      if (key !== "Backspace" && key !== "Enter" && key !== "0") return;
    }
    getInput(key);
  };

  useEffect(() => {
    setInput(left + right);
  }, [right, left]);

  return (
    <div
      className="body"
      ref={bodyRef}
      onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) =>
        keyPressHandler(e.key)
      }
    >
      <Display text={input} />
      <KeyBox keys={keys} onPressHandler={(key: string) => getInput(key)} />
    </div>
  );
}

export default App;
