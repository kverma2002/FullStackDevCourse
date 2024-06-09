import Total from "./Total"
import Part from "./Part"

const Content = (props) => {
    return (
        <>
         <div>
            <Part info={props.parts[0]} />
            <Part info={props.parts[1]} />
            <Part info={props.parts[2]} />
        </div>
            <Total parts={props.parts}/>
        </>

    )
  }

  export default Content