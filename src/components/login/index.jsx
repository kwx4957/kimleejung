import './Login.css';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const REST_API_KEY = "2bfe8ae0660ba533d909f87f234194bb";
    const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    
    const navigate = useNavigate();
    const onKakao = (e) => {
        e.preventDefault();
        navigate(KAKAO_AUTH_URL);
    }    

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
                        {/*카카오*/}
                        <button className="Kakao_Button" onClick={onKakao}>
                            <span class="logo">
                                 <img src="kakao_long.png" alt="카카오톡"/>
                            </span><br/>
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