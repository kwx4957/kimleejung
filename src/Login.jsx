import './Login.css';
import React from 'react';
import Join from './Join';
import { Routes, Route, useNavigate } from "react-router-dom";
function Login () {
    
    return (
        <>
        <div className="App App-header">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/join" element={<Join/>} />
            </Routes>
        </div>
        </>
    );
} 
function Home() {
    const navigate = useNavigate();

    const onJoin = (e) => {
        e.preventDefault();
        navigate('/join');
    }

    return (
        <>
            {/* 로고 위치 및 크기 지정 */}
            <div style={{ width: '100vw' }}> 
                <img src="kimleejung_logo.png"  className="divi-logo" alt='logo'/>
            </div>
            <div className='sing-in'>
                Login<br/>
                <input type="search" placeholder="ID" id="id"/><br/>
                <input type="search" placeholder="PW" id="password"/><br/>
                <button>로그인</button>
                <from onSubmit={onJoin}>
                    <button>회원가입</button>  
                </from>
                
            </div>
        </>
    )
}
export default Login;