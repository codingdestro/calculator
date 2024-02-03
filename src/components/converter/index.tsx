import "../../styles/select.scss";
import "../../styles/converter.scss";
import SelectBox from "./SelectBox";
import { Options } from "../../service/data";
import { useState } from "react";
const index = () => {
  const [key, setKey] = useState(0);

  return (
    <div className="converter">
      <h3>Unit Converter</h3>
      <div className="unit-box">
        {Options.map((value, idx: number) => {
          return (
            <div
              className={`unit ${idx === key ? "show" : "hide"}`}
              key={idx}
              onClick={() => setKey(idx)}
            >
              {value.name}
            </div>
          );
        })}
      </div>
      <SelectBox options={Options[key].node} />
    </div>
  );
};

export default index;
