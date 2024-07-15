interface KeyProps {
  name: string;
  onPress: (key: string) => void;
}
const Key = ({ name, onPress }: KeyProps) => {
  return (
    <button
      onClick={() => onPress(name)}
      className="border flex-1 px-3 py-1 rounded-md  shadow-md  "
    >
      {name}
    </button>
  );
};

export default Key;
