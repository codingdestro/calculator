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
    <div className="space-y-6">
      {/* From Section */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          From
        </label>
        <Select
          options={options}
          node={node1}
          setNode={setNode1}
          setNode2={setNode2}
        />
      </div>

      {/* Swap Button */}
      <div className="flex justify-center">
        <button
          onClick={() => {
            const temp = { ...node1 };
            setNode1(node2);
            setNode2(temp);
          }}
          className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
            />
          </svg>
        </button>
      </div>

      {/* To Section */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          To
        </label>
        <Select
          options={options}
          node={node2}
          setNode={setNode2}
          setNode2={setNode1}
        />
      </div>
    </div>
  );
};

export default SelectBox;
