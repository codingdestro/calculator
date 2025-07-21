interface Props {
  text: string;
}

const Display = ({ text }: Props) => {
  return (
    <div className="bg-gray-900 border border-gray-600 rounded-xl px-4 py-6 shadow-inner">
      <div className="text-right">
        <div className="text-2xl sm:text-3xl md:text-4xl font-mono font-light text-white leading-tight min-h-[3rem] flex items-end justify-end overflow-hidden">
          <span className={`transition-opacity duration-200 break-all ${!text && "opacity-50"}`}>
            {!text || text === "0" ? "0" : text}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Display;
