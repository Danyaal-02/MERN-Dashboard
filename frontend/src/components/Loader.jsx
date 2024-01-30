import React from 'react'
import "./loader.css"

const Loader = () => {
    return (
        <div className="loader-box w-100 h-400 d-flex flex-column justify-content-center">
            <div className="">
                <div className="loader"></div>
                <h5 className="fw-bold text-center mt-4">LOADING</h5>
            </div>
        </div>
    )
}

export default Loader
