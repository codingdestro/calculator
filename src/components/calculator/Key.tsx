interface KeyProps {
  name: string;
  onPress: (key: string) => void;
}
const Key = ({ name, onPress }: KeyProps) => {
  return (
    <button onClick={() => onPress(name)} className="key">
      {name}
    </button>
  );
};

export default Key;
