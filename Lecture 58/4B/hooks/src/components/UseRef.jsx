import React,{useRef,useState} from 'react'

const UseRef = () => {

    const reff = useRef('')
    console.log(reff)
    const [name,setName]=useState("Shivam")

    function Reset(){
        setName('')
        reff.current.focus()
    }

  return (
    <div>
      <h1>Learning UseRef</h1>
      <input ref={reff} type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default UseRef
