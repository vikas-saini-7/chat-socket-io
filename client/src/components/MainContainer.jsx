import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'

const socket = io('http://localhost:9000');

const MainContainer = () => {
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages((prevMessages) => [...prevMessages, message])
            console.log(message)
        })
        return () => {
            socket.disconnect();
        };
    }, [])

    const handleEnterClick = (e) => {
        if(e.key === "Enter"){
            socket.emit('message', messageInput)
            setMessageInput('')
        }
    }

  return (
    <>
        <div className='h-full'>
            {messages.map((message) => (
                <div>{message}</div>
            ))}
        </div>
        <div className='absolute bottom-0 left-0 w-full'>
            <div className='max-w-[500px] mx-auto flex items-center gap-4'>
                <input onKeyDown={handleEnterClick} onChange={(e) => setMessageInput(e.target.value)} value={messageInput} className='bg-gray-500 bg-opacity-10 px-4 py-2 my-4 rounded-lg w-full' type="text" />
                <button className=''>Send</button>
            </div>
        </div>
    </>
  )
}

export default MainContainer