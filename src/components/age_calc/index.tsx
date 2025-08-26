import { useState } from "react";
import { MONTHS } from "../../service/data";
import InputDateBox from "./InputDateBox";
import { calculateAge as calc } from "../../service/age-calc";
import DisplayBox from "./DispalyBox";

type ageType = [string, string, string];

const AgeCalc = () => {
  const [date, setDate] = useState({
    day: 1,
    month: 1,
    year: 2000,
  });

  const [age, setAge] = useState<ageType>(["0", "0", "0"]);
  const [showAge, setShowAge] = useState(false);
  const [error, setError] = useState("");

  const getInput = (key: "day" | "year" | "month", value: string) => {
    setError(""); // Clear any previous errors
    
    const numValue = parseInt(value);
    
    if (key === "day") {
      const daysInMonth = new Date(date.year, date.month, 0).getDate();
      if (numValue > daysInMonth || numValue < 1) {
        setError(`Day must be between 1 and ${daysInMonth} for the selected month`);
        return;
      }
    } else if (key === "year") {
      const currentYear = new Date().getFullYear();
      if (numValue <= 0 || numValue > currentYear) {
        setError(`Year must be between 1 and ${currentYear}`);
        return;
      }
    } else if (key === "month") {
      if (numValue < 1 || numValue > 12) {
        setError("Month must be between 1 and 12");
        return;
      }
    }

    setDate((prev) => ({ ...prev, [key]: numValue }));
  };

  const calculateAge = () => {
    const { day, month, year } = date;
    const currentDate = new Date();
    const birthDate = new Date(year, month - 1, day);
    
    if (birthDate > currentDate) {
      setError("Birth date cannot be in the future!");
      return;
    }

    if (day && month && year) {
      const ag = calc(day, month, year).map((ele: number) => ele.toString());
      setAge([ag[0], ag[1], ag[2]]);
      setShowAge(true);
      setError("");
    } else {
      setError("Please enter a valid date!");
    }
  };

  const getCurrentAge = () => {
    const today = new Date();
    setDate({
      day: today.getDate(),
      month: today.getMonth() + 1,
      year: today.getFullYear(),
    });
    setShowAge(false);
    setError("");
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-fadeIn">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-6">
          <h1 className="text-xl sm:text-2xl font-bold text-center flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Age Calculator
          </h1>
        </div>

        {/* Input Section */}
        <div className="p-4 sm:p-6 space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Enter Your Birth Date</h3>
            
            {/* Date Input Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Month Selector */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Month</label>
                <select
                  value={date.month}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none cursor-pointer text-gray-700 font-medium"
                  onChange={(e) => getInput("month", e.target.value)}
                >
                  {MONTHS.map((month: string, idx: number) => (
                    <option key={idx} value={idx + 1}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>

              {/* Day Input */}
              <InputDateBox
                label="Day"
                onChangeHandler={(value: string) => getInput("day", value)}
                value={date.day.toString()}
                min={1}
                max={31}
              />

              {/* Year Input */}
              <InputDateBox
                label="Year"
                onChangeHandler={(value: string) => getInput("year", value)}
                value={date.year.toString()}
                min={1900}
                max={new Date().getFullYear()}
              />
            </div>

            {/* Error Display */}
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl">
                <p className="text-red-600 text-sm flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {error}
                </p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              className="flex-1 bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 active:scale-95 shadow-lg hover:shadow-xl"
              onClick={calculateAge}
            >
              Calculate Age
            </button>
            <button
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold transition-all duration-200 active:scale-95"
              onClick={getCurrentAge}
            >
              Use Today
            </button>
          </div>

          {/* Results Display */}
          {showAge && (
            <div className="mt-6 animate-fadeIn">
              <DisplayBox age={age} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AgeCalc;
