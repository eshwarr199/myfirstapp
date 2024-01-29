import {Component} from "react"
import Loader from "../../loader/loader"

class Mounting extends Component{
    constructor(){
        console.log("constructor")
        super()
            this.state={
                message:"hello",
                color:"red",
                posts:[]
            }
        }
        static getDerivedStateFromProps(props){
            console.log("getDerivedStateFromProps")
            return{color:props.color}
        }

componentDidMount(){
    document.title="cart"


    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response=>response.json())
    .then(response=>{
       this.setState(
        {
            posts:response
        }
       )
    })
}
        render(){
            console.log("render",this.state.posts)
            return(
                <>
                <h1 style={{color:this.state.color}}>Mounting{this.state.message}</h1>
                
                {
                    this.state.posts.length>0
                    ?
                    <>
                    {
                        this.state.posts.map((eachpost)=><>
    
                                <h1>{eachpost.title}</h1>

                                <h2>{eachpost.id}</h2>

                                </>
                            
                    
                        )
                    }
                    </>
                    :
                    <Loader/>
                }
                </>

            )
        }
    }

    export default Mounting 
    
