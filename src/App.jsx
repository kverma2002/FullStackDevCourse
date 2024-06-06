const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>{props.info[0]} {props.info[1]}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part info={props.part1} />
      <Part info={props.part2} />
      <Part info={props.part3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = ['Fundamentals of React', 10]
  const part2 = ['Using props to pass data', 7]
  const part3 = ['State of a component', 14]

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3}/>
      <Total total={part1[1] + part2[1] + part3[1]}/>
    </div>
  )
}

export default App