import SelectBox from "./SelectBox";
import { Options } from "../../service/data";
import { useState } from "react";
const Home = () => {
  const [key, setKey] = useState(0);

  return (
    <div className="border rounded-md shadow-md p-5 w-[300px]">
      <h1 className="text-xl border-b mb-2  font-bold capitalize text-center">
        Unit Converter
      </h1>
      <div className="border-b flex gap-5 justify-between items-center px-2 pb-2 mb-5 rounded-lg ">
        {Options.map((value, idx: number) => {
          return (
            <button
              className={`px-1 rounded-md transition-all ${idx === key && "bg-violet-100"}`}
              key={idx}
              onClick={() => setKey(idx)}
            >
              {value.name}
            </button>
          );
        })}
      </div>
      <SelectBox options={Options[key].node} />
    </div>
  );
};

export default Home;
