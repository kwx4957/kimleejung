import './Login.css';
import React from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
function Login () {
    
    return (
        <>
        <div className="App App-header">
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
        </div>
        </>
    );
} 
function Home() {
    const navigate = useNavigate();


    return (
        <>
            {/* 로고 위치 및 크기 지정 */}
            <div style={{ width: '100vw' }}> 
                <img src="kimleejung_logo.png"  className="divi-logo" alt='logo'/>
            </div>

            <from className='sns-in'>
                <div class="sns_login_wrap"><div class="tit">SNS 로그인</div>
                <div class="sns_list">
                    <ul>
                        <button>
                            <a href="javascript:void(0);">
                                <span class="logo">
                                    <img src="naver_long.png" alt="네이버"/>
                                </span>
                            </a><br/>
                        </button>
                        <button>
                            <a href="javascript:void(0);">
                                <span class="logo">
                                    <img src="kakao_long.png" alt="카카오톡"/>
                                </span>
                            </a><br/>
                        </button>
                        <button>
                            <a href="javascript:void(0);">
                                <span class="logo">
                                    <img src="google_long.png" alt="구글"/>
                                </span>
                            </a><br/>
                        </button>
                    </ul>
                    <p>SNS 로그인은 계정이 연결되어 있어야 합니다.</p>
                    </div>
                </div>
            </from>

        </>
    )
}
export default Login;