import './login.css';
import React from 'react';
function Login () {
    
    return (
        <>
        {/* <div className="App App-header">
            <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/dividend" element={<Dividend/>} />
            <Route path="/login" element={<Login/>} />
            </Routes>
        </div> */}
            {/* 로고 위치 및 크기 지정 */}
            <div style={{ width: '100vw' }}> 
                <img src="kimleejung_logo.png"  className="divi-logo" alt='logo'/>
            </div>
            <div className='sing-in'>
                Sing In
                <input type="search" placeholder="ID" id="id"/><br/>
                <input type="search" placeholder="PW" id="password"/><br/>
                <button>로그인</button>
                <button>회원가입</button>  
            </div>
        </>
    );
} 
export default Login;