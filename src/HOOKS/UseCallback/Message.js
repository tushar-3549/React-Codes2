import React, {memo} from 'react'

const Message = ({numberofMessage, onHandleAdd}) => {
    console.log("Message of Rendering")
  return (
    <>
    <div>
        <p>send {numberofMessage} messages</p>
    </div>
    <button onClick={onHandleAdd}>Increament</button>
    </>
  )
}

export default memo(Message)