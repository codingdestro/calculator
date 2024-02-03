import { useState } from "react";
import { node } from "../../service/convert";
import Select from "./Select";

type Props = {
  options: node[];
};

const SelectBox = ({ options }: Props) => {
  const [node1, setNode1] = useState({ key: "0", val: "0" });
  const [node2, setNode2] = useState({ key: "0", val: "0" });
  return (
    <>
      <p className="heading">From</p>
      <Select
        options={options}
        node={node1}
        setNode={setNode1}
        setNode2={setNode2}
      />
      <p className="heading">To</p>
      <Select
        options={options}
        node={node2}
        setNode={setNode2}
        setNode2={setNode1}
      />
    </>
  );
};

export default SelectBox;
