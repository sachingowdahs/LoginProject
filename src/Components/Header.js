import React, { Component } from 'react';

function Header() {

  
    return (
<div > 

<div style={{height:"100px",backgroundColor:"#002a5c",borderBottom:"1px solid white" }}>
    <div className='row' style={{padding:"0.6% 1% 0% 1%",color:"white"}}>
        <div className='col-lg-4'><h3 style={{textAlign:"start"}}><img src = "https://thumbs.dreamstime.com/b/circle-logo-circle-logo-symbols-vector-148467700.jpg" style={{height:"80px",width:"45%"}}/></h3></div>
        <div className='col-lg-8'> <h3 style={{textAlign:"end"}}>
            <div style={{cursor:"pointer"}} onClick={()=>window.location.assign("/")}>
            <i class="fa fa-user-circle" style={{fontSize:"50px",marginRight:"1.5%"}}></i>
<p style={{fontSize:"20px"}}>LOGOUT</p>
            </div>
            
            </h3></div>

    </div>
</div>


   
</div>
    );
}

export default Header;