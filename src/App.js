
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';

import Dividend from './components/dividend';
import Login from './components/login';
import Board from './components/dividend/Board';
import Post from './components/dividend/Post';
import User from "./components/User";
import Auth_Kakao from "./components/login/Auth_Kakao";
import Auth_Naver from "./components/login/Auth_Naver";
function App() {
  return (
    <>
      <BrowserRouter>
        {/* 고정 컴포넌트 */}
        {/* <HeaderComponent/> */}
        {/* 갈아끼워지는 컴포넌트들 */}
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/dividend" element={<Dividend/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/board" element={<Board/>} />
          <Route path="/post" element={<Post/>} />
          <Route path="/oauth/kakao/callback" element={<Auth_Kakao/>} />
          <Route path='/naver' component={<Auth_Naver/>} />
          <Route path="/user" element={<User/>} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
