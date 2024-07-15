interface Props {
  text: string;
}
const Display = ({ text }: Props) => {
  return (
    <div className="border bg-white text-right px-3 py-1 rounded-md shadow-sm">
      <div className={`main ${!text && "fade"}`}>
        {!text || text == "0" ? "0" : text}
      </div>
    </div>
  );
};

export default Display;
