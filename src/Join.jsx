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
                이름 : <input type="text" placeholder="이름" id="name"/><br/><br/>
                생년월일 : <input type="date" value="xxx" min="yyy" max="zzz"/><br/><br/>
                ID : <input type="text" placeholder="ID" id="id"/><br/><br/>
                PW : <input type="text" placeholder="PW" id="pw"/><br/><br/>
            </div>
            
        </>
    );
} 
export default Join;