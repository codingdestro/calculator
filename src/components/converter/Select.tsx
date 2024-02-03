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
      let newValue = convert(
        parseInt(from),
        parseInt(prevState.key),
        parseFloat(val),
        options
      );
      return { key: prevState.key.toString(), val: newValue.toString() };
    });
  };

  const selectOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let key = e.target.value;
    convertOnChange(key, node.val);
    setNode((prevState) => ({ key: key, val: prevState.val }));
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    convertOnChange(node.key, val);
    setNode((prevState) => ({ key: prevState.key, val }));
  };

  return (
    <>
      <div className="select-box">
        <select onChange={(e) => selectOption(e)}>
          {options.map((value, idx: number) => {
            return (
              <option className={`option `} value={idx} key={idx}>
                {value?.key}
              </option>
            );
          })}
        </select>
        <input
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
