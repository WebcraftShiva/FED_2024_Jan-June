import React, { useEffect, useState } from 'react'

const UsEff = () => {


        const [Count ,SetCount]=useState(0);

        //1: No dependency:
        // useEffect(()=>{
        //     console.log("Counter Mounted")
        // },[]);

        //2: Runs one time
        // useEffect(()=>{
        //     console.log("Counter Mounted")
        // },[]);
        //3: Runs when counter was updated
        useEffect(()=>{
          console.log("Counter updated")
        },[Count]);


  return (
    <div>
      <h1>{Count}</h1>
      <button onClick={()=>SetCount(Count+1)}>increament</button>
    </div>
  )
}

export default UsEff









