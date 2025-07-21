import { convert, node } from "../../service/convert";

type nodeType = {
  key: string;
  val: string;
};

type Props = {
  options: node[];
  node: nodeType;
  setNode: React.Dispatch<React.SetStateAction<nodeType>>;
  setNode2: React.Dispatch<React.SetStateAction<nodeType>>;
};

const Select = ({ options, node, setNode, setNode2 }: Props) => {
  const convertOnChange = (from: string, val: string) => {
    if (!val || isNaN(parseFloat(val))) {
      setNode2((prevState) => ({ ...prevState, val: "0" }));
      return;
    }

    setNode2((prevState) => {
      const newValue = convert(
        parseInt(from),
        parseInt(prevState.key),
        parseFloat(val),
        options,
      );
      return { 
        key: prevState.key.toString(), 
        val: isNaN(newValue) ? "0" : newValue.toFixed(6).replace(/\.?0+$/, '')
      };
    });
  };

  const selectOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const key = e.target.value;
    convertOnChange(key, node.val);
    setNode((prevState) => ({ key: key, val: prevState.val }));
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    convertOnChange(node.key, val);
    setNode((prevState) => ({ key: prevState.key, val }));
  };

  return (
    <div className="space-y-3">
      {/* Unit Selector */}
      <div className="relative">
        <select
          value={node.key}
          onChange={selectOption}
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer text-gray-700 font-medium"
        >
          {options.map((value, idx: number) => (
            <option value={idx} key={idx}>
              {value.key.toUpperCase()}
            </option>
          ))}
        </select>
        {/* Custom dropdown arrow */}
        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Value Input */}
      <div className="relative">
        <input
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 font-medium text-lg"
          type="number"
          value={node.val}
          onChange={onChangeHandler}
          placeholder="Enter value"
          step="any"
        />
      </div>
    </div>
  );
};
export default Select;
