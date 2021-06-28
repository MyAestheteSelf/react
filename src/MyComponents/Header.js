import React from 'react'
import bg from'../1.png'
import '../css/header.css'

export const Header = () => {
    return (
        <div className="header-container">
            <div className="bg">
                <img src={bg} alt="Image" />
            </div>
            <div className="heading">
                <h2>Heading1</h2>
            </div>
        </div>
    )
}
