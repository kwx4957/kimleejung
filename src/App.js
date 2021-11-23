import logo from './logo.svg';
import './App.css';
import { type } from 'os';
import Api from './Api';

function App() {
  
  return (
    <div className="App" className="App-header" >
        <Api />

    <a>
    <img src="kimleejung_minilogo.png" className="App-logo"></img>
    <img src="kimleejung_letterlogo.png" className="App-size"></img>
    </a>
   
    

    &nbsp;&nbsp;
    <input type="text" className="App-Search" placeholder="  기업명을 입력하시오."/>
    
    

    <br/><br/><br/><br/><br/><br/>
    
    </div>
  );
}

export default App;