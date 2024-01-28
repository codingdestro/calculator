interface Props{
    text:string
}
const Display = ({text}:Props) => {
  return (
    <div className="display-box">
      <div className="main">{text}</div>
    </div>
  );
};

export default Display;
