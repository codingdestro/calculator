import Calculator from "./components/calculator";
import ToggleBar from "./components/ToggleBar";
import UnitConverter from "./components/converter";
import AgeCalc from "./components/age_calc";

const Components = ["calculator", "unit converter", "age calc"];

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 py-4 sm:py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <ToggleBar elements={Components}>
          <Calculator />
          <UnitConverter />
          <AgeCalc />
        </ToggleBar>
      </div>
    </div>
  );
};

export default App;
