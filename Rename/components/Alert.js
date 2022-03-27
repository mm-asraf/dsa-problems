import React from 'react'
import { useState } from 'react/cjs/react.production.min'

const Alert = () => {

    const [activeMessage, setRemoveMessage] = useState(true)

    const handleMessage = () => {
        setRemoveMessage(false)
    }

    return (
        <div>

            <h1>Hello World</h1>
            <h2>{activeMessage}</h2>
            <button onClick={handleMessage}></button>
        </div>
    )
}

export { Alert }