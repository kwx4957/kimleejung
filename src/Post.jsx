import './Post.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";

function Post () {
    <div>
        <>
            <div>
                <Routes>
                    <Route path="/" element={<Home />}/>
                </Routes>
            </div>
        </>
    </div>
}
function Home() {

    return (
        <>
            {/* 로고 위치 및 크기 지정 */}
            <div> 
                <img src="kimleejung_logo.png"  className="post-logo" alt='post'/>
            </div>
        </>
    )
}
export default Post;
