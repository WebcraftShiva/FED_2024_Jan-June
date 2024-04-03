import React from 'react'

const LearnJSX = () => {

    const randomNum = Math.floor(Math.random()*10 +1)

    const luckyNum = 7;

  return (
    <div>
        {/* <h1>The Random Number 1 to 6 is: { Math.floor(Math.random()*6 +1)} </h1> */}
        <h2>Random Number btw 1 to 10:{randomNum} </h2>
        {randomNum === luckyNum 
        ? <img src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmc0YmVwbjhueTRqcWE3cnB5eXE1ejM1cjhnM3ZxZ2dqbGh1dHo4dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2sXf9PbHcEdE1x059I/giphy.gif'/> : <p>Not a Lucky Number 😥</p>
        }

    </div>
  )
}

export default LearnJSX