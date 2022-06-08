import './App.css';
import JSONDATA from './DATA.json'
import {useState} from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import Dividend from './Dividend';
import Login from './Login' ;
import React, { Children } from 'react';

function App() {
  return (
    <>    
          <Routes>
            <Route path="/" element={<Home />}/>
          </Routes>

          <div className="App App-header">
            <Routes>
              <Route path="/dividend" element={<Dividend/>} />
            </Routes>
            
            <Routes>
              <Route path="/login" element={<Login/>} />
            </Routes>

          </div>
    </>
  );
}

function Home() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [isNav,setNav]=useState(false)

  const onSubmit = (e) => {
    e.preventDefault();
    //검색창에서 입력한 값을 DATA.json파일에서 찾음
    const data = JSONDATA.find( ({ company }) => company === searchTerm);
    if(!data) return alert('검색 결과가 없습니다.')
    navigate('/dividend', { state: data });
  }

  const onLogin = (e) => {
    e.preventDefault();
    navigate('/login');
  }

  
  const onSide = (e) => {
  e.preventDefault();
  setNav((prev) => !prev)
}

const onBoard = (e) => {
  e.preventDefault();
  alert('검색 결과가 없습니다.')
  // navigate('/board');
}

  return (
    <>
    
    <form onSubmit={onLogin}>
      {/* 로그인 */}
      <button className="Login_Button">
        <img src="login.png" className='Login' alt="로그인"/><br/>
        <span className="Login_Text">Login</span>
      </button>
    </form>

      <div>
        {/* 로고이미지 */}
        <img src="kimleejung_minilogo.png" className="App-logo" alt='logo'></img>
        {/*로고명*/}
        <img src="kimleejung_letterlogo.png" className="App-size" alt='logoName'></img>
      </div>
    
        {/*검색창*/}
        <form onSubmit={onSubmit}>
          <input type="search" className="App-Search" placeholder="기업명을 입력하시오." id="Enterprise" value={searchTerm} onChange={event => {setSearchTerm(event.target.value)}}/>
         
          {/*검색버튼*/}
          <button className="search_button">
            <img src="button.png" className="App-button" alt='버튼 이미지' />
          </button>
        </form>
        <div  className="search_list">
          {/*검색 기능*/}
          {JSONDATA.filter((val)=> {
            if (searchTerm === ""){
              return null
            } else if (val.company.toLowerCase().includes(searchTerm.toLowerCase())){
              return val
            }
          }).map((val,key)=> {
            return (
            <div className="user" key={key} onClick={()=>{setSearchTerm(val.company)}}> 
              <p> {val.company} </p>
            </div>
            );
          })}
        </div>

        {/* 기업순위 */}
        <form onSubmit={onSide}>
          <button className="TOP_Button">
            <img src="arrow_push.png" className="TOP" alt="배당률 순위" />
          </button>
        </form>

        <div className='nav' style={isNav?{display:"block"}:{display:'none'}}>
          
          

          {/*sample data*/}
          <h1>배당률 TOP 10</h1>
          <ul>1순위, 기업 명, n%</ul>
          <ul>2순위, 기업 명, n%</ul>
          <ul>3순위, 기업 명, n%</ul>
          <ul>4순위, 기업 명, n%</ul>
          <ul>5순위, 기업 명, n%</ul>
          <ul>6순위, 기업 명, n%</ul>
          <ul>7순위, 기업 명, n%</ul>
          <ul>8순위, 기업 명, n%</ul>
          <ul>9순위, 기업 명, n%</ul>
          <ul>10순위, 기업 명, n%</ul>
          
          <form onSubmit={onSide}>
            <button className="Side_Button">
              <img src="arrow_pull.png" className="TOP" alt="기업순위" />
            </button>
          </form> 
        </div>
    </>
  );
}


export default App;