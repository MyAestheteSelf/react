import React from 'react'
import '../css/blogs.css'
import {Blog}from './Blog'
export const Blogs = () => {
    return (
        <div className="blogs-container">
            <Blog/>
            <Blog/>
            <Blog/>
        </div>
    )
}
