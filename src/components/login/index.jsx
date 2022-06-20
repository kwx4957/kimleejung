import './Login.css';

const Login = () => {
    return (
        <>
            {/* 로고 위치 및 크기 지정 */}
            <div> 
                <button className="Home">
                <a href='http://localhost:3000'>
                    <img src="kimleejung_logo.png"  className="divi-logo" alt='logo'>
                        {/* <a href='http://localhost:3000'/> */}
                    </img>
                </a>
                </button>
            </div>
            
            {/*로그인*/}
            <from className='sns-in'>
                <div class="sns_login_wrap"><div class="tit" className="tit">SNS 로그인</div>
                <div class="sns_list">
                    <ul>
                        <button className="Naver_Button">
                            <a href="https://nid.naver.com/oauth2.0/authorize?response_type=code&
svctype=0&
client_id=oLAu1GlBdKO6bRxivhQ2&
redirect_uri=http://localhost:3000/&
state=4ohD4Popsj5URbo3AQxvG4m30DpB0l3JZN3GEJXxcmQ_XNz4dce2A5TPUGh5SSvWbMfR9VIJvIlCWDFrU9E9n27U92qXDubFzi7vpSQcHxbTMV9TYT5EuSNlVcB3sAour4JLsQRIdb6kNAt11B27rkqC
">
                                <span class="logo">
                                    <img src="naver_long.png" alt="네이버"/>
                                </span>
                            </a><br/>
                        </button>
                        <button className="Kakao_Button">
                            <a href="https://kauth.kakao.com/oauth/authorize?
client_id=497431094a264e24b995a0bd5178900a&
state=d3cfa0e1d3c844ef0cd959a52d7451a9aa6aeaa4&
redirect_uri=http://localhost:3000/&
response_type=code&auth_tran_id=s8fnrlxcl98a432f563a20ec43eb463878d3c627079l4lcfkmw&
ka=sdk%2F1.42.0%20os%2Fjavascript%20sdk_type%2Fjavascript%20lang%2Fko-KR%20device%2FWin32%20origin%2Fhttps%253A%252F%252Fhttp://localhost:3000/&
is_popup=false">
    <span class="logo">
        <img src="kakao_long.png" alt="카카오톡"/>
        </span>
        </a>
        <br/>
        
        </button>
                        <button className="Gooogle_Button">
                            <a href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?scope=profile%20email&response_type=code
&client_id=332438887894-2kshusdiltq94dk66ebpeh0cjh1ihf6e.apps.googleusercontent.com&
redirect_uri=http://localhost:3000&
state=Y79VDLacGQfDNZ7j55mazh5~fUDOP2HJ6P27i0BD_~RPzE1l~V4VqmkDSRATGFiVtLWD3zsm4~lDyR6qp2w0OtcmDJ0FXXr5oMhdcER2Q71P3j9TvglvFW0Yfin_EXtVszbqUwVssC6x6GVL591gatGV&
include_granted_scopes=true&access_type=offline&flowName=GeneralOAuthFlow">
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