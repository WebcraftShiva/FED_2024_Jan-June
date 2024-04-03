import React from 'react'

const LearnJSX = () => {

    const randomNum = Math.floor(Math.random()*11)

    const luckyNum = 7;

  return (
    <div>
        {/* <h1>Random number btw 1 to 6 :
            {Math.floor(Math.random()*6 + 1)}
        </h1> */}
        <h2>Random Number btw 1 to 10: {randomNum} </h2>
        {
        randomNum === luckyNum ? <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDRrdnV5amllZzB3NXFhc2NubHJpbW90eGFhN3dpN2h4Mm1xdHNxZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2sXf9PbHcEdE1x059I/giphy.gif"/> : <h1>Your lucky number yet not found!!</h1>
        }
    </div>
  )
}

export default LearnJSX