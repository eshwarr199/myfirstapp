import {useRef} from "react"





const Uncontroled=()=>{
  const emailRef=useRef()
  const passwordRef=useRef()


  const handleSubmit=(event)=>{
    event.preventDefault()

    console.log(emailRef.current.value)
    if(passwordRef.current.value.length<4){
      alert("please enter password more than 4 characters")
    }else{
      const userInfo={
      username:emailRef.current.value,
      password:passwordRef.current.value
      }
      hitServer(userInfo)
    }
    // alert("clicked")
  }
  const hitServer=(data)=>{
    fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
})
.then(res => res.json())
.then(res=>console.log)
.catch(err=>console.log(err))
  }
    return(
        <>
        <form action="/action_page.php" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input type="text" className="form-control" id="email" placeholder="Enter email" name="email" ref={emailRef}/>
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" ref={passwordRef}/>
        </div>
        <div className="checkbox">
          <label><input type="checkbox" name="remember"/> Remember me</label>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
      </>
    )
}
export default Uncontroled