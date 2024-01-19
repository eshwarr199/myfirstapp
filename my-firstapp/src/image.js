

const Imagecomponent=()=>{
    return(
        <img 
        src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="pond"
        class="photo"
        width="200px"
        />
    )
}
export default Imagecomponent

export const Objectcomponent=()=>{
    const details={
        name:"picture",
        imageurl:"https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        imagealt:"Lake",
        width:"200px",
        listitems:["the picture is beautiful","it contains peaceful nature"]
    }
    return(
        <div>
            <h1>{details.name}</h1>
            <img
            src={details.imageurl}
            alt={details.imagealt}
          
            width={details.width}
            />
            <ol>
                <li>{details.listitems[0]}</li>
                <li>{details.listitems[1]}</li>
            </ol>
            
        </div>

    )
}