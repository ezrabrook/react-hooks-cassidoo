import { useState } from 'react'

const Button = ({ children, ...props }) => {
  return <button {...props}>{children}</button>
}

export default function Counter() {
  const [count, setCount] = useState(0)
  const [error, setError ] = useState(null)
 
  const add = () => {
    setCount(count +1 )
  }
  const subtract = () => {
    if (count > 1){
      setCount(count - 1 )
    } else {
      setError(true)
    }
  }

  return ( 
  <div>
    <Button onClick= {subtract}>Subtract</Button>
      Let's count: {count}
      <Button onClick= {add}>Add</Button>
     {error && (
     <div style={{ color: 'red'}}> Error: value should be positive</div>
   
    )}
 </div>
  )
}
