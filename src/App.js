import logo from './logo.svg';
import './App.css';
import { type } from 'os';
import Api from './Api';
import JSONDATA from './DATA.json'
import {useState} from 'react'
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Dividend from './Dividend';

function App() {
  return (
    <div className="App" className="App-header" >
        {/*<Api name="에스케이하이닉스" crno="1344110001387" />*/}
        <Routes>
         <Route path="/" element={<Home />} />
          <Route path="dividend" element={<Dividend />} />
        </Routes>
    </div>
  );
}
function Home() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('')
  const onAlert = () => {
    alert("다음페이지로 넘어가야 함!");
  }
  // 엔터키 입력하면 다음페이지
  const onKeyUp = (event) => {
    if(event.keyCode === 13){
      {navigate({pathname: "/dividend"})}
    }
  }
  return (
    <>
    <a>
      {/* 로고이미지 */}
      <img src="kimleejung_minilogo.png" className="App-logo"></img>
      {/*로고명*/}
      <img src="kimleejung_letterlogo.png" className="App-size"></img>
    </a>

    &nbsp;&nbsp;
    {/*검색창*/}
    <b>
      <input onKeyUp={onKeyUp} type="search" className="App-Search" placeholder="  기업명을 입력하시오." id="Enterprise" value={searchTerm} onChange={event => {setSearchTerm(event.target.value)}}/>
      &nbsp;
      {/*검색버튼*/}
      <img src="button.png" className="App-button" onClick={() => {navigate({
        pathname: "/dividend",
        // state: {userCell: userCell}
      })}}></img>

      {/*검색 기능*/}
      {JSONDATA.filter((val)=> {
        if (searchTerm == ""){
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

    <br/><br/><br/><br/><br/><br/>
    </>
  );
}


export default App;