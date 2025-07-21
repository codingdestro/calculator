import Key from "./Key";

interface Props {
  keys: string[];
  onPressHandler: (key: string) => void;
}

const KeyBox = ({ keys, onPressHandler }: Props) => {
  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-3">
      {keys.map((key: string, idx: number) => {
        // Special styling for the equals button (spans 2 columns)
        const isEquals = key === "=";
        const isOperator = ["+", "-", "x", "/", "="].includes(key);
        const isSpecial = ["C", "←", "00"].includes(key);
        
        return (
          <Key 
            name={key} 
            key={idx} 
            onPress={onPressHandler}
            isOperator={isOperator}
            isSpecial={isSpecial}
            isEquals={isEquals}
          />
        );
      })}
    </div>
  );
};

export default KeyBox;
