import logo from './logo.svg';
import './App.css';
import { type } from 'os';
import Api from './Api';
import JSONDATA from './DATA.json'
import {useState} from 'react'
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Dividend from './Dividend';
import React from 'react';

function App() {
  return (
    <div className="App App-header">
        {/*<Api name="에스케이하이닉스" crno="1344110001387" />*/}
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/dividend" element={<Dividend/>} />
        </Routes>
    </div>
  );
}

function Home() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    //검색한 데이터가 제이스 데이터 안에 찾음
    const data = JSONDATA.find( ({ company }) => company === searchTerm);
    if(!data) return alert('검색 결과가 없습니다.')
    navigate('/dividend', { state: data });
  }
  return (
    <>
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