import "../../styles/select.scss";
import "../../styles/converter.scss";
import SelectBox from "./SelectBox";
import { LENGHT } from "../../service/data";
const index = () => {
  return (
    <div className="converter">
      <h3 >Unit Converter</h3>
      <SelectBox options={LENGHT} />
    </div>
  );
};

export default index;
