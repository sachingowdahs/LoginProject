import { useState } from "react";

function Login() {


  const User = JSON.parse(localStorage.getItem("Register"));

  const [LoginEmail, setLoginEmail] = useState()
  const [LoginPassword, setLoginPassword] = useState()


    const SubmitLogin = () => {
        if(User?.Email == LoginEmail && User?.Password == LoginPassword ){
            window.location.assign("/dashboard");

        }
        else{
            alert("Register and Enter Email & Password")
        }
    }

    const [Active, setActive] = useState("Login")

    const [Name, setName] = useState()
    const [Password, setPassword] = useState()
    const [Cpassword, setCpassword] = useState()
    const [Cnumber, setCnumber] = useState()
    const [Email, setEmail] = useState()

    const Registerdata = {id :1,Name : Name , Password : Password ,Cpassword:Cpassword, Cnumber:Cnumber,Email:Email}

    const Register = () => {
        if(Name){
            if(Email){
                if(Cnumber){
                    if(Password){
                        if(Cpassword){
                            if(Password == Cpassword){
                                alert("Register Success..")
         localStorage.setItem("Register",JSON.stringify(Registerdata) );
         setActive("Login")
                        
                            }
                            else{
                                alert("Password and Confirm password does not match..")
                            }
                        }
                        else{
                            alert("Enter Confirm Password")
                        }
                    }
                    else{
                        alert("Enter Password")
                    }
                }
                else{
                    alert("Enter Contact Number")
                }
            }
            else{
                alert("Enter Email")
            }
        }
        else{
            alert("Enter Name")
        }

    }
    return (
        <div style={{
            backgroundImage: `url("https://t3.ftcdn.net/jpg/04/17/77/78/360_F_417777825_v7o8RvkQhxpZkE0ZBD4xwzri5hGFHkO3.jpg")`, height: "100vh",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            justifyContent: "center",
            display: "flex",
        }}>

            <div style={{ textAlign: "center", backgroundColor: "white", marginTop: "10%", width: "50%", marginBottom: "10%" }}>

                <div className="row">

                    <div  className = "col-lg-4">
                       

                        <div className={Active == "Login" ? "Activeblock" : "InActiveblock"} onClick={()=>{setActive("Login")}} >
                            <i class="fa fa-user-circle" aria-hidden="true" style={{ fontSize: "25px", }}></i>
                            <p className="BlockText">Login</p>
                        </div>

                        <div className={Active == "Register" ? "Activeblock" : "InActiveblock"} onClick={()=>{setActive("Register")}} >
                            <i class="fa fa-pencil-square" aria-hidden="tr ue" style={{ fontSize: "25px" }}></i>
                            <p className="BlockText">Register</p>
                        </div>

                        <div className={Active == "Forgotpass" ? "Activeblock" : "InActiveblock"} onClick={()=>{setActive("Forgotpass")}} >
                            <i class="fa fa-lock" aria-hidden="true" style={{ fontSize: "25px" }}></i>
                            <p className="BlockText">Forgot-Password ?</p>
                        </div>

                    </div>
                    <div  className = "col-lg-8" style={{ height:"390px" }}>
                        <div style={{margin:"2% 5%"}}>

                        <div style={{marginTop:"10%" , display: Active == "Login" ? "block": "none" }}>
                            <h4>Login Here</h4>
                            <input type="text" placeholder="Email" className="textInput" onChange={(e)=>{setLoginEmail(e.target.value)}}/>
                            <input type="password" placeholder="Password" className="textInputA" onChange={(e)=>{setLoginPassword(e.target.value)}}/>

                            <button className="Loginbutton" onClick={SubmitLogin}>Login</button>

                        </div>


                        <div style={{marginTop:"1%" , display: Active == "Register" ? "block": "none" }}>
                            <h4>Register Here</h4>
                            <input type="text" placeholder="Name" className="textInputB" onChange={(e)=>{setName(e.target.value)}} />

                            <input type="text" placeholder="Email" className="textInput" onChange={(e)=>{setEmail(e.target.value)}}/>
                            <input type="number" placeholder="Contact number" className="textInput" onChange={(e)=>{setCnumber(e.target.value)}}/>
                            <div style={{display:"flex",width:"94%",margin:"0% 3%",marginTop:"2%"}}>
                                <div style={{width:"48%"}}>
                            <input type="password" placeholder="Password" className="textInputA" onChange={(e)=>{setPassword(e.target.value)}}/>

                                </div>
                                <div  style={{width:"48%",marginLeft:"4%"}}>
                            <input type="password" placeholder="Confirm Password" className="textInputA" onChange={(e)=>{setCpassword(e.target.value)}}/>

                                </div>
                            </div>


                            <button className="Loginbutton" onClick={Register}>Register</button>

                        </div>


                        <div style={{marginTop:"10%" , display: Active == "Forgotpass" ? "block": "none" }}>
                            <h4>Forgot Password</h4>
                            <input type="text" placeholder="Enter Registered Email" className="textInput" />

                            <button className="Loginbutton">Send Otp</button>

                        </div>
                        </div>

                       

                    </div>

                </div>

            </div>
        </div>
    );
}

export default Login;
