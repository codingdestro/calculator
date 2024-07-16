type Props = {
  label: string;
  value?: string;
  onChangeHandler: (value: string) => void;
};

const InputDateBox = ({ label, value, onChangeHandler }: Props) => {
  return (
    <div className="flex items-center gap-2 ">
      <p>{label}</p>
      <input
        className="border rounded-md px-2 py-1 outline-none w-[80px]"
        type="number"
        value={value}
        onChange={(e) => onChangeHandler(e.target.value)}
      />
    </div>
  );
};

export default InputDateBox;
