import { useState } from "react"

const Controlled =()=>{
  const [userName,setUserName]=useState("")
  const [userNameError,setUserNameError]=useState("")
  const [password,setPassword]=useState("")
  const[passwordError,setPasswordError]=useState("")
  const [confirmpassword,setconfirmPassword]=useState("")
  const[confirmpasswordError,setconfirmPasswordError]=useState("")


  const userNameHandler =(event)=>{


      setUserName(event.target.value)
      // validateEmail(event.target.value)
      if(event.target.value.length>10){
          setUserNameError("enter below 10 characters")
      }else{
          setUserNameError("")

      }



  }

  const passwordHandler =(event)=>{
      setPassword(event.target.value)
      console.log(event.target.value)
      const result=validatePassword(event.target.value)
      // if(result){
      // console.log("password valid")
      // setPasswordError("")
      // }else{
      //     setPasswordError("password invalid")
        

      // }
     

  }
  const confirmpasswordHandler =(event)=>{
    setconfirmPassword(event.target.value)
    // console.log(event.target.value)
   
   

}

  const username = "k3llydev";

  function validatePassword(psw)
{
let msg = true

switch (true) {
case  (psw.length < 8 || psw.length > 13):
  msg = false
  break
case  (!(/[0-9]/.test(psw))):
  msg = false
  break
case (psw == psw.toLowerCase()) || (psw == psw.toUpperCase()):
  msg = false
  break
case ( psw.includes(username)):
  msg =false
  break
}
return msg
}

function validateconfirmPassword(psw1)
{
let msg = true

switch (true) {
case  (psw1.length < 8 || psw1.length > 13):
  msg = false
  break
case  (!(/[0-9]/.test(psw1))):
  msg = false
  break
case (psw1 == psw1.toLowerCase()) || (psw1 == psw1.toUpperCase()):
  msg = false
  break
case ( psw1.includes(username)):
  msg =false
  break
}
return msg
}




// const validateEmail = (email) => {
//     return String(email)
//       .toLowerCase()
//       .match(
//         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//       );
//   };

const submitHandler=(event)=>{
  event.preventDefault()
  if(password==confirmpassword){
    alert("success")
    var userDetails={
      userName,
      password,
      confirmpassword
  }

  console.log(userDetails)

  }
  else{
    alert("wrong credentials")
  }


  //server hit 
 




}
    return(
        <>
         <form action="/action_page.php" onSubmit={submitHandler}>
        <div className="form-group">
          <label>Email:</label>
          <input type="text" className="form-control" id="email" placeholder="Enter email" name="email" value={userName} onChange={userNameHandler}/>
          {
        userNameError 
        ?
        <h3 style={{color:"red"}} >{userNameError}</h3>
        :
        null
     }
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd"  value={password}  onChange={passwordHandler}/>
          {
        passwordError ?
        <h3 style={{color:"red"}} >{passwordError}</h3>
        :
        null
    }
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input type="confirm password" className="form-control" id="pwd1" placeholder="Enter confirm password" name="pwd1"  value={confirmpassword}  onChange={confirmpasswordHandler}/>
          {
        confirmpasswordError ?
        <h3 style={{color:"red"}} >{confirmpasswordError}</h3>
        :
        null
    }
        </div>
        <div className="checkbox">
          <label><input type="checkbox" name="remember"/> Remember me</label>
        </div>

        {

           userNameError ||  passwordError || confirmpasswordError ? null:
           <button type="submit" className="btn btn-primary">Submit</button>

}
      </form>
        </>
    )
}
export default Controlled