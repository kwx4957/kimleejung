
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import HeaderComponent from './components/common/HeaderComponent';
import Dividend from './components/dividend';
import Login from './components/login';
import Board from './components/dividend/Board';
import Post from './components/dividend/Post';

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
