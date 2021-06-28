import React from 'react'

export const Blog = () => {
    var myStyle={
        backgroundColor:"red"
    }
    return (
        <div className="blog-container" style={myStyle}>
            <div className="heading-link"><a href="#">Idon't have a plan</a></div>
            <div className="content">This is the content paragraph</div>
            <div className="link"><a href="#">Read More......</a></div>
        </div>
    )
}
