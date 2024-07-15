import Calculator from "./components/calculator";
import ToggleBar from "./components/ToggleBar";
import UnitConverter from "./components/converter";

const Components = ["calculator", "unit converter"];

const App = () => {
  return (
    <>
      <div>
        <ToggleBar elements={Components}>
          <Calculator />
          <UnitConverter />
        </ToggleBar>
      </div>
    </>
  );
};

export default App;
