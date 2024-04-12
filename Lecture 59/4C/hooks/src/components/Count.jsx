import React, { useState } from 'react'

const Count = () => {

        const [count,setCount] = useState(0)

        const counterUpdated = () =>{
            setCount(count +1)
        }

  return (
    <div>
      <h1>Count Is: {count}</h1>
      <button onClick={counterUpdated}>Increase Counter</button>
    </div>
  )
}

export default Count
