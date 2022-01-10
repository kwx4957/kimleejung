import './login.css';
import React from 'react';
function Login () {
    return (
        
        <>
            {/* 로고 위치 및 크기 지정 */}
            <div style={{ width: '100vw' }}> 
                <img src="kimleejung_logo.png"  className="divi-logo" alt='logo'/>
            </div>
            <div>
                아이디 : <input type="search" placeholder="ID"/><br/>
                <input type="search" placeholder="PW"/>
            </div>
        </>
    );

} 
export default Login;