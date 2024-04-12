import React, { useEffect, useRef, useState } from 'react'
 

const UseReff = () => {

        const[ count,setCount]=useState(0);
        const PrevCount=useRef('');
        console.log(PrevCount)
    
        useEffect(()=>{
            PrevCount.current=count;
        })
       
        function handle()
        {
            setCount(PrevCount=>PrevCount+1);
        }
  return (
      <div>
        <h1> PrevCount : {PrevCount.current}</h1>
        <h2> Count : {count}</h2>
         <button onClick={handle}>increament</button> 
    </div>
  )
}

export default UseReff
