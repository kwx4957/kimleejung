import './App.css';
import JSONDATA from './DATA.json'
import {useState} from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import Dividend from './Dividend';
import Login from './Login' ;
import React from 'react';

function App() {
  return (
    <>
    <div className="App App-header">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/dividend" element={<Dividend/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
    </div>
    </>
  );
}

function Home() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

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

  return (
    <>
      <form onSubmit={onLogin}>
        <button class="Login">로그인</button>
      </form>

      <div>
        {/* 로고이미지 */}
        <img src="kimleejung_minilogo.png" className="App-logo" alt='logo'></img>
        {/*로고명*/}
        <img src="kimleejung_letterlogo.png" className="App-size" alt='logoName'></img>
      </div>

      &nbsp;&nbsp;
      {/*검색창*/}
      <b>
        <form onSubmit={onSubmit}>
          <input type="search" className="App-Search" placeholder="기업명을 입력하시오." id="Enterprise" value={searchTerm} onChange={event => {setSearchTerm(event.target.value)}}/>
          &nbsp;
          {/*검색버튼*/}
          <button>
            <img src="button.png" className="App-button" alt='버튼 이미지' />
          </button>
        </form>

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
      </b>
    </>
  );
}


export default App;