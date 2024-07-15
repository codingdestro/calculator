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
    setNode2((prevState) => {
      const newValue = convert(
        parseInt(from),
        parseInt(prevState.key),
        parseFloat(val),
        options,
      );
      return { key: prevState.key.toString(), val: newValue.toString() };
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
    <>
      <div className="flex flex-col items-start gap-2 my-2">
        <select
          onChange={(e) => selectOption(e)}
          className="px-5 py-1 rounded-lg cursor-pointer "
        >
          {options.map((value, idx: number) => {
            return (
              <option className={``} value={idx} key={idx}>
                {value?.key}
              </option>
            );
          })}
        </select>
        <input
          className="border rounded-lg w-full px-2 "
          type="number"
          value={node.val}
          onChange={onChangeHandler}
          placeholder="00"
        />
      </div>
    </>
  );
};
export default Select;
