import Key from "./Key";
interface Props {
  keys: string[];
  onPressHandler: (key: string) => void;
}
const KeyBox = ({ keys, onPressHandler }: Props) => {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-4 gap-5">
        {keys.map((key: string, idx: number) => {
          return <Key name={key} key={idx} onPress={onPressHandler} />;
        })}
      </div>
    </div>
  );
};

export default KeyBox;
