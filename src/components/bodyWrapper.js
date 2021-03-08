import React from 'react'
import '../style/main.css'

const bodyWrapper = ({children}) => {

    return (
        <div className="relative min-h-screen">
            <main className="w-full min-h-screen">{children}</main>
        </div>
    )
}

export default bodyWrapper;