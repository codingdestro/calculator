import ToggleBar from "./components/ToggleBar";
import Calculator from "./components/calculator";
import Converter from "./components/converter";

const App = () => {
  return (
    <>
      <div>
        <ToggleBar>
          <Calculator />
          <Converter />
        </ToggleBar>
      </div>
    </>
  );
};

export default App;
