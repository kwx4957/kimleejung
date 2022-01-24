import './Join.css';
import React from 'react';
function Join () {

    return (
        <>
            <div style={{ width: '100vw' }}> 
                <img src="kimleejung_logo.png"  className="divi-logo" alt='logo'/>
            </div>
            <div className='join-in'>
                Join<br/>
                아이디 : <input type="text" placeholder="ID" id="id"/><br/><br/>
                비밀번호 : <input type="text" placeholder="PW" id="pw"/><br/><br/>
                비밀번호 확인 : <input type="text" placeholder="PW" id="pw"/><br/><br/>
                이름 : <input type="text" placeholder="이름" id="name"/><br/><br/>
                생년월일 : <input type="date" value="xxx" min="yyy" max="zzz"/><br/><br/>
                성별 : <select name="items1">
                    <option value="male" id="sex"> 남성</option>
                    <option value="female" id="sex"> 여성</option>
		        </select><br/><br/>
                주소 : <input type="text" placeholder="주소" id="homeAddress"/><br/><br/>
                핸드폰 번호 : <input type="text" placeholder="휴대폰 번포" id="phonNum"/> <button>인증번호 받기</button><br/><br/>
                인증번호 : <input type="text" placeholder="인증번호" id="certified"/> <button>인증번호 확인</button><br/><br/>
                <button>회원가입</button>
            </div>
            
        </>
    );
} 
export default Join;