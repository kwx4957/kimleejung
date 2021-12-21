import logo from './logo.svg';
import './dividend.css';
import { type } from 'os';
import Api from './Api';
import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";

const Dividend = () => {
  const { state } = useLocation();
  return (
    <div>
      {/* 로고 위치 및 크기 지정*/}
      <img src="kimleejung_logo.png"  className="divi-logo" alt='logo'></img>
      <p>{ state.number }</p>
      <p>{ state.company }</p>
      <p>{ state.law_number }</p>
      <Api name={ state.company } crno={ state.law_number } />
    </div>
  );
}

export default Dividend;