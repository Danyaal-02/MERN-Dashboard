import React from 'react'
import bg from "../assets/bg.jpg"

const Bg = () => {
    return (
        <div className="bg w-100 h-100 position-absolute top-0 left-0">
            <img src={bg} alt="" className="img-fluid h-100 w-100" />
        </div>
    )
}

export default Bg
