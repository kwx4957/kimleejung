import './Borad.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
function Borad () {
    return (
        <>
        <div>
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
        </div>
        </>
    );
}
function Home() {

    return (
        <>
            {/* 로고 위치 및 크기 지정 */}
            <div style={{ width: '100vw' }}> 
                <img src="kimleejung_logo.png"  className="borad-logo" alt='logo'/>
            </div>
        </>
    )
}
export default Borad;