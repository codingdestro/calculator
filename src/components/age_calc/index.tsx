import { useState } from "react";
import { MONTHS } from "../../service/data";
import InputDateBox from "./InputDateBox";
import { calculateAge as calc } from "../../service/age-calc";
import DisplayBox from "./DispalyBox";

type ageType = [string, string, string];

const Home = () => {
  const [date, setDate] = useState({
    day: 1,
    month: 1,
    year: 2000,
  });

  const [age, setAge] = useState<ageType>(["0", "0", "0"]);

  const [showAge, setShowAge] = useState(false);

  const getInput = (key: "day" | "year" | "month", value: string) => {
    if (
      key == "day" &&
      new Date(date.year, date.month, 0).getDate() < parseInt(value)
    )
      return;
    else if (
      (key == "year" && 0 == parseInt(value)) ||
      parseInt(value) > new Date().getFullYear()
    )
      return;
    setDate((prev) => {
      return { ...prev, [key]: parseInt(value) };
    });
  };

  const calculateAge = () => {
    const { day, month, year } = date;
    if (day && month && year) {
      const ag = calc(day, month, year).map((ele: number) => ele.toString());
      setAge(ag);
      !showAge && setShowAge(true);
    } else {
      alert("please select right date!");
    }
  };

  return (
    <div className="border rounded-md px-3 py-1 gap-2 items-center shadow-md w-[380px] flex flex-col">
      <div>
        <h1>Age Calculator</h1>
      </div>
      <div className="flex gap-1 items-center">
        <label>Month</label>
        <select
          className="px-2 py-1 rounded-md"
          onChange={(e) => getInput("month", e.target.value)}
        >
          {MONTHS.map((month: string, idx: number) => (
            <option key={idx} value={idx + 1}>
              {month}
            </option>
          ))}
        </select>
        <InputDateBox
          label="Day"
          onChangeHandler={(value: string) => getInput("day", value)}
          value={date.day.toString()}
        />
        <InputDateBox
          label="Year"
          onChangeHandler={(value: string) => getInput("year", value)}
          value={date.year.toString()}
        />
      </div>
      <div>
        <button
          className="border rounded-md px-3 py-1 hover:bg-zinc-200 active:bg-white"
          onClick={() => calculateAge()}
        >
          calc
        </button>
      </div>
      <div>{showAge && <DisplayBox age={age} />}</div>
    </div>
  );
};

export default Home;
