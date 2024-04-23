import { useState } from "react";
import Columnbar from "./columnbar";
import Linechart from "./linechart";
import Areachart from "./Areachart";
import Piechart from "./Piechart";


function Chart() {

  
    const [Active, setActive] = useState("Login")
    return (
<div>
    <div className="row">
<div className="col-lg-6">
    <div style={{margin:"10%"}}>
    <Columnbar/>

    </div>
</div>

<div className="col-lg-6">
<div style={{margin:"10%"}}>
    <Linechart/>
    </div>
</div>

<div className="col-lg-6">
<div style={{margin:"10%"}}>
    <Areachart/>
    </div>
</div>

<div className="col-lg-6">
<div style={{margin:"10%"}}>
    <Piechart/>
    </div>
</div>
    </div>

     </div>
    );
}

export default Chart;