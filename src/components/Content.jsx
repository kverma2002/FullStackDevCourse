import Total from "./Total"
import Part from "./Part"

const Content = (props) => {
    return (
        <>
         <div>
            {props.parts.map(part => <Part info={part} key={part.id}/>)}
        </div>
            <Total parts={props.parts}/>
        </>

    )
  }

  export default Content