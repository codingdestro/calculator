interface Props {
  text: string;
}
const Display = ({ text }: Props) => {
  return (
    <div className="display-box">
      <div className={`main ${!text&&"fade"}`}>{!text || text == "0"?"0":text}</div>
    </div>
  );
};

export default Display;
