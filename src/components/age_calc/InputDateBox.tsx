type Props = {
  label: string;
  value?: string;
  onChangeHandler: (value: string) => void;
  min?: number;
  max?: number;
};

const InputDateBox = ({ label, value, onChangeHandler, min, max }: Props) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-700 font-medium"
        type="number"
        value={value}
        onChange={(e) => onChangeHandler(e.target.value)}
        min={min}
        max={max}
        placeholder={`Enter ${label.toLowerCase()}`}
      />
    </div>
  );
};

export default InputDateBox;
