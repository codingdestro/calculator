import { useEffect, useState } from "react";
import { isOperator } from "../service/utils";
import Calc from "../service";

type HookState = {
  input: string;
  getInput: (key: string) => void;
};

const useGetInput = (): HookState => {
  const calc = new Calc();

  const [input, setInput] = useState<string>("");
  const [data, setData] = useState<string[]>([""]);
  const [left, setLeft] = useState("");
  const [right, setRight] = useState("0");

  const addSegment = (segment: string) => {
    setRight("");
    setLeft((prevState) => prevState + segment);
    setData((prevState) =>
      prevState[0] ? [...prevState, segment] : [segment],
    );
  };

  const popSegment = () => {
    if (data) {
      let lastItem = data.pop() || "0";
      if (isOperator(lastItem)) {
        lastItem = data.pop() || "0";
      }
      setRight(lastItem);
      setLeft(() =>
        data.reduce(
          (previousValue: string, currentValue: string) =>
            previousValue + currentValue,
          "",
        ),
      );
    } else setRight("0");
  };

  const getInput = (key: string) => {
    if (key === "C") {
      setRight("0");
      setLeft("");
      setData([""]);
    } else if (key === "=" || key === "Enter") {
      if (right && left && !isOperator(input[input.length - 1]))
        calc.do(input).then((val: string) => {
          setLeft("");
          setRight(val);
          setData([""]);
          setInput(val);
        });
    } else if (key === ".") {
      if (right)
        setRight((prevState) =>
          prevState.includes(".") ? prevState : prevState + key,
        );
      else setRight((prevState) => prevState + key);
    } else if (isOperator(key)) {
      if (right) {
        addSegment(right);
        addSegment(key);
      }
    } else if (key === "←" || key === "Backspace") {
      if (right && right !== "0")
        setRight((prevState) => prevState.slice(0, -1));
      else popSegment();
    } else setRight((prevState) => (prevState === "0" ? key : prevState + key));
  };

  useEffect(() => {
    setInput(left + right);
  }, [right, left]);
  return { input, getInput };
};

export default useGetInput;
