const Total = ({parts}) => {
    const total = parts.reduce((s, p) => {
        // console.log('what is happening', s, p)
        return s + p.exercises}, 0)
    return (
      <div>
        <p><b>total of {total} exercises</b></p>
      </div>
    )
  }

  export default Total