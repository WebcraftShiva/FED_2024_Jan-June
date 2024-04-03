import React from 'react'

const LearnJSX = () => {

    const randomNum = Math.floor(Math.random()*10 +1)

    const luckyNum =7;

  return (

    <div>
        <h1>This is a heading tag: {Math.floor(Math.random()*6 +1)} </h1>
        <h2>My random number btw 1 to 10: {randomNum}</h2>
        {randomNum === luckyNum ?
        <img src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGxvMjA1OG1mNnA3a2xtNmZudzNtcTJ3MWF3MzhtZXI0OTJyY2gzNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2sXf9PbHcEdE1x059I/giphy.gif'/>
        : <p>Not a lucky number 😥</p>
        }
    </div>
  )
}

export default LearnJSX