import { useState } from "react";
import "../styles/toggleBar.scss";
type Props = {
  children: [JSX.Element, JSX.Element];
};
const ToggleBar = ({ children }: Props) => {
  const [toggle, setToggle] = useState(true);
  const [currentChild, setCurrentChild] = useState(0);

  const onToggle = () => {
    setToggle((prevState) => {
      setCurrentChild(prevState ? 0 : 1);

      return !toggle;
    });
  };
  return (
    <div className="container">
      <div className="windows ">
        {children.map((child: JSX.Element, idx: number) => (
          <div
            className={`body ${toggle ? "slideRight" : "slideLeft"}`}
            key={idx}
          >
            {child}
          </div>
        ))}
      </div>
      <div className="toggle-header" onClick={onToggle}>
        {["calculator2", "converter"].map((val: string, idx: number) => {
          return (
            <div
              className={`${idx === currentChild ? "active" : ""}`}
              key={idx}
            >
              <img src={`/${val}.png`} width={26} alt="x" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ToggleBar;
