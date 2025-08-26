import SelectBox from "./SelectBox";
import { Options } from "../../service/data";
import { useState } from "react";

const UnitConverter = () => {
  const [key, setKey] = useState(0);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-fadeIn">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6">
          <h1 className="text-xl sm:text-2xl font-bold text-center">
            Unit Converter
          </h1>
        </div>

        {/* Category Selection */}
        <div className="p-4 sm:p-6 border-b border-gray-100">
          <div className="grid grid-cols-3 gap-2 bg-gray-50 p-2 rounded-xl">
            {Options.map((value, idx: number) => (
              <button
                className={`px-3 py-2 sm:px-4 sm:py-3 rounded-lg font-medium text-sm sm:text-base capitalize transition-all duration-200 ${
                  idx === key
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-800 hover:bg-white"
                }`}
                key={idx}
                onClick={() => setKey(idx)}
              >
                {value.name}
              </button>
            ))}
          </div>
        </div>

        {/* Conversion Section */}
        <div className="p-4 sm:p-6">
          <SelectBox options={Options[key].node} />
        </div>
      </div>
    </div>
  );
};

export default UnitConverter;
