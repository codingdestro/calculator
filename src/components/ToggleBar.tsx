import { useState } from "react";

type Props = {
  children: JSX.Element[];
  elements: string[];
};

const ToggleBar = ({ children, elements }: Props) => {
  const [currentChild, setCurrentChild] = useState(0);

  const onChangeElement = (idx: number) => {
    if (idx < children.length) setCurrentChild(idx);
  };

  return (
    <div className="flex flex-col items-center gap-8 p-4 sm:p-6 min-h-screen">
      <div className="flex items-center justify-center gap-1 bg-white rounded-xl p-2 shadow-lg border border-gray-200 overflow-x-auto scrollbar-hide w-full max-w-screen-2xl">
        {elements.map((ele: string, idx: number) => (
          <button
            key={idx}
            className={`px-4 sm:px-6 py-3 whitespace-nowrap rounded-lg font-medium text-sm sm:text-base transition-all duration-200 capitalize
              ${
                currentChild === idx
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
              }`}
            onClick={() => onChangeElement(idx)}
          >
            {ele}
          </button>
        ))}
      </div>

      <div className="w-full flex justify-center">{children[currentChild]}</div>
    </div>
  );
};

export default ToggleBar;
