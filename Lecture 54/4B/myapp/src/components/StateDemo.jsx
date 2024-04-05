import React,{useState} from 'react'

const StateDemo = () => {

    // let count = 0;
     const [count,setCount] = useState(0)

    const cardClickedHandler = () => {
      // count = count + 1;
      // console.log(count)
      setCount(count + 1);
    }

    

  return (
    <div>
        <h1>Count Is: {count}</h1>
        <button onClick={cardClickedHandler}>Increase Counter</button>
    </div>
  )
}

export default StateDemo