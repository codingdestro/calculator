interface KeyProps {
  name: string;
  onPress: (key: string) => void;
  isOperator?: boolean;
  isSpecial?: boolean;
  isEquals?: boolean;
}

const Key = ({ name, onPress, isOperator = false, isSpecial = false, isEquals = false }: KeyProps) => {
  let buttonStyles = "h-14 sm:h-16 w-full rounded-xl font-semibold text-lg sm:text-xl transition-all duration-150 active:scale-95 shadow-lg hover:shadow-xl ";
  
  if (isEquals) {
    buttonStyles += "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white col-span-2 ";
  } else if (isOperator) {
    buttonStyles += "bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white ";
  } else if (isSpecial) {
    buttonStyles += "bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white ";
  } else {
    buttonStyles += "bg-gradient-to-r from-gray-300 to-gray-400 hover:from-gray-400 hover:to-gray-500 text-gray-900 ";
  }

  return (
    <button
      onClick={() => onPress(name)}
      className={buttonStyles}
    >
      {name === "x" ? "×" : name === "←" ? "⌫" : name}
    </button>
  );
};

export default Key;
