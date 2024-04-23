import { useState } from "react";
import Header from "./Header";
import Chart from "./Chart";
import AddDeveloper from "./AddDeveloper";
import AddDeveloperTrainee from "./DeveloperTrainee";

function Dashboard() {

   
    const [Active, setActive] = useState(<Chart/>)
    return (
<div> 
  <Header/>

  <div className="row">
    <div className="col-lg-2" style={{backgroundColor:"#002a5c",height:"auto"}}>
     
      <h6 style={{textAlign:"center",color:"white",padding:"4% 0%",borderBottom:"1px solid white"}} onClick={()=>setActive(<Chart/>)}>DASHBOARD</h6>
      <h6 style={{textAlign:"center",color:"white",padding:"3% 0%",borderBottom:"1px solid white"}} onClick={()=>setActive(<AddDeveloper/>)}>ADD DEVELOPER</h6>
      <h6 style={{textAlign:"center",color:"white",padding:"3% 0%",borderBottom:"1px solid white"}} onClick={()=>setActive(<AddDeveloperTrainee/>)}>ADD DEVELOPER TRAINEE</h6>
    
    </div>
    <div className="col-lg-10">
      {Active}
    </div>


  </div>
</div>
    );
}

export default Dashboard;