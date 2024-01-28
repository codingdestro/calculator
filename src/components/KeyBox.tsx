import Key from "./Key";
interface Props {
  keys: string[];
  onPressHandler : (key:string)=>void
}
const KeyBox = ({ keys ,onPressHandler}: Props) => {
  return (
    <div className="box-keys">
      {keys.map((key: string,idx:number) => {
        return <Key name={key} key={idx} onPress={onPressHandler} />;
      })}
    </div>
  );
};

export default KeyBox;
