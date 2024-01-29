import { Component } from "react";
import { Audio } from 'react-loader-spinner'





class Loader extends Component{
    render(){
        return(
            <Audio
  height="300"
  width="300"
  radius="9"
  color="green"
  ariaLabel="three-dots-loading"
  wrapperStyle
  wrapperClass
/>
        )
    }
}


export default Loader