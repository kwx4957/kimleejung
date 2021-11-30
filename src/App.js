import logo from './logo.svg';
import './App.css';
import { type } from 'os';
import Api from './Api';
import JSONDATA from './DATA.json'
import {useState} from 'react'
function App() {

  const onAlert = () => {
    alert('다음페이지로 넘어가야 함!');
  }

  const onKeyUp = (event) => {
    if(event.keyCode === 13){
      onAlert();
    }
  }

  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div className="App" className="App-header" >
        <Api />

    <a>
    {/*로고이미지*/}
    <img src="kimleejung_minilogo.png" className="App-logo"></img>
    {/*로고명*/}
    <img src="kimleejung_letterlogo.png" className="App-size"></img>
    </a>

    &nbsp;&nbsp;
    {/*검색창*/}
    <input onKeyUp={onKeyUp} type="search" className="App-Search" placeholder="  기업명을 입력하시오." name="Enterprise" onChange={event => {setSearchTerm(event.target.value)}}/>
    
    {/*검색 기능*/}
    {JSONDATA.filter((val)=> {
      if (searchTerm == ""){
        return null
      } else if (val.company.toLowerCase().includes(searchTerm.toLowerCase())){
        return val
      }
    }).map((val,key)=> {
      return (
      <div className="user" key={key}> 
        <p> {val.company} </p>
      </div>
      );
    })}

    <button onClick={onAlert}>확인</button>

    <br/><br/><br/><br/><br/><br/>
    
    </div>
  );
}

export default App;