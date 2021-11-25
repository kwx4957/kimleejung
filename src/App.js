import logo from './logo.svg';
import './App.css';
import { type } from 'os';
import Api from './Api';

function App() {
  
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
    {/*입력창*/}
    <input type="search" className="App-Search" placeholder="  기업명을 입력하시오." name="Enterprise[i]"/>
    

    
    

    <br/><br/><br/><br/><br/><br/>
    </div>
  );
}

export default App;