import './Login.css';

const Login = () => {
    return (
        <>
            {/* 로고 위치 및 크기 지정 */}
            <div> 
                <img src="kimleejung_logo.png"  className="divi-logo" alt='logo'/>
            </div>
            
            {/*로그인*/}
            <from className='sns-in'>
                <div class="sns_login_wrap"><div class="tit" className="tit">SNS 로그인</div>
                <div class="sns_list">
                    <ul>
                        <button className="Naver_Button">
                            <a href="javascript:void(0);">
                                <span class="logo">
                                    <img src="naver_long.png" alt="네이버"/>
                                </span>
                            </a><br/>
                        </button>
                        <button className="Kakao_Button">
                            <a href="javascript:void(0);">
                                <span class="logo">
                                    <img src="kakao_long.png" alt="카카오톡"/>
                                </span>
                            </a><br/>
                        </button>
                        <button className="Gooogle_Button">
                            <a href="javascript:void(0);">
                                <span class="logo">
                                    <img src="google_long.png" alt="구글"/>
                                </span>
                            </a><br/>
                        </button>
                    </ul>
                    
                    </div>
                </div>
            </from>

        </>
    )
}

export default Login;