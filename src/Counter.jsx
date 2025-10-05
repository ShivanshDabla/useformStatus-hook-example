import React from 'react'

const Counter = ({user}) => {
  return (
    <div>
      <input type='text' ref={user} placeholder='enter your name'></input>
    </div>
  )
}

export default Counter