import { useState } from "react";
import CanvasJSReact from '@canvasjs/react-charts';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Columnbar() {

    const options = {
        title: {
          text: "Software Developers"
        },
        data: [{
          type: "column",
          dataPoints: [
            { label: "React",  y: 10  },
            { label: "Angular", y: 15  },
            { label: "React native", y: 25  },
            { label: "Java",  y: 30  },
            { label: "Python",  y: 28  }
          ]
        }]
      }

    const [Active, setActive] = useState("Login")
    return (
<div> <CanvasJSChart options = {options}
          /* onRef = {ref => this.chart = ref} */
        /></div>
    );
}

export default Columnbar;