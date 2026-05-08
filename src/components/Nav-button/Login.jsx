import logo from "../../assets/wimp-logo_200x60@2x.webp"
import { useState } from "react";
export default function Login(){
  const [user,setUser]= useState({
    email:"",
    password:""
  })

  function handleSubmit(e) {
    e.preventDefault();
    if (user.email==="" || user.password===""){
      alert("Invalid email or password.")
      return
    }
    localStorage.setItem("user", JSON.stringify(user));
    console.log("Saved")
    setUser({email:"",password:""})
  }

 return(
    <div>
      <form className="form" >
         <img src={logo} alt="Logo" style={{height:"15%", width:"60%",margin:" 10px auto"}}/>
         <div>
            <br></br>
         <h1 style={{fontSize:"20px",color:"rgb(255, 106, 0)",fontWeight:"bold"}}>Sign in</h1>
         <p style={{color:"grey",fontSize:"10px"}}>Sign in or create a new account</p>
         <input placeholder="Email" value={user.email} className="email-inp" type="email" onChange={(e)=>{
          setUser({...user,email:e.target.value})
         }}></input>

         <input placeholder="Password" value={user.password} className="pass-inp" type="password"onChange={(e)=>{
          setUser({...user,password:e.target.value})
         }}></input>

         <button className="signin" type="submit" onClick={handleSubmit}>Continue</button>
         </div>
         <div className="form-divider">or</div>
         <button className="signup">Sign up</button>
<label className="checkbox-container">
  <input type="checkbox" name="subscribe" value="newsletter" defaultChecked />
  <span style={{ fontSize: "12px", color: "grey", marginLeft: "8px" }}>
    Email me with news and offers
  </span>
</label>

<div style={{fontSize:"12px",margin:"15px 10px 10px 35px",color:"rgb(156, 154, 154)"}}>By continuing, you agree to our <a style={{textDecoration:"underline",fontWeight:"bold"}}>Terms of Services</a></div>



      </form>
    </div>
 );
}