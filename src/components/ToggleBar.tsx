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
    <div className="flex flex-col items-center justify-center  gap-5 p-5 min-h-screen">
      <div className="flex items-center gap-5 border  w-[280px] p-1 overflow-auto  rounded-md">
        {elements.map((ele: string, idx: number) => (
          <button
            className={`border px-2 whitespace-nowrap rounded-md
              shadow-sm ${currentChild == idx && "bg-violet-100"}`}
            onClick={() => onChangeElement(idx)}
          >
            {ele}
          </button>
        ))}
      </div>

      <div className="">{children[currentChild]}</div>
    </div>
  );
};

export default ToggleBar;
