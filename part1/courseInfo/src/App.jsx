import { useState } from 'react'

const Header=(props)=>{
  console.log(props);
  return(
    <h1>{props.course.name}</h1>
  )
 
}
const Content=(props)=>{
   console.log(props);
  return (
    props.parts.map( (part,index)=>(
      <p key={index}>{part.name} {part.exercise}</p>
  
    ))
  ) 
}
const Total=(props)=>{
  
  const totalExercise = props.total.reduce((sum,part)=>sum+part.exercise,0)

  return (
    <p>Total no of exercises : {totalExercise}   
    </p>
  )

}
function App() {
  const course={
    name:'Half Stack application development',
    parts:[{
      name:"Fundamentals Of React",
      exercise:10
    },{
      name:"Using props to pass data",
      exercise:7
    },{
      name:"State of a component",
      exercise:14
    }
  ]
  }
  

  return (
    <div>
    <Header course={course}/>
    <Content parts={course.parts}/>
    <Total total={course.parts}/>
    
  </div>
  )
}

export default App
