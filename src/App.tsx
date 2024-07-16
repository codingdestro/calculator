import Calculator from "./components/calculator";
import ToggleBar from "./components/ToggleBar";
import UnitConverter from "./components/converter";
import AgeCalc from "./components/age_calc";

const Components = ["calculator", "unit converter", "age calc"];

const App = () => {
  return (
    <>
      <div>
        <ToggleBar elements={Components}>
          <Calculator />
          <UnitConverter />
          <AgeCalc />
        </ToggleBar>
      </div>
    </>
  );
};

export default App;
