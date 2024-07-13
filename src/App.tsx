import ToggleBar from "./components/ToggleBar";
import Calculator from "./components/calculator";
import Converter from "./components/converter";
import AgeCalc from "./components/age-calc";

const App = () => {
  return (
    <>
      {/* <div>
        <ToggleBar>
          <Calculator />
          <Converter />
        </ToggleBar>
      </div> */}
      <AgeCalc />
    </>
  );
};

export default App;
