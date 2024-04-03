import React from 'react'

const LearnJSX = () => {

  const randomNum = Math.floor(Math.random()*10+1)

  const luckyNum = 7;

  return (
    <div>
        <h1>This is a heading tag:
          {Math.floor(Math.random()*6+1)}
        </h1>
        <h2>My Random Number Btw 1 to 10 is:{randomNum} </h2>
        {randomNum === luckyNum ?
      <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdW5naGYxcmphZW00ZHE1emJuajE2OWt3ZnI5ZzNqMTVmcmU4Njg2biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2sXf9PbHcEdE1x059I/giphy.gif"/> : <p>Not a lucky Number 😥</p>  
      }

    </div>
  )
}

export default LearnJSX