import { BiaxialLineChart } from "../../common/charts/BiaxialLineChart";
import { PieChartWithCustomizedLabel } from "../../common/charts/PieChartWIthCustomizedLabel";
import { biaxialData } from "../../common/dev-data/biaxial-data";

export const ScreenRoot = () => {
  return (
    <div className="w-full">
  
  <BiaxialLineChart width={700} height={300} data={biaxialData}  />

  <span className="">
  <PieChartWithCustomizedLabel/>
  </span>
 
 
    
    </div>
  );
};
